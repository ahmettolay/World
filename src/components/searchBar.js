import React from 'react'

const SearchBox = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input 
            className="input" 
            type="text" 
            placeholder="Arama" 
            value={searchTerm} 
            onChange={onSearchChange} 
          />
        </div>
        <div className="control">
          <button className="button is-info" type="submit">
            Ara
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBox
