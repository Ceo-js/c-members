

window.addEventListener( "load", event => {

	/* properties */
	var body = document.querySelector( "body" ),
		appbar = document.querySelector( "appbar" ),
		drawerToggle = document.querySelector( "#drawer-toggle" ),
		drawer = document.querySelector( "drawer" ),
		drawerOption = document.querySelectorAll( "#drawer-option" ),
		lnks = document.querySelectorAll( "lnk" ),
		l = document.querySelectorAll( "l" );

	/* functions */
	function print( v ) { console.log( v ); }

	function toggleBlock( v ) {
		switch( v.style.display ) {
		case "block": v.style.display = "none"; 
			break;
		case "": v.style.display = "none"; 
			break;
		case "none": v.style.display = "block"; 
			break;
		}
	}


	/* events */

	drawerToggle.addEventListener( "contextmenu", () => {
		console.log( "oi" );
		toggleBlock( drawer );
		switch( drawer.style.display ) {
		case "block": { body.style.padding = "68px 0 0 68px"; }
			break;
		case "none": { body.style.padding = "68px 0 0 0"; }
			break;
		}
	} );
	drawerToggle.addEventListener( "click", event => {
		drawer.classList.toggle( "drawer-switch" );
	} );
	drawerToggle.addEventListener( "mouseover", () => { drawerToggle.style.cursor = "pointer"; } );

	lnks.forEach( v => {
		v.addEventListener( "click", () => {
			window.open( v.innerText, "_blank" );
		} );
	} );

	drawerOption.forEach( option => {
		option.addEventListener( "click", event => {
			if( option.parentElement.style.height == "45px" ) {
				option.parentElement.style.height = "fit-content";
			} else if( option.parentElement.style.height == "fit-content" ) {
				option.parentElement.style.height = "45px";
			} else if( option.parentElement.style.height == "" ) {
				option.parentElement.style.height = "fit-content";
			}
			console.log( option.parentElement.style.height );
		} );
		option.style.cursor = "pointer";
	} );

	l.forEach( v => {
		v.style.color = "#ff9e00";
		v.style.cursor = "pointer";
		v.style.textDecoration = "none";
		v.addEventListener( "click", () => {
			window.open( v.getAttribute( "href" ), "" );
		} );
	} );



    
} );