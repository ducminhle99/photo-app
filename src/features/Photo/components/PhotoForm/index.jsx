import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}


function PhotoForm(props) {
    const innitialValue = {
        title: '',
        categoryId: null,
        photo: ''
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('this field is required'),

        categoryId: Yup.number().required('this field is required').nullable(),

        photo: Yup.string().required('this field is required')
        // photo: Yup.string().when('categoryId', {
        //     is: 1,
        //     then:Yup.string().required("this field is required"),
        //     otherwise: Yup.string().notRequired()
        // })
    })
    return (
        <Formik
            initialValues={innitialValue}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                // do some thing here ....
                const { values, errors, touched, isSubmitting } = formikProps;
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
                            {isSubmitting && <Spinner size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>}

                            <Button type='submit' color="primary">
                                Add to album
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default PhotoForm

