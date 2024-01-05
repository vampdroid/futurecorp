
class SiteIdentity extends HTMLElement {

    private logo: HTMLImageElement;
    private siteTitle: HTMLHeadingElement;

    constructor() {
        super();
        const siteIdentityTemplate = document.getElementById('site-identity-template') as HTMLTemplateElement;
        this.append(siteIdentityTemplate.content.cloneNode(true));
    
        this.logo = document.querySelector('site-identity img') as HTMLImageElement;
        this.siteTitle = document.querySelector('site-identity h1') as HTMLHeadingElement;
        console.log(this);
    }

    static get observedAttributes() {
        return ['logo-url', 'alt-text', 'title'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        if( oldValue === newValue ) {
            return;
        }

        if (name === 'logo-url') {
            this.logo.setAttribute('src', this.getAttribute('logo-url') || '');
        }

        if (name === 'alt-text') {
            this.logo.setAttribute('alt', this.getAttribute('alt-text') || '');
        }

        if (name === 'title') {
            this.siteTitle.innerText = this.getAttribute('title') || '';
        }
    }

}


customElements.define('site-identity', SiteIdentity);
