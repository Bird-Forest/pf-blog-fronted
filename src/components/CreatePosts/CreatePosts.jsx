import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const tagsList = ['animals', 'recipes', 'children', 'health'];

const validationSchema = Yup.object({
  title: Yup.string().min(5, 'Too Short!').required('This field is required'),
  text: Yup.string().required('This field is required'),
  tags: Yup.string().oneOf(tagsList).required('Please select a job type'),
});

const initialValues = {
  title: '',
  text: '',
  tags: '',
};

export default function CreatePosts({ post }) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
            console.log(values);
            resetForm();
          }, 400);
        }}
      >
        {props => (
          <Form className="my-form" autoComplete="off">
            <h3 className="my-title">Registration</h3>
            <input label="" name="title" type="text" />
            <input label="" name="tags">
              <option value="" className="my-option">
                Select a tag
              </option>
              {tagsList.map((tag, idx) => (
                <option value={tag} key={idx} className="my-option">
                  {tag}
                </option>
              ))}
            </input>
            <textarea label="About me" name="review" type="text" />
            <button type="submit" className="button">
              {props.isSubmitting ? 'loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
