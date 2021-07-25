import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'
import { addPhoto } from '../../photoSlice'

// import PropTypes from 'prop-types'
import './styles.scss'

AddEditPage.propTypes = {}

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (value) => {
        return new Promise(resolve => {
            console.log("form submit",value);
            setTimeout(() => {
                const action = addPhoto(value);
                console.log({action});
                dispatch(action);
                history.push('/photos');
                resolve(true);
            },5000)
        })

        

    }
    // khi ko can doi api
    // const handleSubmit = (value) => {
    //     console.log("form submit",value);
        
    //     const action = addPhoto(value);
    //     console.log({action});
    //     dispatch(action);
    //     history.push('/photos');
    // }
    return (
        <div className="photo-edit">
            <Banner title="pick your amazing photo" />
            <div className="photo-edit__form 😘😘😘">
                <PhotoForm onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default AddEditPage

