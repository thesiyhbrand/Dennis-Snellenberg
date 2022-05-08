///// Gasp ////--

gsap.to("#denis", {
    scrollTrigger:{
        trigger: "#back",
        start: "50% 50%",
        end: "150% 150%",
        scrub: 3,
        // markers: true
    },
    x: 800,
    duration: 20,
})

gsap.from("#navi", {
    scrollTrigger:{
        trigger: "#back",
        start: "50% 50%",
        end: "150% 150%",
        scrub: 2,
        // markers: true
    },
    y:20,
    opacity: 0,
    duration: 1

})

gsap.to("#freelance i", {
    scrollTrigger:{
        trigger: "#back",
        start: "50% 45%",
        end: "60% 60%",
        scrub: 2,
        // markers: true
    },
    rotate: "25deg",
    duration: 1

})

gsap.from("#helpingbrand h1", {
    scrollTrigger:{
        trigger: "#one",
        start: "20% 80%",
        end: "50% 70%",
        scrub: 2,
        // markers: true
    },
    y: 20,
    opacity: 0,
    duration: 1

})

gsap.from("#helpingbrand p", {
    scrollTrigger:{
        trigger: "#one",
        start: "20% 80%",
        end: "50% 70%",
        scrub: 2,
        // markers: true
    },
    y: 20,
    opacity: 0,
    duration: 1

})

gsap.from(".slideshow1", {
    scrollTrigger:{
        trigger: "#three",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    x: -200,
    duration: 1

})

gsap.from(".slideshow2", {
    scrollTrigger:{
        trigger: "#three",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    x: 150,
    duration: 1

})

gsap.from("#getintouch", {
    scrollTrigger:{
        trigger: "#four",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    x: -150,
    duration: 1

})




















///////add Event Listner/////------

window.addEventListener("mousemove", function(dets){
    document.querySelector("#slidephoto").style.top=`${dets.clientY}px`
    document.querySelector("#slidephoto").style.left=`${dets.clientX}px`
    document.querySelector("#slidephoto").style.transform =`translate(${-dets.clientX*0.21}px, ${-dets.clientY*0.7}px)`
    document.querySelector("#slidephoto").style.cursor = "pointer"
});


document.querySelectorAll("#work")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector("#scir1").style.display = "initial"
    })
})

document.querySelectorAll("#work")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(){
        document.querySelector("#scir1").style.display = "none"
    })
})

document.querySelectorAll("#about")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector("#scir2").style.display = "initial"
    })
})

document.querySelectorAll("#about")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(){
        document.querySelector("#scir2").style.display = "none"
    })
})

document.querySelectorAll("#contact")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector("#scir3").style.display = "initial"
    })
})

document.querySelectorAll("#contact")
.forEach(function(elem){
    elem.addEventListener("mouseout", function(){
        document.querySelector("#scir3").style.display = "none"
    })
})

document.querySelector("#aboutme")
.addEventListener("mousemove", function(dets){
    document.querySelector("#aboutme").style.transform = `translate(${dets.clientX*0.02}px, ${dets.clientY*0.02}px)`
    document.querySelector("#aboutme").style.backgroundColor = "blue"
    document.querySelector("#aboutme").style.cursor = "pointer"
})

document.querySelector("#aboutme")
.addEventListener("mouseleave", function(){
    document.querySelector("#aboutme").style.transform = `translate(0px, 0px)`
    document.querySelector("#aboutme").style.cursor = "pointer"
    document.querySelector("#aboutme").style.backgroundColor = "#333"

})


document.querySelector("#chainn")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "0px"
    document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#chainn")
.addEventListener("mouseleave", function(){
    document.querySelector("#chainn").style.color = "initial"
})

document.querySelector("#aty")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-120%"
    document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#aty")
.addEventListener("mouseleave", function(){
    document.querySelector("#aty").style.color = "initial"
})

document.querySelector("#mic")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-240%"
    document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#mic")
.addEventListener("mouseleave", function(){
    document.querySelector("#mic").style.color = "initial"
})

document.querySelector("#tapso")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-360%"
    document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#tapso")
.addEventListener("mouseleave", function(){
    document.querySelector("#tapso").style.color = "initial"
})

document.querySelector("#eff")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephoto").style.display = "initial"
    document.querySelector("#slidephoto").style.opacity = 1
    document.querySelector("#slidephoto").style.scale = 1
})

document.querySelector("#eff")
.addEventListener("mouseleave", function(){
    document.querySelector("#slidephoto").style.display = "none"
    document.querySelector("#slidephoto").style.opacity = 1
    document.querySelector("#slidephoto").style.scale = 0

})


document.querySelector("#btnsm")
.addEventListener("mousemove", function(){
    document.querySelector("#btnsm").style.backgroundColor = "blue"
    document.querySelector("#btnsm").style.cursor = "pointer"
    document.querySelector("#btnsm h1").style.color = "white"
})

document.querySelector("#btnsm")
.addEventListener("mouseleave", function(){
    document.querySelector("#btnsm").style.cursor = "pointer"
    document.querySelector("#btnsm").style.backgroundColor = "initial"
    document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"

})

document.querySelector("#navi")
.addEventListener("click", function(){
    document.querySelector("#menubar").style.left = "50%"
})

document.querySelector("#close")
.addEventListener("click", function(){
    document.querySelector("#menubar").style.left = "150%"
})
