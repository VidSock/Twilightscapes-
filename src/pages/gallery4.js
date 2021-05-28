import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery4'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gal4= () => (
  <Layout className="gal4-page">
    <Seo title="Twilightscapes Photo Galleries - Gallery 4" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
      }}
    >
      
<h1>Gallery 4</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gal4
