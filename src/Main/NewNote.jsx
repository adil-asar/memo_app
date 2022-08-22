import React, { useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import './newnote.css'
import pic from '../images/note.png'


const NewNote = ({addnewdata}) => {

  const [inp,setInp] = useState({
    title:'' , memo:''
  })

  const Character = 150;

  const Input = e => {
     
    const {name,value} = e.target

    if (Character - e.target.value.length>=0) {
      setInp({...inp,[name]:value})
    }
    
  }

  const Submit = e => {
    e.preventDefault()
    if (inp.title && inp.memo) {
      addnewdata(inp)
      setInp({title:'' , memo:''})
    }

   
    
  }

  return (

    <div className='new_note'>
     
    
      <img src={pic} className='img_css' alt="" />
     

      <form action="" onSubmit={Submit}>
        <input
        onChange={Input}
        name='title'
        value={inp.title}
          className='input_css'
          placeholder='Enter Title'
          type="text"
           />

        <textarea
          className='input_css text_area'
          name="memo" 
          onChange={Input}
          value={inp.memo}
          cols="30"
          placeholder='Enter Memo'
          rows="8"
           />

        <div className='addnot_footer'>

          <p> 
              {Character - inp.memo.length} remaining
             </p>

          <button
           className='addbtn_css'
           type='submit'>
            <HiOutlinePlus
             className='add_icon' /> 
             </button>
        </div>

      </form>
    </div>
  )
}

export default NewNote