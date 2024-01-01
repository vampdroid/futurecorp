
const mobileMenuButton = document.getElementById( 'button-mobile-navigation' );

const mobileNavigationContainer = document.querySelector( '.header-navigation__container' ) as HTMLElement;

mobileMenuButton?.addEventListener( 'click', () => {

    console.log('yash');

    if( mobileNavigationContainer ) {
        if(mobileNavigationContainer.style.display === 'none') {
            mobileNavigationContainer.style.display = 'flex';
            return;
        }
        mobileNavigationContainer.style.display =  'none';
    }
   
} )