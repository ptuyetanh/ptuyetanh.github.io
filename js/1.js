document.addEventListener('DOMContentLoaded',function(){
    var icon1 = document.querySelectorAll('.div1');
    var slides = document.querySelectorAll('.slide1');
    var time = setInterval(function(){
        autoload();
    },3000);
    for (var i = 0; i < icon1.length; i++) {
        icon1[i].onclick = function(){
            clearInterval(time);
            for (var a = 0; a < icon1.length; a++) {
                icon1[a].classList.remove('active');              
            }
            this.classList.add('active');
            var div1active = this;
            var positionIcon = 0;
            for (positionIcon = 0; div1active = div1active.previousElementSibling; positionIcon++) { }
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                
            }
            slides[positionIcon].classList.add('active');
        };   
    }
    function autoload(){
        // console.log("jdhsakj");
        var positionslide = 0;
        var slideNow = document.querySelector(".slide1.active");
        // console.log(slideNow.previousElementSibling);
        for (positionslide = 0 ;slideNow = slideNow.previousElementSibling ;positionslide++) {}
        //check điều kiện slide cuối cùng

        if(positionslide < (slides.length -1)){
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                icon1[i].classList.remove('active');
            }
            icon1[positionslide].nextElementSibling.classList.add('active');
            slides[positionslide].nextElementSibling.classList.add('active');
        }else{
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                icon1[i].classList.remove('active');
            }
            icon1[0].classList.add('active');
            slides[0].classList.add('active');
        }
    }
})