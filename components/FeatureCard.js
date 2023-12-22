const featureCardStyles = `
.card--service {
    width: 328px;
    padding: 32px 40px 36px 40px;
    background-color: var(--color-tertiary);
    border-radius: var(--border-radius-md);
}

.service-icon {
    padding: 13px;
    background-color: var(--color-tertiary);
    border-radius: var(--border-radius-sm);
}

.service-title {
    padding-top: 29px;
    color: var(--color-heading);
}

.service-content {
    padding-top: 8px;
    color: var(--color-body);
}
`;

const featureCardMarkup = `
<img class="service-icon"/>
<h4 class="service-title"></h4>
<p class="service-content"></p>
`;

let featureCardTemplate = document.createElement('template');

featureCardTemplate.innerHTML = `
<style>${featureCardStyles}</style>
${featureCardMarkup}
`;

class FeatureCard extends HTMLElement {
	constructor() {
		super();
		let shadowDOM = this.attachShadow({ mode: 'open' });
		shadowDOM.append(featureCardTemplate.content.cloneNode(true));

		this.cardImage = this.shadowRoot.querySelector('.service-icon');
		this.cardTitle = this.shadowRoot.querySelector('.service-title');
		this.cardContent = this.shadowRoot.querySelector('.service-content');
	}

	static get observedAttributes() {
		return ['image-source', 'title', 'content'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'image-source') {
			this.cardImage.setAttribute(
				'src',
				this.getAttribute('image-source')
			);
		}

		if (name === 'title') {
			this.cardTitle.innerText = this.getAttribute('title');
		}

		if (name === 'content') {
			this.cardContent.innerText = this.getAttribute('content');
		}
	}

	connectedCallback() {}
}

customElements.define('feature-card', FeatureCard);

// Previous Markup

// <!-- <div class="card card--service">
// <img class="service-icon" src="./assets/images/svgs/services/figma.svg" alt="Figma logo" />
// <h4 class="service-title">Design</h4>
// <p class="service-content">The project interface will be designed first, our favorite tool is Figma.
// </p>
// </div>
// <div class="card card--service">
// <img class="service-icon" src="./assets/images/svgs/services/developer.svg" alt="Figma logo" />
// <h4 class="service-title">Develop</h4>
// <p class="service-content">Transform design and write business logic here. Choose the technology you
//     want.</p>
// </div>
// <div class="card card--service">
// <img class="service-icon" src="./assets/images/svgs/services/ship.svg" alt="Figma logo" />
// <h4 class="service-title">Ship</h4>
// <p class="service-content">After the work is complete, we will send the project and all its assets
//     to you.</p>
// </div> -->
