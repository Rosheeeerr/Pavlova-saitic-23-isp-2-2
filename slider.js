let offset=0;
const sliderLine=document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',function(){
    offset=offset+700;
    if(offset>1400){
        offset=0;
    }
    sliderLine.style.left=-offset+'px';
})

document.querySelector('.slider-prev').addEventListener('click',function(){
    offset=offset-700;
    if(offset<0){
        offset=700;
    }
    sliderLine.style.left=-offset+'px';
})

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}