import React from 'react'
import Promo from '../../components/promo'
import NewExperience from '../../components/newExperience'

const Home = () => (
  <>
    <Promo
    background= {require('../../assets/homePromoImage.jpg')}
    height='580'
    particle='is' 
    title='An Extraordinery Experience' 
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.'/>
        
    <NewExperience />
  </> 
)

export default Home