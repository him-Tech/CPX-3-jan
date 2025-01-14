// initial-pos

gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  setTimeout(() => {
    const initialelement = document.querySelector(".initial-pos");
    const initialPos = initialelement.getBoundingClientRect();

    const finalelement = document.querySelector(".final-pos");
    const finalPos = finalelement.getBoundingClientRect();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "top -500",
        scrub: 1,
        pin: "#nav-hero-wrapper",
        pinSpacing: false,
      },
    });
    gsap.set(".initial-pos", { opacity: 0 });
    gsap.set("body", { overflow: "auto" });
    tl.fromTo(
      ".white-moving-object",
      {
        width: initialPos.width + "px",
        height: initialPos.height + "px",
        left: initialPos.left + "px",
        top: initialPos.top + "px",
        opacity: 1,
      },
      {
        width: finalPos.width + "px",
        height: finalPos.height + "px",
        left: finalPos.left + "px",
        top: finalPos.top + "px",
        opacity: 1,
      },
      "same"
    )
      .fromTo(
        ".orange-moving-object",
        {
          width: initialPos.width + "px",
          height: initialPos.height + "px",
          left: initialPos.left + "px",
          top: initialPos.top + "px",
          opacity: 1,
        },
        {
          width: finalPos.width + "px",
          height: finalPos.height + "px",
          left: finalPos.left + "px",
          top: finalPos.top + "px",
          opacity: 1,
        },
        "same"
      )
      .fromTo(
        ".orange-moving-object",
        {
          zIndex: 1004,
        },
        {
          zIndex: 1006,
          delay: -0.4,
        }
      )
      .fromTo(
        ".fake-activity",
        {
          width: "40px",
          height: "40px",
        },
        {
          width: "100px",
          height: "100px",
        }
      );
  }, 1000);
});

// hero-qx-img

gsap.fromTo(
  ".hero-qx-img",
  {
    opacity: 0,
    y: 500,
    ease: "power4.out",
  },
  {
    opacity: 1,
    duration: 1,
    y: 0,
    ease: "power4.out",
  }
);

// hero-main-right-text-mobile
gsap.fromTo(
  ".hero-main-right-text-mobile",
  {
    opacity: 0,
    y: 200,
    ease: "power4.out",
  },
  {
    opacity: 1,
    duration: 1,
    y: 0,
    ease: "power4.out",
    stagger: 0.04,
  }
);

// hero-main-right-text-desktop
gsap.fromTo(
  ".hero-main-right-text-desktop",
  {
    opacity: 0,
    y: 200,
    ease: "power4.out",
  },
  {
    opacity: 1,
    duration: 1,
    y: 0,
    ease: "power4.out",
    stagger: 0.04,
  }
);
// quality-text-animation
gsap.fromTo(
  ".quality-text-animation",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    duration: 1,
    delay: 0.2,
    y: 0,
    ease: "power4.out",
  }
);

// HERO OVEL IMAGE ANIMATION

gsap.fromTo(
  ".hero-ovel-image",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    duration: 1,
    delay: 0.2,
    y: 0,
    ease: "power4.out",
  }
);
// explore-btn-anim

gsap.fromTo(
  ".explore-btn-anim",
  {
    opacity: 0,
    y: 100,
    ease: "power4.out",
  },
  {
    opacity: 1,
    duration: 1,
    delay: 0.2,
    y: 0,
    ease: "power4.out",
  }
);

// SCROLLTRIGGER ANIMATIONS

// home-image-animation

gsap.fromTo(
  ".home-image-animation",
  {
    scale: 1.3,
    y: 100,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".home-image-animation",
      start: "top bottom",
      end: "bottom 10%",
      scrub: 2,
    },
  }
);

// services-main-text

gsap.fromTo(
  ".services-main-text span",
  {
    y: 100,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".services-main-text",
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: 2,
    },
  }
);
// service-para-text
gsap.fromTo(
  ".service-para-text span",
  {
    y: 100,
    opacity: 0,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".service-para-text",
      start: "bottom bottom",
      end: "bottom 80%",
      scrub: 2,
    },
  }
);

// service-box-anim
const serviceBoxes = document.querySelectorAll(".service-box-anim");
for (let index = 0; index < serviceBoxes.length; index++) {
  gsap.fromTo(
    `.service-box-${index + 1}`,
    {
      y: 50,
      opacity: 0,
      ease: "power4.out",
    },
    {
      scale: 1,
      y: 0,
      opacity: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.service-box-${index + 1}`,
        start: "center 80%",
        end: "center 50%",
        scrub: 1,
      },
    }
  );
}

// portfolio main text

gsap.fromTo(
  ".portfolio-text span",
  {
    y: 100,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".portfolio-text",
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: 2,
    },
  }
);
// portfolio-para-text
gsap.fromTo(
  ".portfolio-para-text span",
  {
    y: 100,
    opacity: 0,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".portfolio-para-text",
      start: "bottom bottom",
      end: "bottom 80%",
      scrub: 2,
    },
  }
);

// project-mind-text
gsap.fromTo(
  ".project-mind-text span",
  {
    y: 100,
    opacity: 0,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".project-mind-text",
      start: "bottom bottom",
      end: "bottom 80%",
      scrub: 2,
    },
  }
);
// no-matter-text

gsap.fromTo(
  ".no-matter-text span",
  {
    y: 100,
    opacity: 0,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".no-matter-text",
      start: "bottom 80%",
      end: "bottom 70%",
      scrub: 2,
    },
  }
);

// get-in-touch-btn-wrapper
gsap.fromTo(
  ".get-in-touch-btn-wrapper button",
  {
    y: 100,
    opacity: 0,
    ease: "power4.out",
  },
  {
    scale: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".get-in-touch-btn-wrapper",
      start: "bottom 80%",
      end: "bottom 70%",
      scrub: 2,
    },
  }
);
