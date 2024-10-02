import { BASE_URL } from '../../Config';

export const createProject = async (token, projectData) => {
    const response = await fetch(`${BASE_URL}create_project/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the header
        },
        body: JSON.stringify(projectData), // Send the project data as JSON
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Failed to create project.');
    }

    return data; // Return the project data from the API response
};

export const createProfile = async (token, profileData) => {
    const response = await fetch(`${BASE_URL}create_profile/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the header
        },
        body: JSON.stringify(profileData), // Send the profile data as JSON
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Failed to create profile.');
    }

    return data; // Return the profile data from the API response
};