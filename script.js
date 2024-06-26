const projects = [
    {
        name: 'Streaming History Analysis - My Year in Music',
        description: 'This project involves creating a Power BI report to showcase trends in my listening history for the current year. Using the Last.fm API, I extract data on all my streams for the current year with Python, and present the information in a concise and interactive report.',
        softwareUsed: ['python', 'powerbi'],
        imgUrl: 'Images/Roxie.png',
        imgTitle: 'Roxie',
        link: 'project_music.html',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/2bf1c982fb24528eee1559a96a25eb534c175cfd/SVG/Power-BI.svg']
    },
    {
        name: 'Determining an Individuals\' Environmental Impact',
        description: 'Using a synthetically generated dataset based on numerous leading studies, this project seeks to determine which individual characteristics, such as diet, travel type and frequency impact our individual impact, and uses regression analysis to determine how best to minimise ones\' impact.',
        softwareUsed: ['python', 'scikit-learn', 'streamlit'],
        imgUrl: 'Images/Turtwig.png',
        imgTitle: 'Turtwig',
        link: 'project_environment.html',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', 'https://streamlit.io/images/brand/streamlit-mark-color.svg']
    },
    // {
    //     name: 'How does Technology Usage Impact our Happiness?',
    //     description: 'In an age of constant connection, why do we still feel lonely? This project analyses data from ___ and uses regression analysis to predict happiness based on smartphone usage',
    //     softwareUsed: ['python', 'scikit-learn', 'powerbi'],
    //     imgUrl: 'Images/Magnemite.png',
    //     imgTitle: 'Magnemite',
    //     link: 'project_smartphoneusage.html',
    //     softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/2bf1c982fb24528eee1559a96a25eb534c175cfd/SVG/Power-BI.svg']
    // },
    // {
    //     name: 'Microsoft SQL Server into Power BI Dashboard',
    //     description: 'For this project I\'m not sure what I want to do yet, but I want it to use SQL Server and I want to create a Power BI dashboard.',
    //     softwareUsed: ['sql', 'powerbi'],
    //     imgUrl: 'Images/Ethan.png',
    //     imgTitle: 'Ethan (HGSS)',
    //     link: "project_sqlserverpowerbi.html",
    //     softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg', 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/2bf1c982fb24528eee1559a96a25eb534c175cfd/SVG/Power-BI.svg']
    // },
    // {
    //     name: 'The Impact of Meat and Dairy on Climate Change',
    //     description: 'This project looks at one of the often most overlooked aspects of climate change and just how drastic its\' impact can be: eating animals.',
    //     softwareUsed: ['python', 'scikit-learn'],
    //     imgUrl: 'Images/Corsola-Galar.png',
    //     imgTitle: 'Galarian Corsola',
    //     link: 'project_wildfires.html',
    //     softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg']
    // },
    {
        name: 'Analysing Biodiversity in US National Parks',
        description: 'This project analyses biodiversity data across national parks in the USA, looking specifically at endangered species across different parks.',
        softwareUsed: ['python', 'scikit-learn'],
        imgUrl: 'Images/Celebi.png',
        imgTitle: 'Celebi',
        link: 'project_biodiversity.html',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg']
    },
    {
        name: 'Stategic Analysis of Pokemon Data',
        description: 'Using data analysis to inform strategy in Pokemon - looking at trends and creating statistical tests and data visualisations to document results.',
        softwareUsed: ['python', 'tableau'],
        imgUrl: 'Images/Bulbasaur.png',
        imgTitle: 'Bulbasaur',
        link: 'project_pokemon.html',
        softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 'https://upload.vectorlogo.zone/logos/tableau/images/113a311a-6d5d-4b7e-9193-79807e4844e3.svg']
    },
    // {
    //     name: 'SQL and Tableau Project',
    //     description: 'Maybe I guess a more conventional project. Analysis of coffee shop sales to create dashboard or something.',
    //     softwareUsed: ['sql', 'tableau'],
    //     imgUrl: 'Images/Ethan.png',
    //     imgTitle: 'Ethan (HGSS)',
    //     link: "project_sqlservertableau.html",
    //     softwareIcons: ['https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg', 'https://upload.vectorlogo.zone/logos/tableau/images/113a311a-6d5d-4b7e-9193-79807e4844e3.svg']
    // },
];

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const projectsContainer = document.querySelector('.projects');

function show_image(src, title) {
    var img = document.createElement("img");
    img.src = src;
    img.title = title;
    return img;
}

function filterProjects() {
    const selectedSoftware = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    projectsContainer.innerHTML = ''; // Clear existing projects

    let projectFound = false; // Flag to check if any project is found

    projects.forEach((project) => {
        if (selectedSoftware.every((software) => project.softwareUsed.includes(software))) {
            projectFound = true; // Set the flag to true if a project is found

            // Create a project element
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h2>${project.name}</h2>
                <p>${project.description}</p>
            `;
    
            // Create a container for software icons
            const iconsContainer = document.createElement('div');
            iconsContainer.classList.add('icons-container');
    
            // Add software icons
            project.softwareIcons.forEach((softwareIcon) => {
                const iconImage = show_image(softwareIcon);
                iconImage.classList.add('icon-image');
                iconsContainer.appendChild(iconImage);
            });
    
            // Create a container for the project image
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
    
            // Add project image
            const projectImage = show_image(project.imgUrl, project.imgTitle);
            projectImage.classList.add('project-image');
            imageContainer.appendChild(projectImage);
    
            // Append the containers to the project element
            projectElement.appendChild(iconsContainer);
            projectElement.appendChild(imageContainer);
    
            // Create an anchor tag for the project link
            const projectLink = document.createElement('a');
            projectLink.href = project.link; // Set the link URL
            projectLink.style.display = 'contents'; // Makes only the box clickable
            projectLink.appendChild(projectElement); // Wrap the project element
    
            // Append the entire project to the container
            projectsContainer.appendChild(projectLink);
        }
    });

    // Display message if no projects found
    if (!projectFound) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h2>Oops!</h2>
            <p>No projects found with that combination of software. Click this box to reset all filters.</p>
        `;

        // Create a container for the project image
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        // Add project image
        const projectImage = show_image('Images/Psyduck.png', 'Psyduck');
        projectImage.classList.add('project-image');
        imageContainer.appendChild(projectImage);

        // Append the containers to the project element
        projectElement.appendChild(imageContainer);
        projectsContainer.appendChild(projectElement);

        const projectLink = document.createElement('a');
        projectLink.classList.add('reset');
        projectLink.style.display = 'contents';
        projectLink.appendChild(projectElement);

            // Add an event listener to the link
        projectLink.addEventListener('click', function() {

            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });

            filterProjects(); // Call the filterProjects function to update the projects displayed
        });

// Append the entire project to the container
projectsContainer.appendChild(projectLink);

    // Append the reset button to the project element
    projectElement.appendChild(resetButton);
    
        // Append the project element to the container
        // projectsContainer.appendChild(projectElement);;
    }
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', filterProjects);
});

// Initial load (show all projects)
filterProjects();
