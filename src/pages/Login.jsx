import React, { useRef, useState } from 'react';
import './Login.css';
import { axiosClient } from '../utils/axiosClient';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate qo'shildi

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate xookini qo'shish
    const loginRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axiosClient.post('/auth/login', {
            username: loginRef.current.value,
            password: passwordRef.current.value
        })
        .then(data => {
            dispatch(login(data.data));
            setError(false);
            setTimeout(() => {
                navigate('/'); // Sahifani navigatsiya qilish
            }, 1000);
        })
        .catch(err => {
            console.error(err);
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="login-container">
            {loading && <div className="loader"></div>}
            <div className="login-card">
                <h2 className="login-title">Sign In</h2>
                {error && <p className="error-message">Login failed. Please try again.</p>}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input  
                            type="text"
                            placeholder="Username"
                            ref={loginRef}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <Link to="/register" className="register-link">
                    <div className='navigate'>
                        <span>Have you not registered?</span>
                        <span className='spa'><Link to= '/register'>Register</Link></span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Login;
