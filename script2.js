s1= localStorage.getItem('ProjectFlight');
departure = JSON.parse(s1);
userAirDepart = departure["userAirDepart"] ;
userAirArr = departure["userAirArr"];
userTimeDepartES =departure["userTimeDepartES"]
userTimeArrES = departure["userTimeArrES"]
userTimeDepartREAL = departure["userTimeDepartREAL"];
userTimeArrREAL= departure["userTimeArrREAL"];
userTerminalDepart = departure["userTerminalDepart"];
userGateDepart = departure["userGateDepart"];
userTerminalArr = departure["userTerminalArr"];
serGateArr=departure["userGateArr"];


s2=localStorage.getItem('Project1UserInfo');
dep = JSON.parse(s2);
sts = dep["sts"]





// need to store local data for flight number and airline

document.getElementById("row1").innerHTML = userAirDepart;
document.getElementById("row2").innerHTML = userTimeDepartES;
if(userTimeDepartREAL==undefined){
  document.getElementById("row3").innerHTML = "*";
}
else{
document.getElementById("row3").innerHTML = userTimeDepartREAL;
}
document.getElementById("row4").innerHTML = userTerminalDepart;
document.getElementById("row5").innerHTML = userGateDepart


document.getElementById("row6").innerHTML = userAirArr;
document.getElementById("row7").innerHTML = userTimeArrES;
if(userTimeArrREAL ==undefined){
  document.getElementById("row8").innerHTML = "*";
}
else{
  document.getElementById("row8").innerHTML = userTimeArrREAL;
}
document.getElementById("row9").innerHTML = userTerminalArr;
document.getElementById("row10").innerHTML = serGateArr;


document.getElementById("top1").innerHTML = userAirDepart;
document.getElementById("top2").innerHTML = userAirArr;

document.getElementById("status").innerHTML =sts;

getmap();


function getmap(){
 //alert("Test 35")

s2=localStorage.getItem("Project1UserInfo");
coord = JSON.parse(s2);


//alert(a + " 56")

    
L.mapquest.key = '46b7bHr7XibE3juw0ihSljH70MKbUJhb';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {

center: [coord["Lat"], coord["Lng"]],



layers: L.mapquest.tileLayer('map'),
zoom: 12
});

map.addControl(L.mapquest.control());




//alert("59")
var img1 = document.createElement("img")
img1.src = "flight.png";
//var imageBounds = [
 /*[36.99, -102.05],
  [37, -109.05],
  [41, -109.05],
  [41, -102.05]
  ];*/

  //[a, b],
 // [b, d],
 // [c , d],
  //[c, b]
 // ];






    }