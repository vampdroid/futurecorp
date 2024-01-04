const serviceCardStyles = `
    <link rel="stylesheet" href="./build/css/index.css" />
`;

const serviceCardMarkup = `
<div class="card card--service">
    <div class="card--service__header">
        <p class="card--service__header__name">UI Design</p>
        <div class="card--service__header__info">
            <p class="card--service__header__text">Starting from</p>
            <p class="card--service__header__price">1200$</p>
        </div>
    </div>
    <div class="divider divider--services"></div>

    <slot name="service-list"></slot>

    <a href="#" class="button button--lg card--service__button"></a>
</div>
`;

let serviceCardTemplate = document.createElement('template');

serviceCardTemplate.innerHTML = `
${serviceCardStyles}
${serviceCardMarkup}
`;


class ServiceCard extends HTMLElement {


    private cardContainer: HTMLDivElement;

    private cardName: HTMLParagraphElement;
    private cardPrice: HTMLParagraphElement;
    private cardButton: HTMLAnchorElement;

    constructor() {
        super();

        let shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.append(serviceCardTemplate.content.cloneNode(true));

        this.cardContainer = this.shadowRoot?.querySelector('.card--service') as HTMLDivElement;
        this.cardName = this.shadowRoot?.querySelector('.card--service__header__name') as HTMLParagraphElement;
        this.cardPrice = this.shadowRoot?.querySelector('.card--service__header__price') as HTMLParagraphElement;
        this.cardButton = this.shadowRoot?.querySelector('.card--service__button') as HTMLAnchorElement;
    }

    static get observedAttributes() {
        return ['card-color', 'service-name', 'service-price', 'service-button-text', 'service-button-url'];
    }

    attributeChangedCallback(name: string): void {

        if (name === 'card-color') {
            this.cardContainer.classList.add(this.getAttribute('card-color') || '');
        }

        if (name === 'service-name') {
            this.cardName.innerText = this.getAttribute('service-name') || '';
        }

        if (name === 'service-price') {
            this.cardPrice.innerText = this.getAttribute('service-price') || '';
        }

        if (name === 'service-button-text') {
            this.cardButton.innerText = this.getAttribute('service-button-text') || '';
        }

        if (name === 'service-button-url') {
            this.cardButton.href = this.getAttribute('service-button-url') || '';
        }

    }

}

customElements.define('service-card', ServiceCard);

// Old Markup
// <!-- <div class="card card--service purple">
// <div class="card--service__header">
//     <p class="card--service__header__name">UI Design</p>
//     <div class="card--service__header__info">
//         <p class="card--service__header__text">Starting from</p>
//         <p class="card--service__header__price">1200$</p>
//     </div>
// </div>
// <div class="divider divider--services"></div>
// <ul class="card--service__list">
//     <li class="card--service__list__item">10 design pages</li>
//     <li class="card--service__list__item">Well-documented</li>
//     <li class="card--service__list__item">4 revisions</li>
//     <li class="card--service__list__item">$100/additional page</li>
// </ul>

// <button class="button button--lg card--service__button">Detail</button>
// </div> -->