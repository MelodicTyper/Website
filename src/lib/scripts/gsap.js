import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap } from 'gsap';
export { ScrollTrigger };