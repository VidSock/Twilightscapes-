import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery2'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Cars = () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Abandoned Cars" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Cars</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Cars
