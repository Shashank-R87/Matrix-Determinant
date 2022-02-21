const request = require("request-promise")
const cheerio = require("cheerio")

homeEl = document.getElementById("home")
homeEl.addEventListener("click",function(){
    window.location.href = "../index.html"
})

addEl = document.getElementById("add")
addEl.addEventListener("click",function(){
    window.location.href = "../add/add.html"
})

smulEl = document.getElementById("smul")
smulEl.addEventListener("click",function(){
    window.location.href = "../smul/smul.html"
})

mmulEl = document.getElementById("mmul")
mmulEl.addEventListener("click",function(){
    window.location.href = "../mmul/mmul.html"
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

let calc = document.getElementById("calc")

calc.addEventListener("click", function () {
    matt1 = []
    matt2 = []
    m1 = []
    m2 = []

    for (let i = 0; i < 9; i++) {
        m1.push(document.getElementById("t1" + i).value)
        m2.push(document.getElementById("t2" + i).value)
        if (i === 2){
            matt1.push(m1)
            matt2.push(m2)
            m1 = []
            m2 = []
        }
        if (i === 5){
            matt1.push(m1)
            matt2.push(m2)
            m1 = []
            m2 = []
        }
        if (i === 8){
            matt1.push(m1)
            matt2.push(m2)
            m1 = []
            m2 = []
        }
        
    }

    (async()=> {
        const BASE_URL = `https://mat-det.herokuapp.com/sub/${matt1}/${matt2}`;
        const response = await request({
            uri: BASE_URL,
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,ta;q=0.6"
            },
            gzip: true
        });
        let $ = cheerio.load(response);
        let data_1 = $("div[class='data_container'] > p").text();
        console.log(data_1);
        const array = JSON.parse(data_1.replace(/'/g, '"')) // Array.
        console.log(array)
        
        for (let i = 0; i < 9; i++){
            document.getElementById("t3"+i).innerHTML = array[i]
        }
    })();
})