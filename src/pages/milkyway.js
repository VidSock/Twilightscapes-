import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/milkyway'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Milkyway = () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Milky Way" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Milky Way</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Milkyway
