import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './project.css';
import { IconButton, Tooltip } from '@mui/material';
import Slider from '@mui/material/Slider';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { Modal, Box, Typography, Button } from '@mui/material'; // Import Material-UI components


// mui icons

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import LaunchIcon from '@mui/icons-material/Launch';

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

const projectRepos = [
    {
        name: "admin-web",
        url: "https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png",
        type: "Frontend",
    },
    {
        name: "user-web",
        url: "https://cdn.hdhkjs.com.05/logo-7402513_640.png",
        type: "Frontend",
    }
];

const getSliderColor = (value) => {
    if (value == 100) return 'green';
    if (value < 50) return 'red';
    return 'blue';
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%', // Makes the modal wider
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Project = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen(true);
    const handleClose2 = () => setOpen(false);
    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopySuccess('Copied');
                setTimeout(() => {
                    setCopySuccess(''); // Reset after 2 seconds
                }, 2000); // 2000 milliseconds = 2 seconds
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
                setCopySuccess('Failed to copy!');
                setTimeout(() => {
                    setCopySuccess(''); // Reset after 2 seconds even on failure
                }, 2000);
            });
    };
    const redirect = (url) => {
        window.open(url, '_blank'); // Opens the URL in a new tab
      };
    return (
        <div className="project-list">
            {projectData.map((project, index) => (
                <div key={index} className="projects">
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
                            <a href={project.documentation} target="_blank" rel="noopener noreferrer">
                                <div className='box'>
                                    <img src='https://cdn.icon-icons.com/icons2/2136/PNG/512/google_docs_icon_131691.png' />
                                    <div>
                                        <h3>Documentation</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
                            <a href={project.documentation} target="_blank" rel="noopener noreferrer">
                                <div className='box'>
                                    <img src='https://cdn-icons-png.freepik.com/512/7372/7372403.png' />
                                    <div>
                                        <h3>Flow Diagram</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
                            <a href={project.documentation} target="_blank" rel="noopener noreferrer">
                                <div className='box'>
                                    <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png' />
                                    <div>
                                        <h3>UI/UX Design</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
                            <a href={project.documentation} target="_blank" rel="noopener noreferrer">
                                <div className='box'>
                                    <img src='https://cdn.amasty.com/media/catalog/product/cache/8b14a410c096e2fc1a81f19ab33fad4c/s/e/seo-toolkit-for-magento-2_61a0985238d1b.png' />
                                    <div>
                                        <h3>Test Reports</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" onClick={handleOpen}>
                                <div className='box'>
                                    <img src='https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png' />
                                    <div>
                                        <h3>Git Repos</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" onClick={handleOpen2}>
                                <div className='box'>
                                    <img src='https://cdn.icon-icons.com/icons2/1852/PNG/512/iconfinder-webbrowseronlaptop-4417111_116624.png' />
                                    <div>
                                        <h3>Hosted Links</h3>
                                        <p>3 links</p>
                                    </div>
                                </div>
                            </a>
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

            {/* Git Repo Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className='modalstyle'
            >
                <Box sx={modalStyle} style={{ borderRadius: "20px" }}>
                    <div className='center'>
                        <div className='box'>
                            <img src='https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png' />
                            <div>
                                <h3>Git Repositories</h3>
                            </div>
                        </div>
                    </div>
                    {projectRepos.map((repo, index) => (
                        <div>
                            <h4>{repo.name}</h4>
                            <div className='cntr2'>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', height: '30px', width: '100%', backgroundColor: 'rgb(197, 197, 197)' }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1, fontSize: '12px' }}
                                        placeholder="Search Google Maps"
                                        value={repo.url}
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => copyToClipboard(repo.url)}>
                                        <ContentCopyIcon />
                                    </IconButton>
                                </Paper>
                                <h5>{repo.type}</h5>
                            </div>
                        </div>
                    ))}
                    {copySuccess && <h5 style={{ position: 'absolute', top: '0', right: '30px', color: 'green' }}>{copySuccess}</h5>}
                    <div className='center'><Button variant="contained" onClick={handleClose} sx={{ mt: 3 }}>
                        Close
                    </Button></div>
                </Box>
            </Modal>


            {/* Hosted Links Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className='modalstyle'
            >
                <Box sx={modalStyle} style={{ borderRadius: "20px" }}>
                    <div className='center'>
                        <div className='box'>
                            <img src='https://cdn.icon-icons.com/icons2/1852/PNG/512/iconfinder-webbrowseronlaptop-4417111_116624.png' />
                            <div>
                                <h3>Hosted Links</h3>
                                <p>3 links</p>
                            </div>
                        </div>
                    </div>
                    {projectRepos.map((repo, index) => (
                        <div>
                            <h4>{repo.name}</h4>
                            <div className='cntr2'>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', height: '30px', width: '100%', backgroundColor: 'rgb(197, 197, 197)' }}
                                >
                                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => copyToClipboard(repo.url)}>
                                        <ContentCopyIcon />
                                    </IconButton>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1, fontSize: '12px' }}
                                        placeholder="Search Google Maps"
                                        value={repo.url}
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                    <Tooltip title="Copy to Clipboard">
                                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => copyToClipboard(repo.url)}>
                                        <ContentCopyIcon />
                                    </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Go to the Link">
                                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => redirect(repo.url)}>
                                        <LaunchIcon />
                                    </IconButton>
                                    </Tooltip>
                                </Paper>
                            </div>
                        </div>
                    ))}
                    {copySuccess && <h5 style={{ position: 'absolute', top: '0', right: '30px', color: 'green' }}>{copySuccess}</h5>}
                    <div className='center'><Button variant="contained" onClick={handleClose} sx={{ mt: 3 }}>
                        Close
                    </Button></div>
                </Box>
            </Modal>
        </div>
    );
};

export default Project;
