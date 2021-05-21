/** @jsx jsx */
import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
import { jsx } from "theme-ui"
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import {  RiArrowRightSLine } from "react-icons/ri"

const CustomBox = styled.div`




`



   
const GalleryMenu = () => (

<CustomBox style={{}}>

<div className="outer intro" style={{backgroundColor:'', borderTop:'0px solid #000',}}>
      <div className="container1 content" style={{padding:'0 0 10px 0',}}>
    
{/* <h2 style={{textAlign:'center', fontSize:'80%', margin:'0', padding:'0 0 5px 0', color:'#ddd',}}>Available Galleries <span className="no-app" style={{fontSize:'90%',}}><FaLock /> ( requires free<Link to="/install"> app installation here</Link> )</span></h2> */}


      
      
      {/* <h4 style={{display:'none', textAlign:'center', fontSize:'70%', color:'#ddd',}}>Full Library:</h4>
<ul className="galmenu">
      <li style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 1rem', borderRight:'1px dotted #666', margin:'0 1rem 0 0',}}>Galleries</li>
      <li className="galmenu-item"><Link to="/galleries/gallery1" className="galgrad" title="Gallery 1" id="gallery1">I</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery2" className="galgrad" title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery3" className="galgrad" title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery4" className="galgrad" title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery5" className="galgrad" title="Gallery 5">V</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery6" className="galgrad" title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery7" className="galgrad" title="Gallery 7">VII</Link></li>
      
      
      <li className="galmenu-item no-app"><Link to="/install" className="galgrad" title="Gallery 8">VIII<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install" className="galgrad" title="Gallery 9">IV<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install" className="galgrad" title="Gallery 10">X<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      
      
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery8" className="galgrad" title="Gallery 8" has-app>VIII</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery9" className="galgrad" title="Gallery 9">IX</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery10" className="galgrad" title="Gallery 10">X</Link></li>
      </ul>
       */}
      
      
      
      
      
      
      <ul className="galmenu custom-gal" style={{marginTop:'5px',}}>

      <li style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 1rem 0 1rem', borderRight:'1px dotted #666', margin:'0 1rem 0 0',}}>Themed Galleries</li>

   
      
      <li className="galmenu-item">
      <Link
      className="button"
      to="/favorites"
      sx={{
        variant: "variants.button",
      }}
      title="Popular Favorites Gallery"
    >
      Popular Favorites
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>
     

      <li className="galmenu-item">
      <Link
      className="button"
      to="/milkyway"
      sx={{
        variant: "variants.button",
      }}
      title="Milky Way Gallery"
    >
      Milky Way
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>
      
      <li className="galmenu-item">
      <Link
      className="button"
      to="/cars"
      sx={{
        variant: "variants.button",
      }}
      title="See All Cars Gallery"
    >
      Relics of Rust
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>

      
      <li className="galmenu-item">
      <Link
      className="button"
      to="/ghosttowns"
      sx={{
        variant: "variants.button",
      }}
      title="Ghost Towns Gallery"
    >
      Ghost Towns
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>



      <li className="galmenu-item">
      <Link
      className="button"
      to="/crazygeo"
      sx={{
        variant: "variants.button",
      }}
      title="Crazy Geology Gallery"
    >
      Crazy Geology
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>


	  
      
      
      
      
      
      
      
      {/* <li className="galmenu-item has-app"><Link to="/vault/daylight" className="galgrad" title="During Daylight">During<br />Daylight</Link></li>
      <li className="galmenu-item no-app"><Link to="/vault" className="galgrad" title="During Daylight">During<br />Daylight <FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li> */}
      



      </ul>

</div>
      </div>

</CustomBox>
  
)

export default GalleryMenu