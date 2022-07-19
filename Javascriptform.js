// function Addproduct()
// {
//   var id1 =document.getElementById('pid').value;
//   var name=document.getElementById('pname').value;
//   var price=document.getElementById('pprice').value;
//   var row=1;


//  var display= document.getElementById('tbl1');
//  var newrow= display.insertRow(row);

//  var cell1=newrow.insertCell(0);
//  var cell2=newrow.insertCell(1);
//  var cell3=newrow.insertCell(2);

//  cell1.innerHTML=id1;
//  cell2.innerHTML=name;
//  cell3.innerHTML=price;
//  row++; 

// }

const arr=[];
   function Addproduct()
   {
    var id1 =document.getElementById('pid').value;
    var name=document.getElementById('pname').value;
    var price=document.getElementById('pprice').value;

    arr.push({Pid:id1,Pname:name,Pprice:price});
    

    var text = "<table ><tr><th>Product id</th> <th>Product Name</th><th>Product Price</th></tr>";

    for (var i = 0; i < arr.length; i++) {
     text += "<tr><td>" + arr[i].Pid + "</td><td>" + arr[i].Pname+ "</td><td>" + arr[i].Pprice+ "</td><tr>";
     }
   text += "</table>";
    // console(text);
    document.getElementById('DivTable').innerHTML=text;
    }

