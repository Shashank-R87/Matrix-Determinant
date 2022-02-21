const request = require("request-promise")
const cheerio = require("cheerio")
const matrix = require("matrix-js")
const math = require("mathjs")

howEl = document.getElementById("how")
howEl.addEventListener("click",function(){
    window.location.href = "mmul_h.html"
})

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

addEl = document.getElementById("add")
addEl.addEventListener("click",function(){
    window.location.href = "../add/add.html"
})

trEl = document.getElementById("tr")
trEl.addEventListener("click",function(){
    window.location.href = "../tr/tr.html"
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

let calc = document.getElementById("calc");

calc.addEventListener("click", function () {
    matt1 = []
    matt2 = []
    m1 = []
    m2 = []

    for (let i = 0; i < 9; i++) {
        m1.push(parseInt(document.getElementById("t1" + i).value))
        m2.push(parseInt(document.getElementById("t2" + i).value))
        if (m1.length == 3){
            matt1.push(m1)
            matt2.push(m2)
            m1 = []
            m2 = []
        }
    }
    console.log(matt1);
    console.log(matt2);
    Mat1 = matt1
    Mat2 = math.matrix(matt2)
    res = math.multiply(Mat1,Mat2)
    n=0
    res1 = res["_data"]
    console.log(res);
    for (let i = 0; i < 3; i++){
        for (let j  = 0; j<3; j++){
            document.getElementById("t3"+n).innerHTML = res1[i][j]
            n+=1
        }
    }
});
