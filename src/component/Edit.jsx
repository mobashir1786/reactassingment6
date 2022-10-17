import React from 'react'
import {Link} from 'react-router-dom'
export default function Edit() {
  return (
    <div>

<div className='Add_details_container'>
        <div><label>Name:</label>
          <input id="name" type="text" name='name'/></div>
        <div><label>Age:</label>
          <input id="age" type="text" name='age'/></div>
        <div> <label>Course:</label>
          <input id="course" type="text" name='course'/>

        </div>

        <div>
          <label>Branch:</label>
          <input id="branch" type="text" name='branch'/></div>
      </div>

      <div className='button_ctn'>

        <Link className='button' to="/Student_form">Cancel</Link>
        <Link className='buttons' to="/Student_form">Update</Link> 

      </div>
    </div>
  )
}