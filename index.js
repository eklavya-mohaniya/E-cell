let grid1 = document.getElementById("grid1")
let grid2 = document.getElementById("grid2")
let grid3 = document.getElementById("grid3")
let grid4 = document.getElementById("grid4")
let grid5 = document.getElementById("grid5")
let grid6 = document.getElementById("grid6")
let grid7 = document.getElementById("grid7")
let grid8 = document.getElementById("grid8")
let grid9 = document.getElementById("grid9")

let arr = [];


grid1.addEventListener('click' , function(){
    grid1.style.backgroundColor = "#7A0000";
    arr.push("grid1");
});
grid2.addEventListener('click' , function(){
    grid2.style.backgroundColor = "#7A0000";
    arr.push("grid2");

});

grid3.addEventListener('click' , function(){
    grid3.style.backgroundColor = "#7A0000";
    arr.push("grid3");

});

grid4.addEventListener('click' , function(){
    grid4.style.backgroundColor = "#7A0000";
    arr.push("grid4");

});

grid5.addEventListener('click' , function(){
    grid5.style.backgroundColor = "#7A0000";
    arr.push("grid5");

});

grid6.addEventListener('click' , function(){
    grid6.style.backgroundColor = "#7A0000";
    arr.push("grid6");

});

grid7.addEventListener('click' , function(){
    grid7.style.backgroundColor = "#7A0000";
    arr.push("grid7");

});
grid8.addEventListener('click' , function(){
    grid8.style.backgroundColor = "#7A0000";
    arr.push("grid8");

});

grid9.addEventListener('click' ,  function(){
    grid9.style.backgroundColor = "#7A0000";
    arr.push("grid9");

    for(let i=0;i<arr.length;i++){
        setTimeout(function(){let x=document.getElementById(arr[i]);x.style.backgroundColor = "#00407A";},500*i);
        
        
    }
} )


