const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
//const Op = db.Sequelize.Op;
const Admin = db.admin;
const User = db.user;
const Student = db.student;
const saltRounds = 8;


exports.login = async (req, res) => { // login assuming email and password is needed for login
  const data = req.body;
  console.log(data)
  User.findOne({
    where: {
      email: data.email,
    },
  })
  .then((user) => {
    if (!user) return res.status(404).json({ message: "User not found." });
      bcrypt.compare(data.password, user.password, async (err, isPasswordValid) => {
        if (err) {
          return res.status(500).send({ message: "Error comparing passwords." });
        }
  
        if (!isPasswordValid) {
          return res.status(400).json({ message: "Invalid Password." });
        }
  
      let token = ''
      if (user.role == "admin"){
        Admin.findOne({
          where: {
            user_id: user.user_id,
          },
        })
        token = jwt.sign({ id: user.user_id, email: user.email, role: "admin"}, "tokensecret1", {
        expiresIn: 86400,
        });
        res.status(200).json({
          user,
          accessToken: token,
        });
         
      } else{
        Student.findOne({
          where: {
            user_id: user.user_id,
          },
        }).then((student) => {
          token = jwt.sign({id: student.student_id, email: user.email, role: "student"}, "tokensecret1", {
            expiresIn: 86400,
          });
          res.status(200).json({
            user,
            accessToken: token,
          });
        }).catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }

    })
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });

};

exports.create = async (req, res) => {
  const data = req.body;
  const user = {
    email: data.email,
    password: data.password,
    first_name: data.first_name,
    last_name: data.last_name,
    role: data.role,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

/*NOTE TO SELF: THIS IS SUPPOSED TO SHOW ALL, FIND DOCUMENTATION FOR THIS*/
exports.findUser = (req, res) => {
  //conditional
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findUserID = (req, res) => {
  //options
  let user_id = req.body.user_id;

  //the .findByPk method refers to finding somehting by it's primary key
  User.findByPk(user_id)
    .then((data) => {
      res.status(200).send({
        status: data ? "found" : "not found",
        data: data ? data : null,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  //options
  let id = req.params.id;

  //the .findByPk method refers to finding somehting by it's primary key
  User.findByPk(id)
    .then((user) => {
      if (user.role == "student"){
        Student.findByPk(user.user_id)
      .then((student) => {
        res.status(200).send({
          status: user && student ? "found" : "not found",
          student: student ? student : null,
          user: user ? user : null,
        });
      })
      } else{
        Admin.findByPk(user.user_id)
      .then((admin) => {
        res.status(200).send({
          status: user && admin ? "found" : "not found",
          admin: admin ? admin : null,
          user: user ? user : null,
        });
      })
      }
      
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// exports.update = (req, res) => {
//   let data = req.body;
//   Role.update({ type: data.type }, { where: { role_id: data.role_id } })
//     .then(() => {
//       res.status(200).send({
//         message: "role updated successfully",
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

// exports.delete = (req, res) => {
//   let data = req.body;
//   Role.destroy({ where: { role_id: data.role_id } })
//     .then(() => {
//       res.status(200).send({
//         message: "role deleted successfully",
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };
