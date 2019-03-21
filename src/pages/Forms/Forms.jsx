import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './Forms.css'
import { Link } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required')
})

const Forms = () => (
  <div>
    <Link to='/' >Home</Link>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        alert('Success')
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='input-block'>
            <label htmlFor='firstName'>First Name</label>
            <Field className='firstName' name='firstName' />
            {errors.firstName && touched.firstName ? (
              <div className='error'>{errors.firstName}</div>
            ) : null}
          </div>
          <div className='input-block'>
            <label htmlFor='lastName'>Last Name</label>
            <Field className='lastName' name='lastName' />
            {errors.lastName && touched.lastName ? (
              <div className='error'>{errors.lastName}</div>
            ) : null}
          </div>
          <div className='input-block'>
            <label htmlFor='email'>Email</label>
            <Field className='email' name='email' type='email' />
            {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
          </div>
          <button className='btn-submit' type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default Forms
