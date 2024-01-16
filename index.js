

gsap.from("#nav",{
    stagger:0.1,
     y: 10,
     duration: 1,
     ease: Power2,
     opacity:0
 
 });
 gsap.from(".anim2",{
     y:50,
     stagger:0.3,
     opacity:0,
     ease: Expo,
     duration: 1,
 
  })

gsap.to(" .motive h3",{
    y:100,
    duration:1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:".motive h3 ",
        scroller:"body",
        //markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub: 2
    }

});






gsap.from(" #pictures ",{
    y:100,
    duration:3,
    stagger:0.3,
    scrollTrigger:{
        trigger:" #pictures",
        scroller:"body",
        //markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub: 2
    }
});

gsap.from(" #b-txt",{
    
    y:100,
    duration:2,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#b-txt",
        scroller:"body",
        //markers:true,
        start:"top 90%",
        end:"top 85%",
        scrub: 1
    }

});


Shery.textAnimate("#heading h1", {
    style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
  
  });
/*Shery.imageEffect(".img-text img",{
    style:2,
    config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":11.58},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500095372525083},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
  });*/

  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let video = document.querySelector('#video');
let button = document.querySelector('#btun');


button.addEventListener("click", () => {
    video.style.display = "block";
   
});
/*gsap.from("#visit h3", {duration: 3, text: "lets get started"})
gsap.to("#visit h3", {duration: 3, text: "Visiting Our Gallery"})*/