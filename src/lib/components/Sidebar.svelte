<script>
    import { innerWidth } from "svelte/reactivity/window";
    import { fade, scale } from "svelte/transition";
    
    let isMobile = $state(false);
    let activeItem = $state(-1);

    $inspect(activeItem)
    $effect(() => {
        isMobile = innerWidth.current && innerWidth.current <= 992;
    });
    
    let opacity = $state(0);
    $effect(() => {
      opacity = 1;
    })

    function handleClick(id) {
       console.log("hi")
        if (isMobile) {
            activeItem = id;
            console.log("h")
        }
    }

    function handleMouseEnter(id) {
        if (!isMobile) {
            activeItem = id;
        }
    }

    function handleMouseLeave() {
        if (!isMobile) {
            activeItem = -1;
        }
    }
</script>

{#snippet item(id, imgSrc, tooltip)}
    <li>
        <button
            aria-label=tooltip
            onmouseenter={() => handleMouseEnter(id)}
            onmouseleave={handleMouseLeave}
            onclick={() => handleClick(id)}>
        
        <span class="icon" class:active={activeItem === id}>
            <img src={"/icons/" + imgSrc} alt=tooltip/>
        </span>
        </button>
        {#if activeItem === id}
            <div
                class="tooltip"
                class:mobile={isMobile}
                transition:fade={{ duration: 200 }}
            >
                <span
                    transition:scale={{ duration: 150, start: 0.8 }}
                    >{tooltip}</span
                >
            </div>
        {/if}
    </li>
{/snippet}


<div class="sidebar" style:opacity={opacity} class:mobile={isMobile}>
    <menu class="content">
        <ul>
            {@render item(1, "home.svg", "Home")}
            {@render item(2, "blog.svg", "Blog")}
            {@render item(3, "projects.svg", "Projects")}
            {@render item(4, "contact.svg", "Contact")}
        </ul>
    </menu>
</div>

<style>
    .sidebar {
        position: fixed;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #262b33;
        border-radius: 15px;
        padding: 7px 7px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        z-index: 100;
        transition: all 0.3s ease;
        transition: opacity 1s ease-out;
        border: 1px solid #3a3f47;
        opacity: 0;
        
    }
    
    .sidebar.mobile {
        transition: all 0.3s ease;
        transition: opacity 0.5s ease-out;
        top: auto;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: row;
        padding: 10px 15px;
        
    }

    .content {
        display: flex;
        flex-direction: column;
    }

    .sidebar.mobile .content {
        flex-direction: row;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .sidebar.mobile ul {
        flex-direction: row;
        gap: 10px;
    }

    li {
        position: relative;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: var(--color-green-main);
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        transition: all 0.2s ease;
        cursor: pointer;
        font-family: "Viga", sans-serif;
        position: relative;
        z-index: 1;
    }
    
    .sidebar.mobile .icon {
        width: 35px;
        height: 35px;
    }

    span:hover,
    span.active {
        background-color: var(--color-green-secondary);
        transform: scale(1.1);
        box-shadow: 0 0 8px rgba(102, 151, 111, 0.6);
    }
    
    span:hover img,span.active img {
        filter:invert(0.75);
    }

    .tooltip {
        position: absolute;
        left: 55px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #262b33;
        padding: 5px 12px;
        border-radius: 8px;
        white-space: nowrap;
        z-index: 200;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        border: 1px solid #3a3f47;
    }

    .tooltip.mobile {
        left: 50%;
        top: -45px;
        transform: translateX(-50%);
    }

    .tooltip::before {
        content: "";
        position: absolute;
        left: -5px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        background-color: #262b33;
        border-left: 1px solid #3a3f47;
        border-bottom: 1px solid #3a3f47;
    }

    .tooltip.mobile::before {
        left: 50%;
        top: auto;
        bottom: -5px;
        transform: translateX(-50%) rotate(45deg);
        border: none;
        border-right: 1px solid #3a3f47;
        border-bottom: 1px solid #3a3f47;
    }

    .tooltip span {
        background-color: transparent;
        font-size: 0.9rem;
        color: white;
        width: auto;
        height: auto;
        font-weight: bold;
    }

    .tooltip span:hover {
        background-color: transparent;
        transform: none;
        color: white;
    }

    /* Mobile-specific styles for the sidebar itself are already defined above */
</style>
