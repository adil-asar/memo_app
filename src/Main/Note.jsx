import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import './note.css'
const Note = ({data,setData,del_mem}) => {

 

const Delete = () =>{
del_mem(data.id)
}


  return (
    <div className='note_css'>
      <h3 className='title'> {data.title} </h3>
      <p className='memo'>
        {data.memo}
      </p>
      <div className='note_footer'>
        <p>{data.date}</p>
        <button 
        className='delete_btn'
      onClick={Delete}
        >
          <AiFillDelete className='del_icon' />
          </button>
      </div>
    </div>
  )
}

export default Note