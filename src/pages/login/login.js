import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../assets/images/hypernextlogo.png';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSplash, setShowSplash] = useState(true); // Splash screen state

    const navigate = useNavigate(); // Hook for navigation

    // Array of users
    const users = [
        { email: 'saswatkumar059@gmail.com', password: '1234', name: 'Saswat Kumar Pradhan', role: 'admin' },
        { email: 'user2@example.com', password: 'password456', name: 'Jane Smith', role: 'user' },
        { email: 'user3@example.com', password: 'password789', name: 'Alice Johnson', role: 'editor' },
    ];

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        // Reset error
        setError('');

        // Find user in the array
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            const userInfo = {
                isLoggedIn: true,
                email: user.email,
                role: user.role,
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            navigate('/'); // Redirect to home
        } else {
            setError('Invalid email or password');
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
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
}

export default Login;
