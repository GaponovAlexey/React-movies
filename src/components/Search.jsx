import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovies } from '../redux/reduser'
const API_KEY = process.env.REACT_APP_API_KEY

export const Search = () => {
  const [state, setState] = useState('')
  const [type, setType] = useState('all')

  const dispatch = useDispatch()

  const handleFilter = (e) => {
    setType((type) => (type = e.target.dataset.type))
    dispatch(searchMovies({ str: state, type }))
  }

  const send = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovies({ str: state, type }))
      setState('')
    }
  }

  const sendBut = () => {
    if (state.trim().length) {
      dispatch(searchMovies({ str: state, type }))
      setState('')
    }
  }
  return (
    <div>
      <div className='row'>
        <div className='col s12'>
          <div style={{ display: 'flex' }} className='input-field '>
            <input
              value={state}
              onKeyDown={send}
              onChange={(e) => setState(e.target.value)}
              placeholder='search'
            />
            <button className='btn search-btn' onClick={sendBut}>
              send
            </button>
          </div>
        </div>
        <div>
          <p>
            <label>
              <input
                className='with-gap inp'
                name='type'
                type='radio'
                data-type='all'
                onChange={handleFilter}
                checked={type === 'all'}
              />
              <span>all</span>
            </label>
            <label>
              <input
                className='with-gap inp'
                name='type'
                type='radio'
                data-type='movie'
                onChange={handleFilter}
                checked={type === 'movie'}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className='with-gap inp'
                name='type'
                type='radio'
                data-type='series'
                onChange={handleFilter}
                checked={type === 'series'}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  )
}
