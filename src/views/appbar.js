

window.addEventListener( "load", () => {

	var appbar = document.querySelector( "appbar" ); 

	appbar.innerHTML = `
        <appbar-left>
            <img src="src/assets/pix/natal/adornment-christmas-decoration-svgrepo-com.svg" alt="" width="35px" height="35px">
        </appbar-left>
        <appbar-center>
            <h1>Sammarco</h1>
        </appbar-center>
        <appbar-right>
            <img class="drawertoggle" src="src/assets/pix/menu/menu-navigation-direction-arrow-location-map-svgrepo-com.svg" alt="" width="35px" height="35px">
        </appbar-right>
    `;


} );