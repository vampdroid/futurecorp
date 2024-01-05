class PageTitle extends HTMLHeadingElement {


    constructor() {
        super();
       
        this.append(document.createElement('h1').innerText = this.innerText);
    }

}


customElements.define('page-title', PageTitle);