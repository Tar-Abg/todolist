// function a(){
   
//     var p = document.getElementsByTagName("h2");  
//     console.log( p.length );  
 

// }
// function b(){
   
//     var p = document.getElementsByTagName("h3");  
//     console.log( p.length );  
 

// }


// function func1() {
//     var vercax = document.getElementById("vercax").value;
//     var veraj = document.getElementById("veraj").value;
//     var neraj = document.getElementById("neraj").value;
//     var nercax = document.getElementById("nercax").value;
//     var ivercax = document.getElementById("ivercax");
//     var iveraj = document.getElementById("iveraj");
//     var ineraj = document.getElementById("ineraj");
//     var inercax = document.getElementById("inercax");

//     var block = document.getElementById("block");

//     ivercax.value = vercax;
//     iveraj.value = veraj;
//     ineraj.value = neraj;
//     inercax.value = nercax;

  
//   block.style.borderRadius = vercax + 'px  ' + veraj + "px " + neraj + "px " + nercax  + "px";
// }




var jobs = [];
var addJob = document.getElementById("addJob");

function displeyBlock(){
    addJob.style.display="block";
}

function displeyNone(){
    var input = document.getElementById("inp").value;
    var text = document.getElementById("text");
    var cont = document.getElementById("container");

    if(input.length >= 5){
        
        addJob.style.display="none";
        jobs.unshift(input);
        document.getElementById("inp").value = "";
        var div = document.createElement("div");
        var p = document.createElement("p");
        p.classList.add("my_classe");
        p.innerHTML =  input +  "<input type='checkbox' id='chekbox'> <button  onclick='del(event)' class='btn close'><i class='fa fa-close'></i></button>  "
        div.appendChild(p);
        var b = document.getElementById("body");
        b.appendChild(div);
     } else {
        text.innerText = "Job most be more than 5 letrs";
        document.getElementById("inp").style.border = "1px solid red"
    }
}


function myFunction() {
     document.getElementById("text").innerHTML = "";
     document.getElementById("inp").style.border = "1px solid black";
}


function del(event){
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
}


