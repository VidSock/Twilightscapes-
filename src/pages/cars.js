import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/cars'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Cars = () => (
  <Layout className="cars-page">
    <Seo title="Twilightscapes Photo Galleries - Abandoned Cars" />
          
    <GalleryMenu />
    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'0',
        paddingTop:'0',
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
