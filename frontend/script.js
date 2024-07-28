document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
});

function fetchProjects() {
    fetch('http://localhost:3000/projects')
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error('Error fetching projects:', error));
}

function displayProjects(projects) {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsList.appendChild(projectItem);
    });
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => alert('Message sent successfully!'))
    .catch(error => console.error('Error sending message:', error));
});
