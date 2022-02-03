import React from 'react'
import Promo from '../../components/promo'
import home_promo from '../../assets/home_promo.jpg'

const Home = () => {
    return (
        <Promo
        background= {`${home_promo}`}
        height='580'
        particle='is' 
        title='An Extraordinery Experience' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.'/>
    )
}

export default Home