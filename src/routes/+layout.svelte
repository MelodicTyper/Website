<script>
    
    let { children } = $props();
</script>
<div class ="outer">
    <div class="gap">
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
        
        background: #222831;
        color: white;
        /*outline: 1px solid red;*/
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
        height: 300vh;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .gap {
        margin-left: clamp(15px, 12vw, 750px);
        margin-right: clamp(15px, 12vw, 750px);
        
        
    }
    @media (max-width: 1023px) {
        .gap {
            margin-right: clamp(15px, 5vw, 200px);
            margin-left: clamp(15px, 5vw, 200px);
        }
        :root {
            font-size: 14px;
        }
    }
    @media (min-width: 1680px) {
        .gap {
            margin-right: clamp(15px, 15vw, 2500px);
            margin-left: clamp(15px, 15vw, 2500px);
        }
        :root {
            font-size: 18px;
        }
    }
</style>