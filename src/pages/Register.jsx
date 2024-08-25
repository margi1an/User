import React, { useState } from 'react';
import './Register.css';
import { FaImage, FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate qo'shildi
import toast, { Toaster } from 'react-hot-toast';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        imageUrl: '',
        name: '',
        password: '',
        repeatPassword: ''
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const { imageUrl, name, password, repeatPassword } = formData;

        if (!imageUrl || !name || !password || !repeatPassword) {
            toast.error('Please fill in all fields.');
            setLoading(false);
            return;
        }

        if (password !== repeatPassword) {
            toast.error('Passwords do not match.');
            setLoading(false);
            return;
        }

        // Save data to localStorage
        localStorage.setItem('userData', JSON.stringify(formData));
        toast.success('Registration successful!');
        
        setError(false);
        setLoading(false);
        
        // Navigate to home after registration
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <div className="register-container">
            {loading && <div className="loader"></div>}
            <Toaster />
            <div className="register-card">
                <h2 className="register-title">Register</h2>
                {error && <p className="error-message">Registration failed. Please try again.</p>}
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaImage className="icon" />
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Image URL"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            name="repeatPassword"
                            placeholder="Repeat Password"
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <Link to="/login" className="login-link">
                    <div className='navigate'>
                        <span>Already registered?</span>
                        <span className='spa'><Link to='/login'>Login</Link></span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Register;
