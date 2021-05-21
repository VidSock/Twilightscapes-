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

.galmenu{
display: flex; justify-content: space-around; align-items: center; margin:0 3%;
background:#111;
padding:4px 4px;
border-radius:10px;
// border:1px solid #444;
width:auto;
}
.galmenu li {width:; height:100%; padding:0; color:#fff; margin:0 3px; text-align: center; list-style-type:none;}



.galmenu .galgrad{display: block; padding:0; border-radius:6px; text-shadow: 1px 1px 1px black; height:100%;}

.galmenu .galgrad{
background: #333; /* Old browsers */

// background: -moz-linear-gradient(top, rgba(125,126,125,1) 0%, rgba(14,14,14,1) 100%); /* FF3.6-15 */
// background: -webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* Chrome10-25,Safari5.1-6 */
// background: linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 ); /* IE6-9 */
}

.galmenu [aria-current] {
background: #000; /* Old browsers */
border:1px solid #444;
cursor: pointer;

// background: -moz-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%, rgba(65,145,186,1) 40%, rgba(3,73,127,1) 100%); /* FF3.6-15 */
// background: -webkit-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* Chrome10-25,Safari5.1-6 */
// background: radial-gradient(ellipse at center, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}


@media (max-width: 48rem) {
.galmenu{
display: flex; justify-content: space-around; flex-wrap: wrap; align-items: top; flex-shrink: inherit; flex-basis: 30%;
}
.galmenu li{width:; margin:0 0 3px 0;}
.custom-gal li {width:; height:100%; padding:0; color:#fff; margin:5px 3px; text-align: center;}

.galmenu li:first-child{border:0px solid red !important; width:100% !important;}

}


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