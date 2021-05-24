/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'


import Image from '../components/Image'

import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine, RiStarLine} from "react-icons/ri"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"


// import Gall1 from '../components/gallery1'


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
          title={"Twilightscapes Galleries — Page " + currentPage + " of " + numPages}
          description={
            "Twilightscapes base gallery page " + currentPage + " of " + numPages
          }
        />
        
        <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
<h1>Galleries</h1>

    </div>

        


{/* <Gall1 /> */}

<div className="grids col-1 sm-2 lg-3">
      
    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
     <Link
      className=""
      to="/favorites/"
      sx={{
        variant: "variants.button",
      }}
      title="Popular Favorites"
    >
      
      <div >
      <Image className="slider" alt="Popular Favorites" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div><div className="post-content"><h2 className="title">Popular Favorites</h2><p className="meta">If you're new here, start here!</p></div>
        
       <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
</Link>
    </article>

    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
    <Link
      className=""
      to="/cars/"
      sx={{
        variant: "variants.button",
      }}
      title="Relics of Rust"
    >
<div >
      <Image className="slider" alt="Abandoned Car in Paris TX" filename="night400.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div><div className="post-content"><h2 className="title">Relics of Rust</h2><p className="meta">Todd's favorite subject matter</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
</Link>
    </article>


    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
    <Link
      className=""
      to="/milkyway/"
      sx={{
        variant: "variants.button",
      }}
      title="Milky Way"
    >
     <div >
      <Image className="slider" alt="Todd Photographs the Milky Way" filename="night307.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div><div className="post-content"><h2 className="title">Milky Way</h2><p className="meta">Shots where the sky steals the show</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
        </Link>
    </article>


    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
    <Link
      className=""
      to="/ghosttowns/"
      sx={{
        variant: "variants.button",
      }}
      title="Ghost Towns"
    >
     <div >
      <Image className="slider" alt="Todd Photographs the Ghost Towns" filename="night305.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div><div className="post-content"><h2 className="title">Ghost Towns</h2><p className="meta">The real Old West comes alive at night</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
        </Link>
    </article>



    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
    <Link
      className=""
      to="/crazygeo/"
      sx={{
        variant: "variants.button",
      }}
      title="Crazy Geology"
    >
     <div >
      <Image className="slider" alt="Todd Photographs some of the weirdest places" filename="night310.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div><div className="post-content"><h2 className="title">Crazy Geology</h2><p className="meta">The world is awesome - just watch your step!</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
        </Link>
    </article>





    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
    <Link
      className=""
      to="/daytime/"
      sx={{
        variant: "variants.button",
      }}
      title="During Daytime"
    >
     <div >
      <Image className="slider" alt="Todd Photographs some of the weirdest places" filename="IMG_0734.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div><div className="post-content"><h2 className="title">During Daytime</h2><p className="meta">I'm not actually a vampire!</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
        </Link>
    </article>
  
      
 {posts}</div>
        <Pagination {...props} />


        <div
      className="wrapper"
      style={{
        textAlign: "center",
        marginTop:'20vh',
      }}
    >
<h1>Todd's Other Projects</h1>

    </div>



        <div style={{display:'flex', padding:'1rem', flexWrap:'nowrap', justifyContent:''}}>


<div style={{width:'50%', margin:'1rem'}}>
  <a href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',lineHeight:'1.7rem'}}>
   

   <Image className="slider" alt="Todd Lambert Personal Site" filename="toddlambert.jpg" />
  <br />

  The original. Todd's oldest web project is his personal site. Learn more about Todd, or maybe even hire him. He's a nice guy.  ;-)
  <h5 style={{textAlign:'center',}}>Visit ToddLambert.com</h5></a>
  </div>


 


  
  <div style={{width:'50%', margin:'1rem'}}>
  <a href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit', lineHeight:'1.7rem'}}>
 


  <Image className="slider" alt="Urban Fetish photos" filename="urban-fetish-button.jpg" />
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
