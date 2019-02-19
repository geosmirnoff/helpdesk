function all() {
	var todayAll = Number(document.getElementById('allToday').innerHTML);
	var yestAll = Number(document.getElementById('allYest').innerHTML);
	if (todayAll <= yestAll) {
		document.getElementById('all').innerHTML = '<img src="img/green-arrow-lg.png" />';
	} else {
		document.getElementById('all').innerHTML = '<img src="img/red-arrow-lg.png" />';
	}	
}

function none() {
	var todayNone = Number(document.getElementById('noneToday').innerHTML);
	var yestNone = Number(document.getElementById('noneYest').innerHTML);
	if (todayNone <= yestNone) {
		document.getElementById('none').innerHTML = '<img src="img/green-arrow-md.png" />';
	} else {
		document.getElementById('none').innerHTML = '<img src="img/red-arrow-md.png" />';
	}
}

function new414() {
	var new414today = Number(document.getElementById('new414today').innerHTML);
	var new414yest = Number(document.getElementById('new414yest').innerHTML);
	if (new414today <= new414yest) {
		document.getElementById('new414').innerHTML = '<img src="img/green-arrow.png" />';
	} else {
		document.getElementById('new414').innerHTML = '<img src="img/red-arrow.png" />';
	}	
}

function new415() {
	var new415today = Number(document.getElementById('new415today').innerHTML);
	var new415yest = Number(document.getElementById('new415yest').innerHTML);
	if (new415today <= new415yest) {
		document.getElementById('new415').innerHTML = '<img src="img/green-arrow.png" />';
	} else {
		document.getElementById('new415').innerHTML = '<img src="img/red-arrow.png" />';
	}	
}

function closed414() {
	var closed414today = Number(document.getElementById('closed414today').innerHTML);
	var closed414yest = Number(document.getElementById('closed414yest').innerHTML);
	if (closed414today <= closed414yest) {
		document.getElementById('closed414').innerHTML = '<img src="img/green-arrow.png" />';
	} else {
		document.getElementById('closed414').innerHTML = '<img src="img/red-arrow.png" />';
	}	
}

function closed415() {
	var closed415today = Number(document.getElementById('closed415today').innerHTML);
	var closed415yest = Number(document.getElementById('closed415yest').innerHTML);
	if (closed415today <= closed415yest) {
		document.getElementById('closed415').innerHTML = '<img src="img/green-arrow.png" />';
	} else {
		document.getElementById('closed415').innerHTML = '<img src="img/red-arrow.png" />';
	}	
}

function allToday() {
	$.ajax({
		url: "alltoday.php",
		cache: false,
		success: function(html) {
			$("#allToday").html(html);
		}
	});
}

function allYest() {
	$.ajax({
		url: "allyest.php",
		cache: false,
		success: function(html){
			$("#allYest").html(html);
		}
	});
}

function noneToday() {  
	$.ajax({  
		url: "nonetoday.php",  
		cache: false,  
		success: function(html){  
			$("#noneToday").html(html);  
		}  
	});  
}

function noneYest() {  
	$.ajax({  
		url: "noneyest.php",  
		cache: false,  
		success: function(html){  
			$("#noneYest").html(html);  
		}  
	});  
}

function antitop() {  
	$.ajax({  
		url: "antitop.php",  
		cache: false,  
		success: function(html){  
			$("#antitop").html(html);  
		}  
	});  
}

function new414today() {  
	$.ajax({  
		url: "new414today.php",  
		cache: false,  
		success: function(html){  
			$("#new414today").html(html);  
		}  
	});  
}

function new414yest() {  
	$.ajax({  
		url: "new414yest.php",  
		cache: false,  
		success: function(html){  
			$("#new414yest").html(html);  
		}  
	});  
}

function new415today() {  
	$.ajax({  
		url: "new415today.php",  
		cache: false,  
		success: function(html){  
			$("#new415today").html(html);  
		}  
	});  
}

function new415yest() {
	$.ajax({
		url: "new415yest.php",
		cache: false,
		success: function(html){  
			$("#new415yest").html(html);  
		}
	});
}

function closed414today() {  
	$.ajax({  
		url: "closed414today.php",  
		cache: false,  
		success: function(html){  
			$("#closed414today").html(html);  
		}  
	});  
}

function closed414yest() {  
	$.ajax({  
		url: "closed414yest.php",  
		cache: false,  
		success: function(html){  
			$("#closed414yest").html(html);  
		}  
	});  
}

function closed415today() {
	$.ajax({  
		url: "closed415today.php",  
		cache: false,  
		success: function(html){  
			$("#closed415today").html(html);  
		}  
	});  
}

function closed415yest() {  
	$.ajax({  
		url: "closed415yest.php",  
		cache: false,  
		success: function(html){  
			$("#closed415yest").html(html);  
		}  
	});  
}

$(document).ready(function(){  
	all();
	none();
	new414();
	new415();
	closed414();
	closed415();
	allToday();
	allYest();
	noneToday();
	noneYest();
	antitop();
	new414today();
	new414yest();
	new415today();
	new415yest();
	closed414today();
	closed414yest();
	closed415today();
	closed415yest();
	setInterval('all()',1000);
	setInterval('none()',1000);
	setInterval('new414()',1000);
	setInterval('new415()',1000);
	setInterval('closed414()',1000);
	setInterval('closed415()',1000);
	setInterval('allToday()',60000);
	setInterval('allYest()',60000);
	setInterval('noneToday()',60000);
	setInterval('noneYest()',60000);
	setInterval('antitop()',60000);
	setInterval('new414today()',60000);
	setInterval('new414yest()',60000);
	setInterval('new415today()',60000);
	setInterval('new415yest()',60000);
	setInterval('closed414today()',60000);
	setInterval('closed414yest()',60000);
	setInterval('closed415today()',60000);
	setInterval('closed415yest()',60000);
}); 