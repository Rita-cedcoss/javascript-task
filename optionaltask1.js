
function submit(){
var name=document.getElementById('uname').value;
var email=document.getElementById('uemail').value;
var passwd=document.getElementById('upasswd').value;
var valid=true;
var letters = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
var emailCheck=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var checkpasswd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
if(!((name.match(letters))))
    {
    document.getElementById("message1").innerHTML="Please Enter valid name";
        valid = false; 
    }
    else
    {
        document.getElementById("message1").innerHTML = "";
    }
   
    if(!(email.match(emailCheck)))
    {
        
        document.getElementById("message2").innerHTML="Please Enter valid email";
           valid=false;
    }
    else
    {
        document.getElementById("message2").innerHTML = "";
    }
    
    if(!(passwd.match(checkpasswd)))
    {
        document.getElementById("message3").innerHTML="Please Enter valid password";
           valid=false;
    }
    else
    {
        document.getElementById("message3").innerHTML = "";
    }

    if(valid==true)
    {
    
        alert("Form Submited Successful");
    document.getElementById('uname').value="";
    document.getElementById('uemail').value="";
    document.getElementById('upasswd').value="";
    }
}