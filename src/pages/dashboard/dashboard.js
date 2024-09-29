import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './dashboard.css'
import { Button } from '@mui/material';

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
    return (
        <div className="dashboard">
            <ThemeProvider theme={darkTheme}>
                {/* <CssBaseline /> */}
                <div className='dashboard-btns'>
                    <Button className='addProject'><LibraryAddIcon sx={{marginRight: "10px"}} /> Add Project</Button>
                    <Button className='addProject'><PersonAddAlt1Icon sx={{marginRight: "10px"}} /> Add Employe</Button>
                    <Button className='addProject'><PeopleAltIcon sx={{marginRight: "10px"}} /> All Employee</Button>
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
        </div>
    );
};

export default Dashboard;
