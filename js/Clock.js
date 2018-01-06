function LoadClock() {
	document.getElementById("Clock").innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}

setTimeout(LoadClock(), 1000);
