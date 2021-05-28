import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery1'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gallery1 = () => (
  <Layout className="gal1-page">
    <Seo title="Twilightscapes Photo Galleries - Day Time" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
      }}
    >
      
<h1>Gallery 1</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gallery1
