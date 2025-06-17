<script>
    import { scale } from "svelte/transition";
    import { innerWidth, innerHeight } from "svelte/reactivity/window";

    let mobileNavOpen = $state(false);
</script>

<header>
    <div>
        <h1>Melodic Typer</h1>
    </div>

    <div>
        <menu>
            {#if innerWidth.current && innerWidth.current > 768}
                <ul>
                    <li>Posts</li>
                    <li>Youtube</li>
                    <li>Contact</li>
                </ul>
            {:else}
                <button onclick={() => (mobileNavOpen = !mobileNavOpen)}>
                    {#if !mobileNavOpen}
                        <img
                            in:scale
                            style="will-change:transform"
                            src="/icons/navOpener.svg"
                            alt="Navigation Open"
                        />
                    {:else}
                        <img
                            in:scale
                            style="will-change:transform"
                            src="/icons/navCloser.svg"
                            alt="Navigation Close"
                        />
                    {/if}
                </button>
            {/if}
        </menu>
    </div>
</header>

<style>
    header {
        display: flex;
        height: 9vh;
        margin-top: 10px;
        justify-content: space-between;
        align-items: center;
    }
    header div {
        display: flex;
        gap: clamp(2px, 2vw, 5px);
        margin: 1vw;
    }
    @media (min-width: 1023px) {
        header {
            margin-left: 4vw;
            margin-right: 4w;
        }
    }
    header div h1 {
        font-size: 2rem;
    }
    menu > ul {
        display: flex;
        gap: clamp(0px, 2vw, 10px);
    }
    menu > ul > li {
        list-style: none;
        text-decoration: underline;
        text-decoration-color: var(--color-green-main);
        text-decoration-thickness: 2px;
        font-size: 1rem;
    }
</style>
