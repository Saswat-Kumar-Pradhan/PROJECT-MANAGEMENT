import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './dashboard.css'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Box, TextField, MenuItem } from '@mui/material';

// mui icons

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const projectData = [
    {
        name: "Alphatach Gateway",
        img: "https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png",
        contributors: [
            { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "Jane Smith", img: "https://randomuser.me/api/portraits/women/1.jpg" }
        ]
    },
    {
        name: "Kidtrayz",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCJwUG6ipFrTN4WFt4RQIJ0qnks0--4MDA&s",
        contributors: [
            { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" }
        ]
    },
    {
        name: "Hair Dextary",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCJwUG6ipFrTN4WFt4RQIJ0qnks0--4MDA&s",
        contributors: [
            { name: "Jane Smith", img: "https://randomuser.me/api/portraits/women/1.jpg" },
            { name: "Sam Green", img: "https://randomuser.me/api/portraits/men/2.jpg" }
        ]
    },
    {
        name: "Rapify SMS",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCJwUG6ipFrTN4WFt4RQIJ0qnks0--4MDA&s",
        contributors: []
    },
    {
        name: "Kalinga Premium",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCJwUG6ipFrTN4WFt4RQIJ0qnks0--4MDA&s",
        contributors: []
    },
    {
        name: "Kalinga Premium",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCJwUG6ipFrTN4WFt4RQIJ0qnks0--4MDA&s",
        contributors: []
    },

    {
        name: "Kalinga Premium",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCJwUG6ipFrTN4WFt4RQIJ0qnks0--4MDA&s",
        contributors: []
    },

    {
        name: "Kalinga Premium",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCJwUG6ipFrTN4WFt4RQIJ0qnks0--4MDA&s",
        contributors: []
    }
];

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // Enable dark mode
    },
});

