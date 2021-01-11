import "./styles/styles.css";

import gsap from "gsap";
import $ from "jquery";


//introLoad
$(function(){
    
    
    $('body').css("display","block");
    console.log('$.lodded');
    // gsap.from("body", {duration: 1, opacity: 0});
    gsap.from(".hero", {duration:.6, opacity: 0});
    
    ///navbar
    gsap.from(".navLinks", {duration:.6,delay:0.8,opacity:0,});
    gsap.from(".navIcon", {duration:.6,delay:0.8,opacity:0,})
    
    
    gsap.from(".videoHolder", {duration:1.8, delay:1.6,opacity:0, y:"+=100",ease: "expo.out"});
    //icon and right side
    gsap.from(".mainIcon", {duration:1.2, delay:0.8,opacity:0, x:"-=100",ease: "expo.out"});
    gsap.from(".name", {duration:.8, delay:1,opacity:0, x:"+=50",ease: "expo.out",});
    gsap.from(".subName", {duration:.6, delay:1.4,opacity:0, x:"+=50",ease: "expo.out"});
    gsap.from(".mainDescr", {duration:1.6, delay:2,opacity:0, ease: "expo.out"});

    gsap.from(".downBtn1", {duration:.8, delay:2.6,opacity:0, scale:0.8});
    gsap.from(".downBtn2", {duration:.8, delay:2.6,opacity:0, scale:0.8});
    
})

