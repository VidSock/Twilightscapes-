/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'


import Image from '../components/Image'

import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowRightSLine, RiArrowLeftLine, RiStarLine} from "react-icons/ri"
// import { FaLock } from 'react-icons/fa';
import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"


import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
// import ScrollAnimation from 'react-animate-on-scroll'

// import Gall1 from '../components/gallery1'


import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}

// input::placeholder {
//   color: #111;
// }

article{justify-content:center;}

.signbox{
  display:flex;
  justify-content: center;
  align-items:baseline;
position:absolute;
right:0;
top:10px;
width:75% !important;
height: auto !important;
font-size:40px !important;
padding:5px !important;
}


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
   transition: all 0.15s;
  animation:fade .8s forwards;
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
        height:auto !important;
        padding:10px !important;
        font-size:20px !important;
      }
      .signbox input{margin-bottom:10px; margin-right:0;}

    }


}

`



const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  easing: 'easeIn',
  arrows: true,
  autoplay: false,

  prevArrow: <div style={{width: "40px", marginRight: "10px", zIndex:'1', cursor:'pointer', dropShadow:'(30px 10px 4px #4444dd)', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  nextArrow: <div style={{width: "40px", marginLeft: "10px", zIndex:'0', cursor:'pointer', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};

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

      <Layout className="blog-page1">
        <CustomBox style={{}}>
        <Seo
          title={"Twilightscapes Galleries — Page " + currentPage + " of " + numPages}
          description={
            "Twilightscapes base gallery page " + currentPage + " of " + numPages
          }
        />
        
        <div
      className="wrapper1"
      style={{
        textAlign: "center",
      }}
    >
{/* <h1 style={{padding:'20px 0 0 0', margin:'0 0 0 0', fontSize:'16px'}}>Themed Galleries</h1> */}

    </div>

        


{/* <Gall1 /> */}

<br />
<div style={{height:'', border:'0px solid yellow'}}>
<Slide {...properties} style={{zIndex:'-1',}}>
<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
      border:'0px solid blue'
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
    


    <div className="signbox" style={{background:'transparent', margin:'0 10px', padding:'0 10px', borderRadius:'12px', textAlign:'center', justifyContent:'center', border:'0px solid red', width:'50%', height:'200px', zIndex:'1', }}>
<div style={{width:'100%', border:'0px solid green', fontSize:''}}>Popular Favorites</div>
<div style={{ width:'100%', fontSize:''}}>
   
    


    <Link
            to="/favorites/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>              
</div>

<div className="blocker"></div>

</div>


  


  
        

<div >
      <Image className="slider" alt="Popular Favorites" filename="homepage.jpg" style={{backgroundSize:'', height:'', zIndex:'', }} />
    </div>

</Link>
</article>




<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
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
    
   
    


<div className="signbox" style={{background:'transparent', margin:'0 10px', padding:'0 10px', borderRadius:'12px', textAlign:'center', justifyContent:'center', border:'0px solid red', width:'50%', height:'200px', zIndex:'1', }}>
<div style={{width:'100%', border:'0px solid green', fontSize:''}}>Relics of Rust</div>
<div style={{ width:'100%', fontSize:''}}>
    <Link
            to="/cars/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>              
</div>
<div className="blocker"></div>
</div>




 <div >
    <Image className="slider" alt="Abandoned Car in Paris TX" filename="night400.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
    </div>

</Link>
</article>






<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
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
    

    

    <div className="signbox" style={{background:'transparent', margin:'0 ', padding:'0 10px', borderRadius:'12px', textAlign:'center', justifyContent:'center', border:'0px solid red', width:'50%', height:'200px', zIndex:'1', }}>
<div style={{width:'100%', border:'0px solid green', fontSize:''}}>Milky Way</div>
<div style={{ width:'100%', fontSize:''}}>
    <Link
            to="/milkyway/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>              
</div>
<div className="blocker"></div>
</div>

    <div >
    <Image className="slider" alt="Abandoned Car in Paris TX" filename="night307.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
    </div>
</Link>
</article>






<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
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
    
    
    

    <div className="signbox" style={{background:'transparent', margin:'0 10px', padding:'0 10px', borderRadius:'12px', textAlign:'center', justifyContent:'center', border:'0px solid red', width:'50%', height:'200px', zIndex:'1', }}>
<div style={{width:'100%', border:'0px solid green', fontSize:''}}>Ghost Towns</div>
<div style={{ width:'100%', fontSize:''}}>
    <Link
            to="/ghosttowns/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>              
</div>
<div className="blocker"></div>
</div>

<div >
    <Image className="slider" alt="Todd Photographs the Ghost Towns" filename="night305.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
    </div>

</Link>
</article>







<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
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
    
    
    

    <div className="signbox" style={{background:'transparent', margin:'0 10px', padding:'0 10px', borderRadius:'12px', textAlign:'center', justifyContent:'center', border:'0px solid red', width:'50%', height:'200px', zIndex:'1', }}>
<div style={{width:'100%', border:'0px solid green', fontSize:''}}>Crazy Geology</div>
<div style={{ width:'100%', fontSize:''}}>
    <Link
            to="/crazygeo/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>              
</div>
<div className="blocker"></div>
</div>

<div >
    <Image className="slider" alt="Todd Photographs some of the weirdest places" filename="night310.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
    </div>
</Link>
</article>









<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
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
    
    
    

    <div className="signbox" style={{background:'transparent', margin:'0 10px', padding:'0 10px', borderRadius:'12px', textAlign:'center', justifyContent:'center', border:'0px solid red', width:'50%', height:'200px', zIndex:'1', }}>
<div style={{width:'100%', border:'0px solid green', fontSize:''}}>During Daylight</div>
<div style={{ width:'100%', fontSize:''}}>
    <Link
            to="/daylight/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>              
</div>
<div className="blocker"></div>
</div>

<div >
    <Image className="slider" alt="Todd Photographs some of the weirdest places" filename="IMG_0734.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
    </div>
</Link>
</article>



</Slide>
</div>

<br />
{/* <h4 style={{display:'block', textAlign:'center', fontSize:'70%', color:'#ddd',}}>Full Library:</h4> */}
<ul className="galmenu">
<li style={{width:'100px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0',}}>Full Archives</li>
      <li className="galmenu-item"><Link to="/gallery1/" className="button" sx={{variant: "variants.button",}} title="Gallery 1" id="gallery1">I</Link></li>
      <li className="galmenu-item"><Link to="/gallery2/" className="button" sx={{variant: "variants.button",}}  title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/gallery3/" className="button" sx={{variant: "variants.button",}}  title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/gallery4/" className="button" sx={{variant: "variants.button",}}  title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/gallery5/" className="button" sx={{variant: "variants.button",}}  title="Gallery 5">V</Link></li>
      <li className="galmenu-item"><Link to="/gallery6/" className="button" sx={{variant: "variants.button",}}  title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/gallery7/" className="button" sx={{variant: "variants.button",}}  title="Gallery 7">VII</Link></li>
      <li className="galmenu-item"><Link to="/gallery8/" className="button" sx={{variant: "variants.button",}}  title="Gallery 8">VIII</Link></li>
      <li className="galmenu-item"><Link to="/gallery9/" className="button" sx={{variant: "variants.button",}}  title="Gallery 9">IV</Link></li>
      {/* <li className="galmenu-item1"><Link to="/gallery10/"  title="Gallery 10">X</Link></li> */}
      
      {/* <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 8">VIII<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 9">IV<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 10">X<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li> */}
      
      
      {/* <li className="galmenu-item has-app" has-app><Link to="/vault/gallery8"  title="Gallery 8" has-app>VIII</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery9"  title="Gallery 9">IX</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery10"  title="Gallery 10">X</Link></li> */}
      </ul>





<div className="grids col-1 sm-2 lg-3" style={{display:'none'}}>
      
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
    </div>


    <div
      className="wrapper"
      style={{
        textAlign: "center",
        marginTop:'5vh',
        clear:'both'
      }}
    >
<h2>Lastest &amp; Greatest</h2>

    </div>
    
    <div className="grids col-1 sm-2 lg-3" style={{clear:'both'}}>
  
      
 {posts}</div>
        <Pagination {...props} />


        <div
      className="wrapper"
      style={{
        textAlign: "center",
        marginTop:'1vh',
      }}
    >
<h2>Todd's Other Projects</h2>

    </div>



        <div style={{display:'flex', padding:'1rem', flexWrap:'nowrap', justifyContent:''}}>


<div style={{width:'50%', margin:'1rem'}}>
  <a href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',lineHeight:'1.7rem'}}>
   

   <Image className="slider" alt="Todd Lambert Personal Site" filename="toddlambert.jpg" />
  <br />

  The original. Todd's oldest web project is his personal site. Learn more about Todd, or maybe even hire him. I hear that he's a nice guy.  ;-)
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

</CustomBox>

      </Layout>
    )
  }
}

export default BlogIndex
