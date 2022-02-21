const matrix = require("matrix-js")

homeEl = document.getElementById("home")
homeEl.addEventListener("click",function(){
    window.location.href = "../index.html"
})

subEl = document.getElementById("sub")
subEl.addEventListener("click",function(){
    window.location.href = "../sub/sub.html"
})

smulEl = document.getElementById("smul")
smulEl.addEventListener("click",function(){
    window.location.href = "../smul/smul.html"
})

mmulEl = document.getElementById("mmul")
mmulEl.addEventListener("click",function(){
    window.location.href = "../mmul/mmul.html"
})

addEl = document.getElementById("add")
addEl.addEventListener("click",function(){
    window.location.href = "../add/add.html"
})

skewEl = document.getElementById("skew")
skewEl.addEventListener("click",function(){
    window.location.href = "../skew/skew.html"
})

invEl = document.getElementById("inv")
invEl.addEventListener("click",function(){
    window.location.href = "../inv/inv.html"
})

detEl = document.getElementById("det")
detEl.addEventListener("click",function(){
    window.location.href = "../det/det.html"
})

let calc = document.getElementById("calc")

calc.addEventListener("click", function () {
    matt1 = []
    m1 = []

    for (let i = 0; i < 9; i++) {
        m1.push(parseInt(document.getElementById("t1" + i).value))
        if (m1.length === 3){
            matt1.push(m1)
            m1 = []
        }

    }
    console.log(matt1);
    Mat1 = matrix(matt1)
    res = Mat1.trans()
    n = 0
    for (let i = 0; i < 3; i++){
        for (let j  = 0; j<3; j++){
            document.getElementById("t3"+n).innerHTML = res[i][j]
            n+=1
        }
    }
}
);