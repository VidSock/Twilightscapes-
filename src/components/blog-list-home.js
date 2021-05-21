/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"
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
      Latest <strong>Galleries</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>

    <div className="grids col-1 sm-2 lg-3">
      
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
