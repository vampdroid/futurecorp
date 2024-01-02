const singleProjectStyles = `
    <link rel="stylesheet" href="./build/css/index.css" />
`;

const mobileScreenMarkup = `
<div class="notch--up"></div>
<div class="notch--down"></div>
<div class="screen screen--mobile"></div>
`;

const desktopScreenMarkup = `
<div class="notch--up"></div>
<div class="notch--down"></div>
<div class="screen screen--desktop"></div>
`;

const singleProjectMarkup = `
<div class="screen-design"></div>
<h4 class="project-design--title"></h4>
<p class="project-design--content"></p>
<a class="button button--sm button--circular project-design--detail-button"></a>
`;

let singleProjectTemplate = document.createElement('template');

singleProjectTemplate.innerHTML = `
${singleProjectStyles}
${singleProjectMarkup}
`;



class SingleProject extends HTMLElement {

    private projectScreen: HTMLDivElement;
    private projectTitle: HTMLHeadingElement;
    private projectContent: HTMLParagraphElement;
    private projectAnchorLink: HTMLAnchorElement;

    constructor() {
        super();

        let shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.append(singleProjectTemplate.content.cloneNode(true));

        this.projectScreen = this.shadowRoot?.querySelector('.screen-design') as HTMLDivElement;
        this.projectTitle = this.shadowRoot?.querySelector('.project-design--title') as HTMLHeadingElement;
        this.projectContent = this.shadowRoot?.querySelector('.project-design--content') as HTMLParagraphElement;
        this.projectAnchorLink = this.shadowRoot?.querySelector('.project-design--detail-button') as HTMLAnchorElement;
    }

    connectedCallback(): void {

    }

    static get observedAttributes() {
        return ['screen-mobile', 'screen-desktop', 'image-url', 'project-title', 'project-content', 'project-link-text', 'project-link'];
    }

    attributeChangedCallback(name: string): void {

        if (name === 'screen-mobile') {
            if (this.getAttribute(name) === 'true') {
                this.projectScreen.innerHTML = mobileScreenMarkup;
            }
        }

        if (name === 'screen-desktop') {
            if (this.getAttribute(name) === 'true') {
                this.projectScreen.innerHTML = desktopScreenMarkup;
            }
        }

        if (name === 'image-url') {
            if (this.getAttribute(name)) {
                this.projectScreen.innerHTML = `
                <img src=${this.getAttribute(name)} alt="Image Project Screen" />
                `
            }
        }

        if (name === 'project-title') {
            this.projectTitle.innerText = this.getAttribute(name) || '';
        }

        if (name === 'project-content') {
            this.projectContent.innerText = this.getAttribute(name) || '';
        }

        if (name === 'project-link-text') {
            this.projectAnchorLink.innerText = this.getAttribute(name) || '';
        }

        if (name === 'project-link') {
            this.projectAnchorLink.href = this.getAttribute(name) || '';
        }

    }

}

customElements.define('single-project', SingleProject);
