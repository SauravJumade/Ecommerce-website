import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css';

const data = [
    "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/PC/hero/Dresses-Kurtas-more_5._CB555362677_.png",
    "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/PC/hero/Monsoon-Friendly-Footwear_4._CB555362677_.png",
    "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/PC/hero/T-shirts-Jeans-Polos_1._CB555362677_.png",
    "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Fab-offers-on-casual-shirts_0._CB580669580_.png"
]

const Baanner = () => {
  return (
    <Carousel 
    className='carasousel'
    autoPlay={true}
    animation="slide"
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsProps={{
        style:{
            backgroundColor:"#fff",
            color:"#494949",
            borderRadius:0,
            marginTop:-22,
            height: "104px",
        }
    }}
    >
        {
            data.map((imag,i)=>{
                return (
                    <>
                    <img src={imag} alt='' className='banner.img'/>
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Baanner