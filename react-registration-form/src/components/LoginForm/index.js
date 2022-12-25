 import React, { Component } from 'react';
 import styles from './LoginForm.module.css'
 import {Formik, Form, Field, ErrorMessage} from 'formik';

function LoginForm  (props) {

        const formikSubmit = (data, formikBag) => {
            console.log(data, formikBag);
            formikBag.resetForm();
        }

        const initialValues = {
            email: '',
            pass: ''
        };

        return (
            <Formik 
            initialValues={initialValues}
            onSubmit={formikSubmit}
            >
                {(formikProps) => {
                    return (
                    <Form className={styles["login-form"]}>
                    <h1>LOGIN TO YOUR ACCOUNT</h1>
                    <Field 
                        className={styles["user-info"]} 
                        name="email" 
                        placeholder="Email Address"/>
                    <Field 
                        className={styles["user-info"]} 
                        name="pass" 
                        placeholder="Password"/>
                    <div className={styles["row"]}>
                        <div className={styles["row"]}>
                            <input type="checkbox" name="allow-with-rules" />
                            <p>Remember Me</p>
                        </div>
                        <a className={styles["link"]} href='#'>Forgot Password</a>
                    </div>
                    <button className={styles["create-btn"]}>LOGIN</button>
                    <button className={styles["sing-up-btn"]}>Sing up with Google</button>
                </Form>
                    )
                }}
            </Formik>
        );
}

export default LoginForm;
