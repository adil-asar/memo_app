import React from 'react'
import './search.css'
import {BsSearch} from 'react-icons/bs'
const Search = ({search,setSearch}) => {

    const searching = e => {
        setSearch(e.target.value)
    }

    return (
        <div className='search'>
            <div className="input-group mb-3">
                <input type="text"
                placeholder='Search Memo .....'
                value={search}
                onChange={searching}
                    className="form-control input_cus_css"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" />

                <span
                    className="input-group-text label_css"
                    id="inputGroup-sizing-default">
                  <BsSearch className='search_icon'/>
                </span>
            </div>
        </div>
    )
}

export default Search