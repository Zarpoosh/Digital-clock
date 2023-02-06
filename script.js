function clock(){
    var date =new Date();
    document.getElementById("houre").innerHTML =date.getHours();
    document.getElementById("minute").innerHTML =date.getMinutes();
    document.getElementById("second").innerHTML =date.getSeconds();
}
setInterval(clock,1000);