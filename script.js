 var crsr =  document.querySelector("#cursor")
  var crsrblr =  document.querySelector("#cursor-blur")
 document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
     crsrblr.style.left = (dets.x - 150) + "px";
    crsrblr.style.top = (dets.y - 150) + "px";
})

var h4all =document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
        elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

var elems = document.querySelectorAll("#page4 .elem");

elems.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});


gsap.to("#nav", {
    backgroundColor : "black",
    height :"110px",
    duration : 1,
    scrollTrigger:{
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1,
    }
})

gsap.to("#main",{
    backgroundColor :  "black",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start :"top -25%",
        end : "top -70%",
          scrub: true,    
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 58%",
       scrub: 1

    }
})


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.5,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 58%",
       scrub: 1
    }
})

gsap.from("#colone1",{
    y:-100,
    x : -100,
    scrollTrigger:{
        trigger:"#colone1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
       scrub: 2
    }
})
 
gsap.from("#colone2",{
    y:-100,
    x : -100,
    scrollTrigger:{
        trigger:"#colone2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
       scrub: 2
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 79%",
        end:"top 70%",
        scrub:2
    }
})