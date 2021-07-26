import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'
import { addPhoto, editPhoto } from '../../photoSlice'
// import PropTypes from 'prop-types'
import './styles.scss'

AddEditPage.propTypes = {}

function AddEditPage(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId);
        console.log({ photo: state.photos, photoId, foundPhoto });
        return foundPhoto;
    })

    const initialValue = isAddMode ? {
        title: '',
        categoryId: null,
        photo: '',
    } : editedPhoto;
//  submit form 
    const handleSubmit = (value) => {
        return new Promise(resolve => {

            console.log("form submit", value);
            setTimeout(() => {

                if (isAddMode) {
                    const newPhoto = {
                        ...value,
                        id: new Date().getTime()
                    }
                    const action = addPhoto(newPhoto);
                    dispatch(action);
                }
                else {
                    const action = editPhoto(value)
                    dispatch(action)
                }
                history.push('/photos');
                resolve(true);
            }, 1000)
        })
    }
    return (
        <div className="photo-edit">
            <Banner title="pick your amazing photo" />

            <div className="photo-edit__form 😘😘😘">
                <PhotoForm
                    onSubmit={handleSubmit}
                    isAddMode={isAddMode}
                    initialValue={initialValue}
                />
            </div>
        </div>
    )
}

export default AddEditPage

    // khi ko can doi api
    // const handleSubmit = (value) => {
    //     console.log("form submit",value);

    //     const action = addPhoto(value);
    //     console.log({action});
    //     dispatch(action);
    //     history.push('/photos');
    // }

