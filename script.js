
var color_td;
var newHTML = "";
for(var i = 0; i <= 10; i++) {
    newHTML += "<tr style='height:40px;'>";
    newHTML += "<td style='width:30px;background-color:#ccc'>" + i + "</td>";
	for(var j = 0; j <= 10; j++) {
		newHTML += "<td style='width:40px;background-color:" + color_td + "'>" + i*j + "</td>";
	}
    newHTML += "</tr>";
}

document.getElementById("content").innerHTML = newHTML;