import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery8'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gal8= () => (
  <Layout className="gal8-page">
    <Seo title="Twilightscapes Photo Galleries - Gallery 8" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
      }}
    >
      
<h1>Gallery 8</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gal8
