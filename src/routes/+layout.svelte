<script>
    import Sidebar from "$lib/components/Sidebar.svelte";

    let { children } = $props();
    
</script>
<div class="outer">
    <Sidebar />
    <div class="gap" >
        {@render children?.()}
    </div>
</div>

<style>
    /* CSS RESET */
    @font-face {
        font-family: Lato;
        src: url('/fonts/Lato/Lato-Regular.ttf') format('truetype');
        display: swap;
    }
    @font-face {
        font-family: Luckiest Guy;
        src: url('/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf') format('truetype');
        display: swap;
    }
    @font-face {
        font-family: Viga;
        src: url('/fonts/Viga/Viga-Regular.ttf') format('truetype');
        display: swap;
    }

    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Lato, sans-serif;
        color: white;
        /*outline: 1px solid red;*/
    }

    :global(html, body) {
        height: 100%;
        overflow: hidden;
        background: #222831;
        color: white;
        
    }
    :global(button) {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }


    :root {
        --color-green-main: #66976F;
        --color-green-secondary: rgb(233,255,212);
        --color-gray: #D8D2C2;
    }
    .outer {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        background: #222831;
        position: relative;
    }
    .gap {
        margin-left: clamp(80px, 12vw, 750px);
        margin-right: clamp(15px, 12vw, 750px);
        background: #222831;
        min-height: 100%;
        padding-bottom: 2vh;
        
    }
    
    @media (max-width: 1068px) {
        .gap {
            margin-right: clamp(15px, 10vw, 200px);
            margin-left: clamp(15px, 10vw, 200px);
        }
        :root {
            font-size: 14px;
        }
    }
    @media (min-width: 1500px) {
        .gap {
            margin-right: clamp(15px, 15vw, 2500px);
            margin-left: clamp(75px, 15vw, 2500px);
        }
        :root {
            font-size: 18px;
        }
    }

    /* Mobile styles handled via .gap.mobile class */
</style>
