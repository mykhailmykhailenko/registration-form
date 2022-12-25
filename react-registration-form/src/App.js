import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm'
import styles from './App.module.css'


function App() {
  return (
    <div className={styles['container']}>
    <BrowserRouter>
    
      <div className={styles['wrapper']}>
          <Link className={styles['link']} to="/registration">Registration</Link>
          <Link className={styles['link']} to="/login">LoginForm</Link>
      </div>
    
    <Routes>
        <Route path="/registration" element={<RegistrationForm />}/>
        <Route path="/login" element={<LoginForm />}/>
    </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
