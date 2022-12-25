 import React, { Component } from 'react';
 import styles from './RegistrationForm.module.css'
 
 class RegistrationForm extends Component {
   
    render() {
        return (
            
            <div className={styles["container"]}>
                <form className={styles["registration-form"]}>
                    <div className={styles["header"]}>
                        <h1>Create an account</h1>
                        <h2>We aleays keep your name and email address private.</h2>
                    </div>
                    <div className={styles["column-input"]}>
                        <input className={styles["user-info"]} type="text" name="first-name" placeholder="First name" required />
                        <input className={styles["user-info"]} type="text" name="last-name" placeholder="Last name" required />
                    </div>
                    <div className={styles["column-input"]}>
                        <input className={styles["user-info"]} type="text" name="display-name" placeholder="Display name" required />
                        <input className={styles["user-info"]} type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className={styles["column-input"]}>
                        <input className={styles["user-info"]} type="password" name="pass" placeholder="Password" required />
                        <input className={styles["user-info"]} type="password" name="confirm pass" placeholder="Confirm Password" required />
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
                </form>
            </div>
            
        );
    }
 }
 
 export default RegistrationForm;
 
