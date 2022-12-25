 import React, { Component } from 'react';
 import styles from './LoginForm.module.css'

class LoginForm extends Component {
    render() {
        return (
            
                <form className={styles["login-form"]}>
                    <h1>LOGIN TO YOUR ACCOUNT</h1>
                    <input className={styles["user-info"]} type="email" name="email" placeholder="Email Address" required />
                    <input className={styles["user-info"]} type="password" name="pass" placeholder="Password" required />
                    <div className={styles["row"]}>
                        <div className={styles["row"]}>
                            <input type="checkbox" name="allow-with-rules" />
                            <p>Remember Me</p>
                        </div>
                        <a className={styles["link"]} href='#'>Forgot Password</a>
                    </div>
                    <button className={styles["create-btn"]}>LOGIN</button>
                    <button className={styles["sing-up-btn"]}>Sing up with Google</button>
                </form>
            
        );
    }
}

export default LoginForm;
