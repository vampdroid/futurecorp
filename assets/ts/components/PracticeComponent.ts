class PracticeComponent extends HTMLElement {

    connectedCallback() {
        this.textContent = 'Yash Kukreja';

        const shadow = this.attachShadow({mode: 'closed'});

        shadow.innerHTML = `
        <style>
        :host{
            color: red;
        }
        </style>

        <p>Yash Kukreja</p>

        `;
    }



}

// alert('loaded');

window.customElements.define('practice-component', PracticeComponent);