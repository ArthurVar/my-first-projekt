import React from "react";
import logo from './niveni-logo.png'
import l from './header.module.css'



function Header(){
    return(
        <div className={l.header}>

          <img src={logo} alt="logo"  className={l.logo}/>
          <div className={l.label}>
              <label>
                  <input type='text' className={l.inputHeader}/>
                  <button className={l.button}>search</button>
              </label>
          </div>

          <div className={l.leng}>
              lezunner
          </div>
          <div className={l.signin}>
              sign in
          </div>

        </div>
    )
}

export default Header;