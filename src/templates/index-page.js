/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { RiArrowRightSLine } from "react-icons/ri"
// import Intro2 from '../components/Intro2'
import ScrollAnimation from 'react-animate-on-scroll'
import Social from "../components/social"
import styled from "styled-components"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"

// import Newsletter from "../components/newsletter"

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
            gatsbyImageData(layout: FULL_WIDTH, width: 585, height: 900)
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
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 250)
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
      
      <div className="home-banner1 grids col-1 sm-2" style={{justifyContent:'', position:'relative'}}>

        <div style={{padding:'30px 2% 0 4%', border:'0px solid yellow'}}>


          <h1 className="title">{frontmatter.title}</h1>
          <p
            className="tagline"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </p>

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>

          {/* <Link
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
          </Link> */}

          
<Social />
          
        </div>

        






    


    
  
<div style={{ border:'0px solid pink', position:'relative', overflow:'hidden', width:'', height:'100vh'}}>

  {Image ? (
        <GatsbyImage
          image={Image}
          alt={frontmatter.title + " - Featured image"}
          className="featured-image kenburns-right"
          style={{height:'100vh', backgroundSize:'cover',}}
        />

        
      ) : (
        ""
      )}

      
<div style={{position:'absolute', height:'', width:'100%', top:'60px', right:'0',}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid yellow'}}>
        <h2
          className="boom normal txtshadow-header hit-the-floor"
          style={{
            color: '#fff',
            fontSize: '60px',
           position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
            textAlign: 'right', 
            float: 'none',
            margin:'0',
            padding:'0',
          }}
        >
          Follow me
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red'}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'40px',
           color: 'white',
           position: 'relative',
            textAlign: 'right', 
            margin:'0',
            padding:'0',
          }}
        >
          into the
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue'}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'80px',
           color: 'white',
           position: 'relative',
//            top: '230px',
            textAlign: 'right',
            textTransform: 'uppercase', 
            margin:'0',
            padding:'0',
          }}
        >
          Night
        </h2>
        </ScrollAnimation>



        <ScrollAnimation animateIn="bounceInUp" delay={1750} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'250px', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center'}}>


          {/* <Newsletter /> */}
</ScrollAnimation>


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
