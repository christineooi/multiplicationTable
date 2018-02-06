
var color_td = "#fff";
var newHTML = "<tr style='height:40px;'><td style='width:40px;background-color:#ccc'>X</td> ";
for(var x = 0; x <=10; x++){
	newHTML += "<td style='width:40px;background-color:#ccc'>" + x + "</td>";
}
newHTML += "</tr>"


for(var i = 0; i <= 10; i++) {
    newHTML += "<tr style='height:40px;'>";
    newHTML += "<td style='width:40px;background-color:#ccc'>" + i + "</td>";
	for(var j = 0; j <= 10; j++) {
		newHTML += "<td style='width:40px;background-color:" + color_td + "'>" + i*j + "</td>";
	}
    newHTML += "</tr>";
}

document.getElementById("content").innerHTML = newHTML;