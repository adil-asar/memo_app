import React, {useEffect, useState} from 'react'
import './list.css'

import Note from './Note'
import Search from './Search'
const List = ({array_data,setData,delete_memo}) => {

  const [search,setSearch] = useState('')

   // fetching memo from localStorage

  useEffect(()=>{
    const fetch_memo = JSON.parse(localStorage.getItem('memo_app'))
    setData(fetch_memo)
  },[])

  // searching keys

  const keys = ["title","memo","date"]


  return (
    <div className='list_css'>

      <Search search={search} setSearch={setSearch}/>

      {
        array_data
        .filter((item)=> keys.some((key)=> item[key].toLowerCase().includes(search)))
        .map((element)=> <Note
         key={element.id}
         data={element}
         del_mem={delete_memo}
         />)
      }




    </div>
  )
}

export default List