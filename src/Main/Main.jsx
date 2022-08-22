import React, { useState, useEffect } from 'react'
import List from './List'
import './main.css'
import Data from '../Data'
import NewNote from './NewNote'
import { nanoid } from "nanoid"


const Main = ({ mode }) => {

  const [data, setData] = useState(Data)



  const addnewdata = (val) => {
    const date = new Date()
    const obj =
    {
      id: nanoid(),
      title: val.title,
      memo: val.memo,
      date: date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    }
    const newval = [...data, obj]
    localStorage.setItem('memo_app', JSON.stringify(newval))
    setData(newval)
  }

  //  Fetch Memo 

  useEffect(() => {
    const fetch = JSON.parse(localStorage.getItem('memo_app'))
    setData(fetch)
  }, [])

  // Delete Memo

  const Delete = (id) => {
    let del = JSON.parse(localStorage.getItem('memo_app'))
    del = del.filter((memo) => memo.id !== id)
    localStorage.setItem('memo_app', JSON.stringify(del))
    setData(del)
  }



  return (
    <div className={`main_css ${mode ? 'dark_css' : ''}`}>
      <NewNote addnewdata={addnewdata} />
      <List array_data={data} setData={setData} delete_memo={Delete} />
    </div>
  )
}

export default Main