let num1 = document.getElementById("fi")
let num2 = document.getElementById("sec")

let count = 0
let countt = 0

function add1(){
    count += 1
    num1.innerText = count
}

function add11(){
    countt += 1
    num2.innerText = countt
}



function add2(){
    count+= 2
    num1.innerText = count
}

function add22(){
    countt += 2
    num2.innerText = countt
}



function add3(){
    count+= 3
    num1.innerText = count
}

function add33(){
    countt += 3
    num2.innerText = countt
}


function reset1(){
    count = 0
    num1.innerText = count
}

function reset2(){
    countt = 0
    num2.innerText = countt
}