import React from 'react'
import styled from "styled-components"
import Image from './Image'
// import Newsletter from './PopNewsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`

.slider{object-fit: scale-down;}

// div:first-of-type{padding:0 !important; margin:0 !important;}

@media (max-width: 48em) {
	.image-wrap h1, .image-wrap h2, .image-wrap h3  {font-size:300% !important; border:0px solid red !important;}
	.image-wrap .news-btn{ margin-top:1rem;}
	.image-wrap .innerpanel{font-size:70% !important;}
}

@media (min-width: 58em) {
	.textbox{padding-top: !important;}
}


`



   
const Intro2 = () => (

   


<CustomBox style={{}}>


<div className="outer" style={{margin:'0 0', overflow:'hidden'}}>
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', height:'90vh', paddingTop:'', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  

 <div className="textbox" style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%', overflow:'hidden', padding:'0 0 0 0', border:'0px solid red', zIndex:'0',}}>
  
  



  
  
  <ScrollAnimation animateIn="bounceInDown" delay={1400} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'60px', right:'10%', border:'0px solid yellow'}}>
        <h2
          className="boom normal txtshadow-header hit-the-floor"
          style={{
            color: '#fff',
            fontSize: '6vw',
           position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
            textAlign: 'right', 
            float: 'none',
            margin:'0',
            padding:'0',
          }}
        >
          Follow me
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInRight" delay={1500} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'6vh', right:'10%', border:'0px solid yellow'}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'4vw',
           color: 'white',
           position: 'relative',
            textAlign: 'right', 
            margin:'0',
            padding:'0',
          }}
        >
          into the
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'6vh', right:'10%', border:'0px solid yellow'}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'7vw',
           color: 'white',
           position: 'relative',
//            top: '230px',
            textAlign: 'right',
            textTransform: 'uppercase', 
            margin:'0',
            padding:'0',
          }}
        >
          Night
        </h2>
        </ScrollAnimation>


        
{/* <ScrollAnimation animateIn="bounceInRight" delay={3900} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'-40px', right:'12%', float:'right', display:'inlineBlock', justifyContent:'', alignItems:'center', margin:'0 auto', padding:'0 0 0 0',  textAlign:'center',}}>
   <Newsletter />      
</ScrollAnimation> */}




        
        </div>
        
        
        

<div className="" style={{position:'absolute', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'-1',}}>
<ScrollAnimation animateIn="fadeIn">
<div className="image-wrap" style={{position:'relative', overflow:'hidden',}}>

  
   
   
    <div className=" kenburns-right" style={{zIndex:'',}}><Image className="slider" alt="TWilightscapes at the VLA" filename="night316.jpg" style={{backgroundSize:'', zIndex:'', }} /></div>
    

    

    

    

   

</div>
</ScrollAnimation>
        </div>
        
        
        
    

</div>
</div>



</CustomBox>
  
)

export default Intro2