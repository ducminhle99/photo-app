import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'reactstrap'
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images'
import PhotoList from '../../components/PhotoList'
import { removePhoto } from '../../photoSlice'
// import PropTypes from 'prop-types'

MainPage.propTypes = {}

function MainPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const photos = useSelector(state => state.photos);
    // console.log(photos)

    const handleEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    }

    const handleRemoveClick = (photo) => {
        console.log("remove photo", photo);
        const photoId = photo.id;
        const action = removePhoto(photoId);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner title="your awesome photos" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handleEditClick}
                    onPhotoRemoveClick={handleRemoveClick}
                />
            </Container>
        </div>
    )
}

export default MainPage

