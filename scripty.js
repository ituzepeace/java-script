function MyExternalfunction(){
   let x = document.getElementById("hii");
   x.style = "background-color:green";
   x.style = "font-size:30px";
}



function performAddition() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    var sub = num1 - num2
    document.getElementById("result").innerHTML = "Result: " + result;
    document.getElementById('sub').innerHTML = "Our sub is" + sub;
    
}


