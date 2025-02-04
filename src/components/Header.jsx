import { LogOut } from 'lucide-react'
import React from 'react'

function Header() {

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user-status')
    window.location.reload()
  }

  return (
    <header>
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src="/logo.png" alt="" />
          </div>
          <button onClick={handleLogout} className="header-btn">
            <LogOut />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
