function Agecal()
{
    var age1=document.getElementById('age').value;
    // console.log(age1);
    var weight1=document.getElementById('weight').value;
    //   console.log(weight1);
     
    if(age1>=5 && age1<=7)
    {
       if(weight1>=15 && weight1<=20 )
       {
        //  alert("keep it up!");
          document.getElementById("p1").innerHTML="Keep it up !";

       }
        else if(weight1>=20)
       {

        document.getElementById("p1").innerHTML="You are overweight";
       }
       else
       {
        document.getElementById("p1").innerHTML="You are Underweight";
       }
       
    }
    else if(age1>=8 && age1<=10)
    { 
        if(weight1>=21 && weight1<=25 )
        {
         //  alert("keep it up!");
           document.getElementById("p1").innerHTML="Keep it up !";
 
        }
         else if(weight1>=25)
        {
 
         document.getElementById("p1").innerHTML="Yo are overweight";
        }
        else
        {
         document.getElementById("p1").innerHTML="You are Underweight";
        }


    }
   else if(age1>=11 && age1<=15)
    { 
        if(weight1>=26 && weight1<=30 )
        {
         //  alert("keep it up!");
           document.getElementById("p1").innerHTML="Keep it up !";
 
        }
         else if(weight1>=30)
        {
 
         document.getElementById("p1").innerHTML="You are overweight";
        }
        else
        {
         document.getElementById("p1").innerHTML="You are Underweight";
        }


    }

   else if(age1>=16 && age1<=20)
    { 
        if(weight1>=31 && weight1<=40 )
        {
         //  alert("keep it up!");
           document.getElementById("p1").innerHTML="Keep it up !";
 
        }
         else if(weight1>=40)
        {
 
         document.getElementById("p1").innerHTML="You are overweight";
        }
        else
        {
         document.getElementById("p1").innerHTML=" You are  Underweight";
        }
    }
     
    else
    {
        document.getElementById("p1").innerHTML=" out of range";

    }


       



}