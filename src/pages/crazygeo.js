import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery5'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const CrazyGeo = () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Crazy Geology" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Crazy Geology</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default CrazyGeo
