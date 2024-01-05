const projectsListStyles = `
    <link rel="stylesheet" href="./build/css/index.css" />
`;

const projectsListMarkup = `

`;

let projectsListTemplate = document.createElement('template');

projectsListTemplate.innerHTML = `
${projectsListStyles}
${projectsListMarkup}
`;


class ProjectsList extends HTMLElement {

	constructor() {
		super();
		
	}

    connectedCallback() {
        
    }
}

customElements.define('projects-list', ProjectsList);