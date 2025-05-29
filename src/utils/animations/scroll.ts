import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function scrollToID(id: string, offsetY: number = 80) {
  const element = document.getElementById(id);

  if (element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY },
      ease: "power2.out",
    });
  }
}
