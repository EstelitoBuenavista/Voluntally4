import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/ButtonAdd.css'
import './css/ButtonDropdown.css'
import './css/Table.css'
import './css/PointsButton.css'
import './css/StudentsView.css'
import ButtonAdd from './components/ButtonAdd'
import ButtonDropdown from './components/ButtonDropdown'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'

function App(prop) {

  return (
    <>
      <div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab /><ActTab/>
            </div>
            
            <div className="StudentsView">

            <div className="ActivityDetails">
                <div className="Activity_Titles">
                    <h1 className="Activity_Titles_EventTitle">{prop.title}</h1>
                    <h1 className="Activity_Points">{prop.points} CES Points</h1> 
                    <button className='actcompleted'>Activity Completed</button>
                </div>
                <div className="Activity_Info">
                    <h3 className="Details">Event Date: {prop.date}</h3>
                    <h3 className="Details">Event Location: {prop.location}</h3>
                 </div>
            </div>

              <div className="StudentsView__menu">
                <ButtonAdd link = "/AddStudent" text="Add Student"/>
                <ButtonDropdown text = "Sort By"/>
                <ButtonDropdown text = "Filter"/>
              </div>

              <table id="studentsTable" className="Table">
                <thead>
                  <tr>
                    <th className="Table__header">ID</th>
                    <th className="Table__header">Name</th>
                    <th className="Table__header">Program</th>
                    <th className="Table__header">Year</th>
                    <th className="Table__header">Status</th>
                  </tr>
                </thead>
                <tbody id="studentsTableBody">
                  {/* <!-- Existing and dynamically populated student records will go here --> */}
                </tbody>
              </table>
              
            </div>
          </main>
        </div>
    </>
  )
}

export default App