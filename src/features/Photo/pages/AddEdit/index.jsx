import React from 'react'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'

// import PropTypes from 'prop-types'
import './styles.scss'

AddEditPage.propTypes = {}

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="pick your amazing photo" />
            <div className="photo-edit__form 😘😘😘">
                <PhotoForm onsubmit={value => console.log('form submit', value)}/>
            </div>
        </div>
    )
}

export default AddEditPage

