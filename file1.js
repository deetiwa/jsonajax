// AJAX => ajax stands for Asynchronous javascript and xml.it is mechanism for making partial page update.
// AJAX Work with XML, text, JSON.
// sending the request with AJAX to SERVER => 



function loadaboutinformation()       // call to ajax
{
   var request=new XMLHttpRequest()   // make object and call open fun^
   request.open("GET", "about.html"); // make open fun^ pass method
   request.onreadystatechange = function()  // call whenever statechange
   {
     if(this.readyState == 4 && this.status == 200)
     {
        console.log(this.responseText);
        document.getElementById("container").innerHTML=this.responseText;
     }
   };
   request.send();
}
