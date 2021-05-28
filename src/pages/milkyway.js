import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/milkyway'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Milkyway = () => (
  <Layout className="milky-page" style={{padding:'10px 20px !important'}}>
    <Seo title="Twilightscapes Photo Galleries - Milky Way" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
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
