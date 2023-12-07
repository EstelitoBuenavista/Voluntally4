
import { Link } from 'react-router-dom'
import { useState } from 'react'


function App() {

  const token = localStorage.getItem('token');
  const API_URL = "http://localhost:3000";
  const [FN,setFN] = useState("")
  const [LN,setLN] = useState("")
  const [Year,setYear] = useState("1")
  const [Program,setProgram] = useState("BSCS")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")

  const handleRegister = (e) =>{
    e.preventDefault()

    const newStudent = {
      last_name: LN,
      first_name: FN,
      email: Email,
      password: Password,
      role: "student",
      program: Program,
      year: Year
    };

    fetch(`${API_URL}/api/student/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account successfully Created", data);
        window.location.href = "./StudAdmin";
      })
      .catch((error) => {
        console.error("Error creating Account", error);
        console.log(JSON.stringify(newStudent))
      });
  }


  return (
    <>
      <div className="App__contents">
          <div className="Add">
            <h1>Add Student</h1>
            <div className="container">
              <form id="newStudent">
              <label >First Name</label>
              <input type="text" value={FN} onChange={e => setFN(e.target.value)} required />

              <label>Last Name</label>
              <input type="text" value={LN} onChange={e => setLN(e.target.value)} required />

              <label >E-mail</label>
              <input type="text" value={Email} onChange={e => setEmail(e.target.value)} required />

              <label >Password</label>
              <input type="password" value={Password} onChange={e => setPassword(e.target.value)} required />
                <div className=''>
                <div className="flex">
                  <div className="dropdowns">
                    Course
                    <select id="FormCourse_Reg" className="ButtonDropdown" onChange={(e) => setProgram(e.target.value)}>
                      <option value="BSCS">BSCS</option>
                      <option value="BSIT">BSIT</option>
                      <option value="BSIS">BSIS</option>
                    </select>
                  </div>
                  <div className="dropdowns">
                    Year
                    <select id="FormYear_Year" className="ButtonDropdown" onChange={(e) => setYear(e.target.value)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <input
                  className="ButtonAdd"
                  id="addButton"
                  type="submit"
                  value="Add"
                  onClick={handleRegister}
                />
                </div>
              </form>
            </div>
          </div>
          </div>
    </>
  )
}

export default App