import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LoadFile(file: string) {
    document.querySelector("#listDepartment")?.addEventListener("click", (event: any) => {
        const idNav = event.target.getAttribute("data-nav-id")
        if (idNav) {
            const nav = document.querySelector("nav[data-nav='" + idNav + "']")
            if (nav?.getAttribute('close') === "true") {
                nav?.setAttribute("close", "false")
                const height = nav?.scrollHeight
                gsap.to(nav, { height: height })

            }
            else{
                nav?.setAttribute("close", "true")
                gsap.to(nav, { height: 0 })

            }

        }
    })
    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {

            pin: true, // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

        },
    });
    tl.to("section", { opacity: 1, stagger: 0.1 },);
    tl.fromTo("a", { opacity: 0 }, { opacity: 1, stagger: 0.01 }, "-=0.3");
    tl.fromTo("#BannerForm", { opacity: 0 }, { opacity: 1, direction: 0.6 }, "-=0.6");
}