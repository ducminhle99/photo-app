import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';
import Select from 'react-select';


PhotoForm.propTypes = {
    onsubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onsubmit: null,
}


function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="..." />
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select
                    id="categoryId"
                    name="categoryId"
                    placeholder="what is your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Photo</Label>
                <div>
                    <Button type="button" outline color="primary">Random a photo</Button>
                </div>
                <div>
                    <img src={Images.COLORFUL_BG} alt="img" width="200px" height="200px" />
                </div>
            </FormGroup>

            <FormGroup>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    )
}

export default PhotoForm

