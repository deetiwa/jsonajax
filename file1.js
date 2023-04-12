// AJAX => ajax stands for Asynchronous javascript and xml.it is mechanism for making partial page update.
// AJAX Work with XML, text, JSON.
// sending the request with AJAX to SERVER => 

function loadinformation()
{
    var request = new XMLHttpRequest();
 request.open("GET","about.html");           // HTTP Method => GET, POST, CONNECT, TRACK/ URL => File name like about.jsp
 request.onreadystatechange = function()
 {
    if(this.readyState == 4 &&  this.status == 200)
    {
        console.log(this.responseText);
        document.getElementById("container").innerHTML = this.responseText;
    }
 }
}