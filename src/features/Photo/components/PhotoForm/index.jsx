import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}


function PhotoForm(props) {
    const innitialValue = {
        title: '',
        categoryId: null
    }
    return (
        <Formik
            initialValues={innitialValue}
            onSubmit={values => console.log('submit', values)}
        >
            {formikProps => {
                // do some thing here ....
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="category"
                            placeholder=" what is your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="photo"
                        />

                        <FormGroup>
                            <Button type='submit' color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default PhotoForm

