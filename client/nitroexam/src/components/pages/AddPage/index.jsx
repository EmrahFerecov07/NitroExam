import React from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../layout/Navbar';

export const SignupForm = () => {
    return (<>
        <Navbar />
        <Formik
            initialValues={{ title: '', price: '', image: '' }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                price: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                image: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                axios.post("http://localhost:5500/api/product", values)
            }}
        >
            <Form>
                <label htmlFor="title">title</label>
                <Field name="title" type="text" />
                <ErrorMessage name="title" />

                <label htmlFor="price">price</label>
                <Field name="price" type="text" />
                <ErrorMessage name="price" />

                <label htmlFor="image">image Address</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </>
    );
};