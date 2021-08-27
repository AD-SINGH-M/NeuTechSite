import React from 'react'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import Challenge from './page_components/Challenge'
import OurImpact from './page_components/OurImpact'

function Initiatives() {
    return (
        <div>
            <Navbar initiatives="initiatives" />
            <Challenge /> 
            <OurImpact />    
            <br/>
            <Footer />
        </div>
    )
}

export default Initiatives
