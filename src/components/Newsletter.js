/** @jsx jsx */
import { jsx } from "theme-ui"
// import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

// import Layout from "./layout"
// import Seo from "./seo"




const NewsletterPage = () => (



<form
          className="news-form"
          action="/thanks"
          name="news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">

            <div style={{background:'#333', margin:'0 20px', padding:'10px 0', borderRadius:'12px'}}>

          <input type="hidden" name="form-name" value="news" />


            <label style={{color:'#fff'}}>
              Join the Night Newsletter - (it's free and no SPAM!)<br /><br />
              <input type="email" name="email" required={false}
                      placeholder="your@email.com"
                      style={{margin: '0 1rem 0 0', padding:'.6rem .8rem', width: '50%', border:'2px solid #000', borderRadius:'8px'}}/>
            </label>


  

            <button
              className="button"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Follow Todd Now{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
</div>

        </form>

  )

  export default NewsletterPage