import React from "react";
function NavBar() {
  const links = ["home", "about", "projects"];

  const portfolioLinks = links.map( (link, index) => {
     return <a key={index} href={'#' + link}>{link}</a>
  })
  
  return <nav>
     {portfolioLinks}
     </nav>;
}

export default NavBar;