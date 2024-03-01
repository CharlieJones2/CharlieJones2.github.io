const boxes = [
    {
        name: 'Project Notebook',
        description: 'Click here to see the full project in Juypter Notebook form.',
        imgUrl: 'Images/Smeargle.png',
        imgTitle: 'Smeargle',
        link: 'carbonFootprintNotebook.html',
    },
    {
        name: 'Project Calculator',
        description: 'Calculate your own estimated carbon footprint by using the regression model created in this project!',
        imgUrl: 'Images/Plusle.png',
        imgTitle: 'Plusle',
        link: 'calculator.html',
    }
]
const footprintContainer = document.querySelector('.boxes');

function show_image(src, title) {
    var img = document.createElement("img");
    img.src = src;
    img.title = title;
    return img;
}

function displayBoxes() {
    footprintContainer.innerHTML = ''; // Clear existing boxes

    boxes.forEach((box) => {
        // Create a box element
        const boxElement = document.createElement('div');
        boxElement.classList.add('box');
        boxElement.innerHTML = `
            <h2>${box.name}</h2>
            <p>${box.description}</p>
        `;

        // Create a container for the box image
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        // Add box image
        const boxImage = show_image(box.imgUrl, box.imgTitle);
        boxImage.classList.add('box-image');
        imageContainer.appendChild(boxImage);

        // Append the container to the box element
        boxElement.appendChild(imageContainer);

        // Create an anchor tag for the box link
        const boxLink = document.createElement('a');
        boxLink.href = box.link; // Set the link URL
        boxLink.style.display = 'contents'; // Makes only the box clickable
        boxLink.appendChild(boxElement); // Wrap the box element

        // Append the entire box to the container
        footprintContainer.appendChild(boxLink);
    });
}

// Initial load (show all boxes)
displayBoxes();