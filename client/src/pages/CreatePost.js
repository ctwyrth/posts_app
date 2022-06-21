import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {
   const initialValues = {
      title: "",
      postText: "",
      username: ""
   };

   const validationSchema = Yup.object().shape({
      title: Yup.string().required("You have to call me something!"),
      postText: Yup.string().required("Why be here if you're going to leave this blank?"),
      username: Yup.string().min(3).max(15).required("Just give us a name already!")
   });

   const onSubmit = (data) => {
      axios.post('http://localhost:3001/posts', data)
         .then(() => {
            console.log("Post submitted");
         });
   };

   return (
      <div className="body-container">
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="form-container">
               <label htmlFor="title">Title:</label>
               <ErrorMessage name="title" component="span" />
               <Field id="input1CreatePost" name="title" className="input-field" placeholder="What's My Name?" />
               <label htmlFor="postText">Post:</label>
               <ErrorMessage name="postText" component="span" />
               <Field id="input2CreatePost" name="postText" className="input-field" placeholder="What do you want me to say?" />
               <label htmlFor="username">Author:</label>
               <ErrorMessage name="username" component="span" />
               <Field id="input3CreatePost" name="username" className="input-field" placeholder="Who are you?" />
               <button type="submit">Create Post</button>
            </Form>
         </Formik>
      </div>
   )
}

export default CreatePost;
