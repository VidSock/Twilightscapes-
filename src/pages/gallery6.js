import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery6'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gal6= () => (
  <Layout className="gal6-page">
    <Seo title="Twilightscapes Photo Galleries - Gallery 6" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
      }}
    >
      
<h1>Gallery 6</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gal6
