import React from "react";
import { NavLink, Outlet} from "react-router-dom";

import n from './navbar.module.css'

function Navbar(){
    return(
      <>
         <div className={n.navbar}>  
            <NavLink to='/glxavor'>Գլխավոր</NavLink>
            <NavLink to="/mermasin">Մեր մասին</NavLink>
            <NavLink to="/tesakani">Տեսականի</NavLink>
            <NavLink to="/hetkap">Հետադարձ կապ</NavLink>
            <NavLink to="/ogtakarxorhurdner">Օգտակար խորհուրդներ</NavLink>
         </div>

         <main className={n.outlet}>
             <Outlet/>
         </main>
      </>
    )
}

export default Navbar;