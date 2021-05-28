import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery9'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gal9= () => (
  <Layout className="gal9-page">
    <Seo title="Twilightscapes Photo Galleries - Gallery 9" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
      }}
    >
      
<h1>Gallery 9</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gal9
