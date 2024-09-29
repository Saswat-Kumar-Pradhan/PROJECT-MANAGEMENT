import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../assets/images/hypernextlogo.png';
import './login.css';
import { loginUser } from './loginApi'; // Import loginUser from the API utility

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSplash, setShowSplash] = useState(true); // Splash screen state
    const [loading, setLoading] = useState(false); // Loading state for button

    const navigate = useNavigate(); // Hook for navigation

    // Hide splash screen after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        // Cleanup timer
        return () => clearTimeout(timer);
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        // Reset error and start loading
        setError('');
        setLoading(true);

        try {
            // Call the login API function from api.js
            const data = await loginUser(email, password);

            // Assuming the API response contains a token or user data
            const userInfo = {
                isLoggedIn: true,
                email: data.email,
                role: data.role,
                token: data.access, // Save token for authentication
            };

            // Store the user data in localStorage
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            // Navigate to the home page or dashboard
            navigate('/');
        } catch (error) {
            setError(error.message || 'Failed to log in.');
        } finally {
            setLoading(false); // Stop loading spinner
        }
    };

    // Splash screen
    if (showSplash) {
        return (
            <div className="splash-screen">
                <img src={logo} alt="Logo" className="splash-logo" />
            </div>
        );
    }

    return (
        <Container className='centered'>
            <Container maxWidth="xs" className='login_logo'>
                <img src={logo} alt="Logo" />
                <h1 className='heading'>Projects</h1>
            </Container>
            <Container maxWidth="xs" className='login_form'>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#00ac5a', '&:hover': { backgroundColor: 'darkgreen' } }}
                            disabled={loading} // Disable button during loading
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
}

export default Login;
