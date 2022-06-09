$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX - 10,
        top: e.pageY - 10
      });
    })
  });

var modalImg = document.querySelector('.modal-overlay-img');
var modal = document.querySelector('.modal')
var modalOverlay = document.querySelector('.modal-overlay');
var app = document.querySelector('.app');
var navTitletexts = document.querySelectorAll('.nav-title-text')
setTimeout(()=>{
    modalImg.style.display = 'block';
},1000)
setTimeout(()=>{
    modal.style.display = 'none';
    modalImg.style.display = 'none';
    navTitletexts.forEach((navTitletext)=>{
        navTitletext.style.animation = 'fadeout linear 0.5s';
    })
},3000)
var textAb1 = document.querySelector('.textAbout-1');
var textAb2 = document.querySelector('.textAbout-2');
setTimeout(()=>{
    textAb1.style.display = 'none';
    textAb2.style.opacity = '1';
    textAb2.style.animation = 'textAb2 linear 0.5s';
},2400);
var footerAbout = document.querySelector('.fotterAbout-text');
var footerAbouttext = document.querySelector('.fotterAbout-text-content').textContent;
var arrayFooterAbtexts = footerAbouttext.split("");
document.querySelector('.fotterAbout-text-content').textContent = "";

for(var i=0;i<arrayFooterAbtexts.length;i++){
    footerAbout.innerHTML += "<a href=/html/index.html class=fotterAbout-text-content>"+ arrayFooterAbtexts[i] +"</a>"
}

let char = 0;
let timer = setInterval(() => {
    const span = document.querySelectorAll('.fotterAbout-text-content')[char];
    span.classList.add('fade');
    char++;
    if(char > arrayFooterAbtexts.length){
        completeAbout();
        return;
    }
}, 20);
function completeAbout(){
    clearInterval(timer);
    timer = null;
}
var textAbchild = document.querySelectorAll('.bannerAbout-hold-text-detail-child');
setTimeout(() => {
    textAbchild.forEach((x)=>{
        x.style.fontWeight = '800';
    })
}, 5800);

