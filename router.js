const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleLocation();
};

const routes = {
	"/": "/general/index.html",
	"/general": "/general/index.html",
	"/fop1": "/fop1/index.html",
	"/fop2": "/fop2/index.html",
};

const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const html = await fetch(route).then((data) => data.text());
	document.getElementById("main-page-router").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();