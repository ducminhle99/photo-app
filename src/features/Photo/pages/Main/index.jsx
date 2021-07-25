import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images'
// import PropTypes from 'prop-types'

MainPage.propTypes = {

}

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    console.log(photos)
    return (
        <div className="photo-main">
            <Banner title="your awesome photos" backgroundUrl = {Images.PINK_BG}/>
            <Container className="text-center">
                <Link to="/photos/add">add new photo</Link>
            </Container>
        </div>
    )
}



export default MainPage

