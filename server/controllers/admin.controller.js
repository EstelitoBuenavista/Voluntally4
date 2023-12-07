//NOTE: POSSIBLY USELESS, ALSO POSSIBLY JUST FINDALL OR FINDBYID
const db = require("../models");
const bcrypt = require('bcrypt')
const Admin = db.admin;
const User = db.user;
const saltRounds = 8;

exports.create = async (req, res) => {

    const data = req.body;

   bcrypt.hash(data.password, saltRounds).then((hashedPass)=>{
    User.findAll({
      where: {
        email: data.email,
      },
    })
    .then((flag) => {
      if (flag.length > 0){ // checker to see if email in use
        res.status(400).send({flag, message: "Email Already in Use" });
        return;
      }
      const createdUser = {
        email: data.email,
        password: hashedPass.toString(),
        first_name: data.first_name,
        last_name: data.last_name,
        role: "admin",
      }
  
      User.create(createdUser)
      .then((thenData) => {
          console.log(data)
          let createdStudent = {
            user_id: thenData.user_id,
          }
          Admin.create(createdStudent)
          .then((student) => {
            res.status(201).send({ createdUser, student });
          })
          .catch((err) => {
          res.status(500).send({ message: err.message });
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  
    })
   });

  
} 