import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery5'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gal5= () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Gallery 5" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Gallery 5</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gal5
