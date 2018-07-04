function telltime() {
    var out = "";
    var now = new Date();
    out += "<br />Date: " + now.getDate();
    out += "<br />Month: " + now.getMonth();
    out += "<br />Year: " + now.getFullYear();
    out += "<br />Hours: " + now.getHours();
    out += "<br />Minutes: " + now.getMinutes();
    out += "<br />Seconds: " + now.getSeconds();

    document.getElementById("div1").innerHTML = out;
}

window.onload = function() {
    let zeroDiv = document.getElementById("zeroDiv");
    zeroDiv.innerHTML = "The current date and time are:";

    telltime();

    var inputButton = document.createElement("input");
    inputButton.setAttribute("id", "btn1");
    inputButton.setAttribute("type", "button");
    inputButton.setAttribute("value", "refresh");
    document.body.appendChild(inputButton);


    document.getElementById("btn1").onclick= function()
        {location.reload();}
    

    //<input id="btn1" type="button" value="refresh"/>
}
