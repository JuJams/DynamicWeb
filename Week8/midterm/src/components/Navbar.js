import React from 'react'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-content">
        <button className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about-me'); }}>
          About Me
        </button>
        <button className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('what-i-made'); }}>
          What I Made
        </button>
        <button className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('what-i-wanna-make'); }}>
          What I Wanna Make
        </button>
        <button className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('tips'); }}>
          Tips
        </button>
      </div>
    </nav>
  )
}

export default Navbar
