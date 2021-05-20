/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'


import Image from '../components/Image'

import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"
import twlogo from '../../static/assets/twilightscapes-button.jpg'
import urbanfetishlogo from '../../static/assets/urban-fetish-button.jpg'
import Gall1 from '../components/gallery1'


const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
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
const Pagination = props => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/galleries/"
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }

    return (
      <Layout className="blog-page">
        <Seo
          title={"Gallery — Page " + currentPage + " of " + numPages}
          description={
            "Twilightscapes base gallery page " + currentPage + " of " + numPages
          }
        />
        <h1>Galleries</h1>
     

        


{/* <Gall1 /> */}

<div className="grids col-1 sm-2 lg-3">
      
    <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article>

    <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article>


    <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article>


  
      
 {posts}</div>
        <Pagination {...props} />


        <div style={{display:'flex', padding:'1rem', flexWrap:'nowrap', justifyContent:''}}>


<div style={{width:'50%', margin:'1rem'}}>
  <a href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
   <img className="" src={twlogo} alt="Todd Lambert Night photos" style={{position:'',  maxWidth:'100%', left:''}} />
  <br />
  Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the Western States like you&apos;ve never seen them before.
  <h5 style={{textAlign:'center',}}>Visit Twilightscapes.com</h5></a>
  </div>





  
  <div style={{width:'50%', margin:'1rem'}}>
  <a href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
 
  <img className="" src={urbanfetishlogo} alt="Urban Fetish photos" style={{position:'', maxWidth:'100%', left:''}} />
  <br />
  Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
  
  <h5 style={{textAlign:'center',}}>Visit UrbanFetish.com</h5></a>
  
  </div>
</div>



      </Layout>
    )
  }
}

export default BlogIndex
