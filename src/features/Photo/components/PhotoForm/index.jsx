import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup } from 'reactstrap';
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
    const { initialValue, isAddMode } = props;
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
            initialValues={initialValue}
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
                            {isSubmitting && <p>Submittimg ... </p>}

                            <Button type='submit' color={isAddMode ? 'primary' : 'success'}>
                                {isAddMode ? 'Add to album' : 'Update your photo'}
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

