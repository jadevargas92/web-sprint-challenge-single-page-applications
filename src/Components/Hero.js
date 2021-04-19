import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    height:100vh;
    width:100vw;
    position: relative;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('https://www.happyspizza.com/wp-content/uploads/2020/01/hp_pizzanwingsfamilydeal_still_optimized.jpg')
`



const Hero = (props) => {
    return (
        <div>
            <Image />
        </div>

    )
}

export default Hero;