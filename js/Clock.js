document.body.onload = function() {
	document.getElementById("Clock").innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}

setTimeout(document.body.onload(), 1000);
