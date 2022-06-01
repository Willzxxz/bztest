let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".sun", 20, { top: 50 }, "-=120")
  .to(".sun", 10, { top: -100 }, "-=65")
  .to(".sun", 20, { width: 1000, height: 1000}, "-=90")
  .to(".sun", 20, { width: 1500, height: 1500}, "-=70")
  // .to(".sun", 20, { top: 30, left: 30}, "-=5")
  .to(".terrain", 20, { y: 420 }, "-=84")
  .to(".floor", 20, { y: 400 }, "-=83.5")
  .to(".mountain", 20, { y: 440 }, "-=84.5")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 30, { top: "0%" }, "-=1")
  
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })

  .to(".section2", 20, { y: 0 }, { y: 0, duration: 20 }, "=0")
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 50 });




let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
