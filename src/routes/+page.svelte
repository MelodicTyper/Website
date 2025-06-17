<script>
    import Header from "$lib/components/Header.svelte";
    import { gsap, ScrollTrigger } from "$lib/scripts/gsap.js";
    /*
    $effect(() => {
      let header = document.querySelector('h2#colorFly');
      let letters = header.textContent.split('');
      header.innerHTML = ""

      let div = document.createElement("div")
      div.classList.add("word")
      letters.forEach((el, index) => {
        if(el === " ") {
            header.appendChild(div)
            div = document.createElement('div')
            div.classList.add('word')
        }
        let span = document.createElement('span');
        span.classList.add('letter')
        span.textContent = el
        div.appendChild(span)
        console.log(el.textContent)
      })

    })*/

    $effect(() => {
        gsap.to(".letter", {
            x: "random(-100, 100, 5)",
            y: "random(-50, -100, 5)",
            rotation: "random(-360, 360, 1)",
            color: "random(['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'])",
            stagger: 0.01,
            scrollTrigger: {
                start: "top -7%",
                end: "+=40%",
                scrub: 0,
            },
        });
    });
</script>

<Header />

<section>
    <div class="center">
        <img src="/icons/MelodicTyper.svg" alt="Musical Typewriter" />
        <h2>I'm an obessively curious creator who likes computers!</h2>
    </div>
</section>

<style>
    div.center {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        gap: 2vw;
        align-items: center;
        justify-content: center;
    }

    div > img {
        display: block;
        width: clamp(150px, 50%, 500px);
    }
    div > h2 {
        text-align: center;
        font-family: Viga, sans-serif;
        font-size: 3rem;
        display: flex;
        flex-wrap: wrap;
        padding: 5vw;
        justify-content: center;
        align-items: center;
        width: clamp(350px, 35vw, 1000px);
    }
    @media (max-width: 1500px) {
        div > h2 {
            font-size: 2.2rem;
        }
    }
</style>
