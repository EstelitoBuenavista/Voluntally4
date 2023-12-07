import '../css/Table.css'
import '../css/index.css'
import '../css/App.css'

function App(activity){

    const date = activity.date ? activity.date.split("T")[0] : "No Date";
    const status = activity.status == 'not-approved' ? ()=>window.location.href = "./EventAttendance" : "";

    return (
    <>
    <tr >
      <td onClick={status}  className="Table__data">{activity.title}</td>
      <td onClick={status} className="Table__data">{date}</td>
      <td onClick={status} className="Table__data">{activity.location}</td>
      <td onClick={status} className="Table__data">{activity.desc}</td>
      <td onClick={status} className="Table__data">{activity.status}</td>
      <td  className="Table__data">
        <button className="delete-button DeleteButton" onClick={() => {activity.handleDelete(activity.id)}}>✕</button>
      </td>
      </tr>
      
      </>
    )
}

export default App