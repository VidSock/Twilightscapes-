import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/daytime'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Daytime = () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Day Time" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Day Time</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Daytime
