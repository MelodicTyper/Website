
<header>
    <div>
        <h1><span>&lt;</span>MelodicTyper<span>&gt;</span></h1>
    </div>
</header>

<style>
    header {
        display: flex;
        height: 9vh;
        margin: 1vw;
        justify-content: center;
        align-items: center;
    }
    
    @media (min-width: 1023px) {
        header {
            margin-left: 4vw;
            margin-right: 4vw;
        }
    }
    
    header div h1 {
        font-size: 4rem;
        
    }
    @media (max-width: 768px) {
        header div h1 {
            font-size: 3rem;
        }
    }
    span {
        color: var(--color-green-main);
    }
</style>
