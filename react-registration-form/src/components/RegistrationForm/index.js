 import React, { Component } from 'react';
 import styles from './RegistrationForm.module.css'
 import {Formik, Form, Field, ErrorMessage} from 'formik';
 
function RegistrationForm (props){

    const formikSubmit = (data, formikBag) => {
        console.log(data, formikBag);
        formikBag.resetForm();
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        pass: '',
        confirmPass: ''
    };
    
        return (
            <Formik 
            initialValues={initialValues}
            onSubmit={formikSubmit}
            >
                {(formikProps) => {
                    return (
                    <Form className={styles["registration-form"]}>
                    <div className={styles["header"]}>
                        <h1>Create an account</h1>
                        <h2>We aleays keep your name and email address private.</h2>
                    </div>
                    <div className={styles["column-input"]}>
                        <Field 
                            className={styles["user-info"]} 
                            name="firstName" 
                            placeholder="First name"/>
                        <Field  
                            className={styles["user-info"]} 
                            name="lastName" 
                            placeholder="Last name" />
                    </div>
                    <div className={styles["column-input"]}>
                        <Field  
                            className={styles["user-info"]} 
                            name="displayName" 
                            placeholder="Display name" />
                        <Field  
                            className={styles["user-info"]} 
                            name="email" 
                            placeholder="Email Address" required />
                    </div>
                    <div className={styles["column-input"]}>
                        <Field  
                            className={styles["user-info"]}
                            name="pass" 
                            placeholder="Password" required />
                        <Field  
                            className={styles["user-info"]}
                            name="confirmPass" 
                            placeholder="Confirm Password" required />
                    </div>
                    <div className={styles["row"]}>
                        <input type="radio" name="join-as" />
                        <p><span>Join As a Buyer</span><br /> I am looking for a Name, Logo or Tagline for my business, brand or product</p>
                    </div>
                    <div className={styles["row"]}>
                        <input type="radio" name="join-as" />           
                        <p><span>Join As a Creative or Marketplace Seller</span><br /> I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                    </div>
                    <div className={styles["row"]}>
                    <input type="checkbox" name="allow-with-rules" />
                    <p>Allow Squadhelp to send marketing/promotional offers from time to time</p>
                    </div>
                    <button className={styles["create-btn"]}>Create account</button>
                    <h2>By clicking this button, you agree to our <a href="#">Terms of Service.</a></h2>
                    <button className={styles["sing-up-btn"]}>Sing up with Google</button>
                </Form>
                )
                }}
            </Formik>   
        );
    
 }
 
 export default RegistrationForm;
 
