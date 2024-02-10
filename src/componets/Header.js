import React from 'react';
import './css/Header.css';
import { Link , useNavigate} from 'react-router-dom';




const Header = () => {
  const navigate = useNavigate();
 
  const handleRedirect = (e) => {
    let path = `/`
  
    navigate(path);
  };
  return (
    <>
      <header id="header">
      <div className="nav">
        <div className="first">
          <div className="exploreSearch">
            <div>
              <button>
                <span>
                  <svg viewBox="0 0 448 512">
                     {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                   
                  </svg>
                </span>
                <strong>Explore</strong>
              </button>
            </div>
            <div>
              <form role="search" id="form">
                <input
                  type="search"
                  id="query"
                  name="q"
                  placeholder="Search..."
                  aria-label="Search through site content"
                />
                <button>Search</button>
              </form>
            </div>
          </div>
          <div id="clockDisplay" className="dateTime"></div>
        </div>
        
        <div className="logo"  onClick={handleRedirect}>
           

              
        <Link to={"/"} style={{ textDecoration: 'none', color: 'white', fontSize: '40px' }}>
                    The Bharat News
        </Link>
           

        </div>
        
        <div className="second">
          <div>
            <a href="https://www.dailysudoku.com/">Games</a>
            <a href="e-paper.html">E-Paper</a>
            <a href="signup.html">Sign Up</a>
          </div>
          
        </div>
      </div>

     
    </header>
    
    </>
  )
}

export default Header
