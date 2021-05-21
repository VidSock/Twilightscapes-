/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
// import { RiHeart2Line } from "react-icons/ri"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => (
  <footer
    className="site-footer footer"
    sx={{
      bg: "#111",
    }}
  >
    <div className="content">
          


        
 
 


          <ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>
    <li className="socialtext"><strong>I&apos;m<br />Social</strong></li>
  <li><a className="social"  href="https://facebook.com/twilightscapes" alt="Facebook" title="Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>
  <li style={{display: '',}}><a className="social" href="https://www.linkedin.com/in/toddlambert" alt="LinkIn" title="LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></li>
  <li><a className="social" href="https://twitter.com/toddlambert" alt="Twitter" title="Twitter"><FaTwitterSquare /><span>Twitter</span></a></li>
  <li><a className="social" href="https://www.instagram.com/twilightscapes" alt="Instagram" title="Instagram"><FaInstagram /><span>Instagram</span></a></li>
  <li style={{display: 'none',}}><a className="social" href="https://www.pinterest.com/twilightscapes/" alt="Pinterest" title="Pinterest"><FaPinterestSquare /><span>Pinterest</span></a></li>
  
  <li><a className="social" href="https://www.youtube.com/channel/UCccK2S9xrcLnCR3dTuUwsxQ" alt="YouTube" title="YouTube"><FaYoutubeSquare /><span>YouTube</span></a></li>
  </ul>
  
  
  
  
  
  <div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: ''}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>
  
  
  
  <div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '80%'}}>Copyright &copy; {(new Date().getFullYear())} Todd Lambert - Built with Gatsby on Netlify</div>
          </div>
  </footer>
)

export default Footer
