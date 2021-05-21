/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine } from "react-icons/ri"
import Image from '../components/Image'
import PostCard from "./post-card"

export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>
      Latest in <strong>Galleries</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>

    <div className="grids col-1 sm-2 lg-3">
      
    {/* <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites" title="Popular Favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article>

    <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites" title="Popular Favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article>


    <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites" title="Popular Favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article> */}

<article
    className="post-card"
    sx={{
      bg: "cardBg",
      position: 'relative',
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Popular Favorites" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites" title="Popular Favorites">Popular Favorites</a></h2><p className="meta">If you're new here, start here!</p></div>
        
       <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>

    </article>

    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
     <a href="/ghosttowns"><div >
      <Image className="slider" alt="Todd Photographs the Ghost Towns" filename="night305.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/ghosttowns">Ghost Towns</a></h2><p className="meta">The real Old West comes alive at night</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
    </article>

      {data}
      
      </div>

    <Link
      className="button"
      to="/galleries"
      sx={{
        variant: "variants.button",
      }}
      title="See More Galleries"
    >
      See more Galleries
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)
