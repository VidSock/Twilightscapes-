/** @jsx jsx */
import { jsx } from "theme-ui"
// import { Link } from "gatsby"
// import { RiHeart2Line } from "react-icons/ri"
import Icons from "../util/socialmedia.json"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/fa'

const sIcons = Icons.socialIcons.map((icons, index) => {
  return (
    <div key={"social icons" + index} style={{fontSize:'40px !important'}}>
      
      {icons.icon === "facebook" ? (
        <a className="social"  href={icons.url} alt="Facebook" title="Facebook" target="_blank" rel="noreferrer"><FaFacebookSquare /><span>Facebook</span></a>
      ) : (
        ""
      )}
      {icons.icon === "twitter" ? (
       <a className="social" href={icons.url} alt="Twitter" title="Twitter" target="_blank" rel="noreferrer"><FaTwitterSquare /><span>Twitter</span></a>
      ) : (
        ""
      )}
      {icons.icon === "linkedin" ? (
        <a className="social" href={icons.url} alt="LinkIn" title="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /><span>LinkedIn</span></a>
      ) : (
        ""
      )}
      {icons.icon === "youtube" ? (
        <a className="social" href={icons.url} alt="YouTube" title="YouTube" target="_blank" rel="noreferrer"><FaYoutubeSquare /><span>YouTube</span></a>
      ) : (
        ""
      )}
      {icons.icon === "instagram" ? (
        <a className="social" href={icons.url} alt="Instagram" title="Instagram" target="_blank" rel="noreferrer"><FaInstagram /><span>Instagram</span></a>
      ) : (
        ""
      )}
  
    </div>
  )
})


const Social = () => (



          


        
 
    <div
            className="social-icons"
            sx={{
              variant: "variants.socialIcons",
              justifyContent:'center',
            }}
          >
            <div style={{fontSize:'1rem', textAlign:'center', margin:'3px .5rem 0 0'}}><strong>I'm<br />Social</strong></div>
            {sIcons}
          </div>
          




  
  
  

  )

  export default Social
