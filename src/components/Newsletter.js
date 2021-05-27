/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "./layout"
import Seo from "./seo"
import styled from "styled-components"

const CustomBox = styled.div`

input: {
  border: 6px solid;
  borderColor: inputBorder;
  bg: inputBackground;
  outline: none;
}

.container{padding:0 !important;}

@media (max-width: 48em) {
	.image-wrap h1, .image-wrap h2, .image-wrap h3  {font-size:300% !important; border:0px solid red !important;}
	.image-wrap .news-btn{ margin-top:1rem;}
	.image-wrap .innerpanel{font-size:70% !important;}
}

@media (min-width: 58em) {
	.textbox{padding-top:80px !important;}
}


`

const Newsletter = ({ data }) => {


  return (
    <CustomBox style={{}}>


<div>
        <form
          className="news-form"
          action="/thanks"
          name="news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">

          <input type="hidden" name="form-name" value="news" />


            <label>
              Email
              <input type="email" name="email" required />
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


        </form>
</div>
      </CustomBox>
  )
}

export default Newsletter


