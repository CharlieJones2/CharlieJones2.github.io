// script.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    header.textContent = 'Charlie Jones';
});

const projects = [
    {
        name: 'Microsoft SQL Server into Power BI Dashboard',
        description: 'For this project I\'m not entirely sure what I want to do yet, but I want it to use SQL Server and I want to create a Power BI dashboard.',
        softwareUsed: ['sql', 'powerbi'],
        imgUrl: 'Images/Hotelier.png',
        imgTitle: 'Project Image Title',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg', 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/2bf1c982fb24528eee1559a96a25eb534c175cfd/SVG/Power-BI.svg']
    },
    {
        name: 'The Impact of Meat and Dairy on Climate Change',
        description: 'This project looks at one of the often most overlooked aspects of climate change and just how drastic its\' impact can be: eating animals.',
        softwareUsed: ['python', 'scikit-learn'],
        imgUrl: 'Images/Wildfire.png',
        imgTitle: 'Wildfire in Malibu',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg']
    },
    {
        name: 'Project on Hardcore/Emo Music',
        description: 'Somehow creating a project on Hardcore or Emo - I don\'t really want it to be the same as any other Spotify project out there but not sure what to do.',
        softwareUsed: ['python', 'pytorch', 'powerbi'],
        imgUrl: 'Images/TitleFight.png',
        imgTitle: 'Title Fight',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg', 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/2bf1c982fb24528eee1559a96a25eb534c175cfd/SVG/Power-BI.svg']
    },
    {
        name: 'Biodiversity in National Parks',
        description: 'This project analyses biodiversity data across national parks in the USA, looking specifically at endangered species across different parks.',
        softwareUsed: ['python', 'scikit-learn'],
        imgUrl: 'Images/Yosemite.png',
        imgTitle: 'Yosemite National Park',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg']
    },
    {
        name: 'Analysing Pokemon Data using Pandas',
        description: 'Using data analysis to inform strategy in Pokemon - looking at trends and creating statistical tests and data visualisations to document results.',
        softwareUsed: ['python', 'tableau'],
        imgUrl: 'Images/Bulbasaur.png',
        imgTitle: 'Bulbasaur',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.vectorlogo.zone/logos/tableau/images/113a311a-6d5d-4b7e-9193-79807e4844e3.svg']
    }
];

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const projectsContainer = document.querySelector('.projects');

function show_image(src, title, style) {
    var img = document.createElement("img");
    img.src = src;
    img.title = title;
    img.style = style;
    return img;
}

function filterProjects() {
    const selectedSoftware = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    projectsContainer.innerHTML = ''; // Clear existing projects

    projects.forEach((project) => {
        if (selectedSoftware.every((software) => project.softwareUsed.includes(software))) {
            // Show the project
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h2>${project.name}</h2>
                <p>${project.description}</p>
            `;
            project.softwareIcons.forEach((softwareicons) => {
                const iconImage = show_image(softwareicons);
            projectElement.appendChild(iconImage);
            });

            //attempting to distinguish the project image from the icons
            const projectImage = show_image(project.imgUrl, project.imgTitle);
            projectImage.classList.add('project-image');

            projectElement.appendChild(projectImage)
            projectsContainer.appendChild(projectElement);
        }
    });
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', filterProjects);
});

// Initial load (show all projects)
filterProjects();