import { BASE_URL } from '../../Config';

export const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password.');
    }

    return data; // Return the user data from the API response
};
