/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

// import Layout from "./layout"
// import Seo from "./seo"
import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}
.newsletter:before{
  content: ;
  width:100%;
  height:100%;
  position:absolute;
  z-index:-1;
  filter: blur(20px) grayscale(20%);
}

`


const NewsletterPage = () => (


<CustomBox style={{}}>
<form
          className="news-form"
          action="/signedup/"
          name="news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">

            <div className="newsletter" style={{background:'transparent', margin:'0 20px', padding:'10px', borderRadius:'12px',}}>

          <input type="hidden" name="form-name" value="news" />


            <label style={{color:'#fff'}}>
              <strong>Follow Me Into The Night</strong><br /> <span style={{fontSize:'70%'}}>Newsletter - (it's free and no SPAM!)</span><br /><br />
              <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{margin: '0 1rem 0 0', padding:'.6rem .8rem', width: '50%', border:'2px solid #666', borderRadius:'8px'}}/>
            </label>


  

            <button
              className="button"
              sx={{
                variant: "variants.button",
                cursor:'pointer'
              }}
              type="submit"
            >
              Follow Todd Now{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
            
            <div style={{fontSize: '70%', padding: '0px 3%', margin:'10px 0', textAlign: 'center', color:'#ccc'}}>
            <Link to="/privacy/" className="" style={{textAlign: 'center', paddingTop: '0', paddingBottom: '0', textDecoration: 'underline',}}>privacy policy</Link>
              

                </div>

</div>

        </form>
</CustomBox>
  
)

  export default NewsletterPage