document.body.onload = function() {
	document.getElementById("Clock").innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}
