import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './project.css';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';


// mui icons

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';

const projectData = [
    {
        name: "Alphatach Gateway",
        desc: "Single and Bulk Whatsapp Application",
        img: "https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png",
        documentation: "https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png",
        flowDiagram: "https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png",
        design: "https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png",
        contributors: [
            { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "Jane Smith", img: "https://randomuser.me/api/portraits/women/1.jpg" }
        ]
    }
];

const projectTask = [
    {
        name: "add admin panel and dashboard",
        progress: "30"
    },
    {
        name: "task2",
        progress: "60"
    },
    {
        name: "add api for whatsapp send SMS",
        progress: "70"
    },
    {
        name: "add admin panel and dashboard",
        progress: "10"
    },
    {
        name: "make Responsive",
        progress: "100"
    }
];
const getSliderColor = (value) => {
    if (value == 100) return 'green';
    if (value < 50) return 'red';
    return 'blue';
};

const Project = () => {
    return (
        <div className="project-list">
            {projectData.map((project, index) => (
                <div key={index} className="project">
                    <div className='details'>
                        <div className='cntr'>
                            <img src={project.img} alt={project.name} className="project-img" />
                            <div>
                                <h1>{project.name}</h1>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                        <div className='contributors'>
                            <AvatarGroup max={10}
                                sx={{
                                    "& .MuiAvatar-root": { width: 30, height: 30 }, /* Regular Avatars */
                                    "& .MuiAvatarGroup-avatar": { width: 30, height: 30 } /* Overflow Avatar */
                                }}>
                                {project.contributors.map((contributor, i) => (
                                    <Avatar key={i} alt={contributor.name} src={contributor.img} />
                                ))}
                            </AvatarGroup>
                        </div>
                        <div className='boxes'>
                            <a src={projectData.documentation}>
                                <div className='box'>
                                    <img src='https://cdn.icon-icons.com/icons2/2136/PNG/512/google_docs_icon_131691.png' />
                                    <div>
                                        <h3>Documentation</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
                            <a src={projectData.documentation}>
                                <div className='box'>
                                    <img src='https://cdn-icons-png.freepik.com/512/7372/7372403.png' />
                                    <div>
                                        <h3>Flow Diagram</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
                            <div className='box'>
                                <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png' />
                                <div>
                                    <h3>UI/UX Design</h3>
                                    <p>3 links</p>
                                </div>
                            </div>
                            <div className='box'>
                                <img src='https://cdn.amasty.com/media/catalog/product/cache/8b14a410c096e2fc1a81f19ab33fad4c/s/e/seo-toolkit-for-magento-2_61a0985238d1b.png' />
                                <div>
                                    <h3>Test Reports</h3>
                                    <p>3 links</p>
                                </div>
                            </div>
                            <div className='box'>
                                <img src='https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png' />
                                <div>
                                    <h3>Git Repos</h3>
                                    <p>3 links</p>
                                </div>
                            </div>
                            <div className='box'>
                                <img src='https://cdn.icon-icons.com/icons2/1852/PNG/512/iconfinder-webbrowseronlaptop-4417111_116624.png' />
                                <div>
                                    <h3>Hosted Links</h3>
                                    <p>3 links</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='progress'>
                        <nav className='cntr'>
                            <h2>To Do</h2>
                            <div className='icons'>
                                <IconButton><SearchIcon /></IconButton>
                                <IconButton><SortIcon /></IconButton>
                            </div>
                        </nav>
                        <table>
                            {/* <thead>
                                <tr>
                                    <th>Tasks</th>
                                    <th>Progress</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {projectTask.map((task, index) => (
                                    <tr>
                                        <td>{task.name}</td>
                                        <td>
                                            <Slider defaultValue={task.progress} aria-label="Default" valueLabelDisplay="auto" onChange={getSliderColor} sx={{
                                                color: getSliderColor(task.progress),
                                            }} />
                                        </td>
                                        <td>{task.progress}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;
