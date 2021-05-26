import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/ghosttowns'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Ghosttowns = () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Ghost Towns" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Ghost Towns</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Ghosttowns
