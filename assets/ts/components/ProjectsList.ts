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
		// let shadowDOM = this.attachShadow({ mode: 'open' });
		// shadowDOM.append(projectsListTemplate.content.cloneNode(true));
	}

    connectedCallback() {
        // this.innerHTML = `
        // <div class="project-designs">
        //     ${this.innerHTML}
        // </div>
        // `
    }
}

customElements.define('projects-list', ProjectsList);