const Dashboard = () => {
    const [openProjectDialog, setOpenProjectDialog] = useState(false);
    const [openEmployeeDialog, setOpenEmployeeDialog] = useState(false);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleProjectDialogOpen = () => {
        setOpenProjectDialog(true);
    };

    const handleProjectDialogClose = () => {
        setOpenProjectDialog(false);
        setFile(null);
        setPreview(null); // Reset the file and preview when dialog is closed
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile)); // Create preview URL
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            setPreview(URL.createObjectURL(droppedFile)); // Create preview URL for dropped file
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleEmployeeDialogOpen = () => {
        setOpenEmployeeDialog(true);
    };

    const handleEmployeeDialogClose = () => {
        setOpenEmployeeDialog(false);
    };

    return (
        <div className="dashboard">
            <ThemeProvider theme={darkTheme}>
                {/* <CssBaseline /> */}
                <div className='dashboard-btns'>
                    <Button className='addProject' onClick={handleProjectDialogOpen}><LibraryAddIcon sx={{ marginRight: "10px" }} /> Add Project</Button>
                    <Button className='addProject' onClick={handleEmployeeDialogOpen}><PersonAddAlt1Icon sx={{ marginRight: "10px" }} /> Add Employe</Button>
                    <Button className='addProject'><PeopleAltIcon sx={{ marginRight: "10px" }} /> All Employee</Button>
                </div>
                <div className="project_container">
                    {projectData.map((project, index) => (
                        <div className="project" key={index}>
                            <div className='project_name'>
                                <img src={project.img} alt={project.name} />
                                <div>
                                    <h3>{project.name}</h3>
                                </div>
                            </div>
                            <div className='project_details'>
                                <div>
                                    <AvatarGroup max={4}
                                        sx={{
                                            "& .MuiAvatar-root": { width: 30, height: 30 },
                                            "& .MuiAvatarGroup-avatar": { width: 30, height: 30 }
                                        }}>
                                        {project.contributors.map((contributor, i) => (
                                            <Avatar alt={contributor.name} src={contributor.img} />
                                        ))}
                                    </AvatarGroup>
                                </div>
                                <IconButton style={{ color: "rgba(255, 255, 255, 0.363)" }}>
                                    <OpenInNewIcon titleAccess='Go to Hosted Application' />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                </div>
                <br /><br /><br /><br />
                <h1 className='dashboard-heading'>Completed Projects</h1>
                <div className="project_container">
                    {projectData.map((project, index) => (
                        <div className="project" key={index}>
                            <div className='project_name'>
                                <img src={project.img} alt={project.name} />
                                <div>
                                    <h3>{project.name}</h3>
                                </div>
                            </div>
                            <div className='project_details'>
                                <div>
                                    <AvatarGroup max={4}
                                        sx={{
                                            "& .MuiAvatar-root": { width: 30, height: 30 },
                                            "& .MuiAvatarGroup-avatar": { width: 30, height: 30 }
                                        }}>
                                        {project.contributors.map((contributor, i) => (
                                            <Avatar alt={contributor.name} src={contributor.img} />
                                        ))}
                                    </AvatarGroup>
                                </div>
                                <IconButton style={{ color: "rgba(255, 255, 255, 0.363)" }}>
                                    <OpenInNewIcon titleAccess='Go to Hosted Application' />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                </div>
            </ThemeProvider>
            <br /><br /><br /><br /><br />
            {/* Dialog for adding project */}
            <Dialog open={openProjectDialog} onClose={handleProjectDialogClose} fullWidth>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Add Project</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for desktop
                            gap: '16px',
                            marginTop: '16px'
                        }}
                    >
                        {/* Drag and Drop Image Field */}
                        <Box
                            sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <div
                                style={{
                                    border: '2px dashed #ccc',
                                    padding: '20px',
                                    aspectRatio: '1',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: '228px'
                                }}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{
                                        opacity: 0,
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        cursor: 'pointer'
                                    }}
                                    onChange={handleFileChange}
                                />
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                ) : (
                                    <span>Drag & Drop Image Here or Click to Upload</span>
                                )}
                            </div>
                        </Box>

                        {/* Project Details Fields */}
                        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <TextField label="Project Name" fullWidth />
                            <TextField label="Description" fullWidth />

                            {/* Git Username Dropdown */}
                            <TextField
                                select
                                label="Git Username"
                                defaultValue="saswatkumar"
                                fullWidth
                            >
                                <MenuItem value="saswatkumar">saswatkumar</MenuItem>
                                {/* Add more options if needed */}
                            </TextField>

                            {/* Git Password Dropdown */}
                            <TextField
                                select
                                label="Git Password"
                                defaultValue="et536tytet63t"
                                fullWidth
                            >
                                <MenuItem value="et536tytet63t">et536tytet63t</MenuItem>
                                {/* Add more options if needed */}
                            </TextField>
                        </Box>
                    </Box>
                    <br />
                    <div className='center'><Button variant="contained" color="success">Create</Button></div>
                </DialogContent>
            </Dialog>

            {/* Dialog for adding employee */}
            <Dialog open={openEmployeeDialog} onClose={handleEmployeeDialogClose}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Add Employee</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for desktop
                            gap: '16px',
                            marginTop: '16px'
                        }}
                    >
                        {/* Drag and Drop Image Field */}
                        <Box
                            sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <div
                                style={{
                                    border: '2px dashed #ccc',
                                    padding: '20px',
                                    aspectRatio: '1',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    height: '156px'
                                }}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{
                                        opacity: 0,
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        cursor: 'pointer'
                                    }}
                                    onChange={handleFileChange}
                                />
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                ) : (
                                    <span>Drag & Drop Image Here or Click to Upload</span>
                                )}
                            </div>
                        </Box>

                        {/* Project Details Fields */}
                        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <TextField label="Name" fullWidth />
                            <TextField label="Designation" fullWidth />

                            {/* Git Username Dropdown */}
                            <TextField
                                select
                                label="Role"
                                defaultValue="Employee"
                                fullWidth
                            >
                                <MenuItem value="Employee">Employee</MenuItem>
                                <MenuItem value="Admin">Admin</MenuItem>
                            </TextField>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for desktop
                            gap: '16px',
                            marginTop: '16px'
                        }}
                    >
                        <TextField label="Email" fullWidth />
                        <TextField label="Password" fullWidth />
                    </Box>
                    <br />
                    <div className='center'><Button variant="contained" color="success">Add</Button></div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Dashboard;
