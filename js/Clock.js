window.onload = function() {
	document.getElementById("Clock").innerHTML = new Date() + ":" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}
