import React from 'react'

function Header() {

  function handleLogout( ){
    localStorage.removeItem('token')
  }
  return (
    <header>
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src="/logo.png" alt="" />
          </div>
          <button onClick={() => handleLogout()} className="header-btn">
            Log out
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header