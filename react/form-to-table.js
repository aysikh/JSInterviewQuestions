import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm(props, { addEntryToPhoneBook }) {
  const handleFirstName = (event) => {
    // console.log(event.target.value)
    props.setUserFirstName(event.target.value)
  }

  const handleLastName = (event) => {
    props.setUserLastName(event.target.value)
  }

  const handlePhone = (event) => {
    props.setUserPhone(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let person = {
        userFirstName: props.userFirstName, 
        userLastName: props.userLastName, 
        userPhone: props.userPhone
    }
    props.setDirectory([...props.directory, person]) 
    // console.log(props.directory)
    // console.log(props.directory[0] ? props.directory[0].userFirstName : null)
    // console.log(props.directory[0].userFirstName)
  }

  return (
    <form onSubmit={e => { 
      handleSubmit(e)}} 
      style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        onChange={(event) => handleFirstName(event)}
        style={style.form.inputs}
        className='userFirstName'
        name='userFirstName' 
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input
        onChange={(event) => handleLastName(event)}
        style={style.form.inputs}
        className='userLastName'
        name='userLastName' 
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        onChange={(event) => handlePhone(event)}
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
      />
      <br/>
      <input 
        onSubmit={handleSubmit}
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {
  // console.log(props.directory[0] ? props.directory.userFirstName : null)
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        { props.directory.length > 0 ? 
        props.directory.map (person => 
            <tr> 
              <td> {person.userFirstName} </td>
              <td> {person.userLastName} </td>
              <td> {person.userPhone} </td>
            </tr>
        ) : null}
      </tbody>

    </table>
  );
}


function Application(props) {

  const [userFirstName, setUserFirstName] = useState("")
  const [userLastName, setUserLastName] = useState("")
  const [userPhone, setUserPhone] = useState(0)
  const [directory, setDirectory] = useState([])


  return (
    <section>
      <PhoneBookForm 
        userFirstName={userFirstName}
        setUserFirstName={setUserFirstName}
        userLastName={userLastName}
        setUserLastName={setUserLastName}
        userPhone={userPhone}
        setUserPhone={setUserPhone}
        directory={directory}
        setDirectory={setDirectory}
      />
      <InformationTable 
        directory={directory}
      />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);