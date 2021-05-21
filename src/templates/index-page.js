/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import Intro2 from '../components/Intro2'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'
// import Image from '../components/Image'
import styled from "styled-components"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"

const CustomBox = styled.div`



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



export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
  return (
    <CustomBox style={{}}>
    <Layout>
      <Seo />
      
      <div className="home-banner1 grids col-1 sm-2" style={{justifyContent:'flex-start'}}>

        <div style={{padding:'0 0 0 4%'}}>
          <h1 className="title">{frontmatter.title}</h1>
          <p
            className="tagline"
            sx={{
              color: "muted",
            }}
          >
            {frontmatter.tagline}
          </p>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link
            to={frontmatter.cta.ctaLink}
            className="button"
            sx={{
              variant: "variants.button",
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
          <div
            className="social-icons"
            sx={{
              variant: "variants.socialIcons",
            }}
          >
            <ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>
    <li className="socialtext"><strong>I&apos;m<br />Social</strong></li>
  <li><a className="social"  href="https://facebook.com/twilightscapes" alt="Facebook" title="Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>
  <li style={{display: '',}}><a className="social" href="https://www.linkedin.com/in/toddlambert" alt="LinkIn" title="LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></li>
  <li><a className="social" href="https://twitter.com/toddlambert" alt="Twitter" title="Twitter"><FaTwitterSquare /><span>Twitter</span></a></li>
  <li><a className="social" href="https://www.instagram.com/twilightscapes" alt="Instagram" title="Instagram"><FaInstagram /><span>Instagram</span></a></li>
  <li style={{display: 'none',}}><a className="social" href="https://www.pinterest.com/twilightscapes/" alt="Pinterest" title="Pinterest"><FaPinterestSquare /><span>Pinterest</span></a></li>
  
  <li><a className="social" href="https://www.youtube.com/channel/UCccK2S9xrcLnCR3dTuUwsxQ" alt="YouTube" title="YouTube"><FaYoutubeSquare /><span>YouTube</span></a></li>
  </ul>
          </div>
        </div>
        <div>
          {/* {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
              style={{border:'8px solid #ddd', borderBottom:'42px solid #ddd', borderRadius:'3px' }}
            />
          ) : (
            ""
          )} */}

<div className="intro">
      <Intro2 />
      </div>
          
        </div>
      </div>
      <div style={{padding:'0 3%'}}>
        <BlogListHome data={posts} />
        </div>
      
      

    </Layout>
    </CustomBox>
  )
}

export default HomePage
