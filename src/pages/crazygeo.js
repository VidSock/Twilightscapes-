import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/crazygeo'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const CrazyGeoPage = () => (
  <Layout className="crazy-page">
    <Seo title="Twilightscapes Photo Galleries - Crazy Geology" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
      }}
    >
      
<h1>Crazy Geology</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default CrazyGeoPage
