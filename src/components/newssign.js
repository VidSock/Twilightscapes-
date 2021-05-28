/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

// import Layout from "./layout"
// import Seo from "./seo"
import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}

// input::placeholder {
//   color: #111;
// }

.signbox{
  display:flex;
  justify-content: center;
  align-items:baseline;
}
.signbox input{margin-right:14px;}

.blocker{
  content: ;
  width:100%;
  height:100%;

  position:absolute;
  z-index: -1;
  opacity: 1 ;
  overflow: 'hidden';
   display:block;
   margin:0 auto;
  padding:0;
  cursor:default;
  background: rgba(0,0,0,0.50);
  backdrop-filter: blur(4px);
  border-radius:12px;
  border:1px solid #000;
}
  @keyframes fade {
    0%{
          opacity: 0;
       }
       20%{
        opacity: 0;
     }
       100% {
          opacity:1;
       }
    
    }


    @media (max-width: 58em) {

      .signbox{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
      }
      .signbox input{margin-bottom:10px; margin-right:0;}

    }


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

            <div className="newsletter" style={{background:'', margin:'0 10px', padding:'10px 0 10px 0', borderRadius:'12px', textAlign:'center'}}>

              <div className="blocker"></div>

          <input type="hidden" name="form-name" value="news" />

<br />

            
              <strong>Follow Me Into The Night</strong><br /> <span style={{fontSize:'70%'}}>night photography newsletter - (it's free!)</span><br /><br />

             <div className="signbox" style={{display:'',}}>
               <label style={{color:'#fff'}} For="email">
                 <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{margin: '', padding:'.8rem', width: '300px', maxWidth:'100%', border:'2px solid #666', background:'rgb(51, 51, 51)', borderRadius:'8px'}}/></label>
                      
            


  

            <button
              className="button"
              sx={{
                variant: "variants.button",
                cursor:'pointer',
                width:'',
              }}
              type="submit"
            >
              Follow Todd Now{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>


            </div>


            <div style={{fontSize: '70%', padding: '0px 3%', margin:'30px 0 10px 0', textAlign: 'center', color:'#ccc'}}>
            <Link to="/privacy/" className="" style={{textAlign: 'center', padding: '15px',  textDecoration: 'underline', border:'0px solid yellow'}}>privacy policy (NO SPAM!)</Link>
              

                </div>

</div>

        </form>
</CustomBox>
  
)

  export default NewsletterPage