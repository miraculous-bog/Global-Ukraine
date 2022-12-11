const playMarketArr = document.querySelectorAll('.playmarket');
const appStoreArr = document.querySelectorAll('.appstore');

const playMarketHandler = () => {
	fbq('track', 'Subscribe', { name: "Play Market" });
}

const appStoreHandler = () => {
	fbq('track', 'Subscribe', { name: "App Store" });
}

playMarketArr.forEach(el => {
	el.addEventListener('click', playMarketHandler);
});

appStoreArr.forEach(el => {
	el.addEventListener('click', appStoreHandler);
});