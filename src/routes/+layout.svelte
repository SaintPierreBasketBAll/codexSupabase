<svelte:options runes={true} />

<script>
let showMenu = $state(false);
function toggleMenu() {
    showMenu = !showMenu;
}
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@600&display=swap">
</svelte:head>

<header>
    <div class="container">
        <div class="logo"><a href="/">Manu Peinture Sol</a></div>
        <nav class:open={showMenu}>
            <a href="/">Accueil</a>
            <a href="/galerie">Galerie d'images</a>
            <a href="/devis">Devis</a>
        </nav>
        <button class="menu-toggle" on:click={toggleMenu}>☰</button>
    </div>
</header>

<main>
    <slot />
</main>

<footer>
    <div class="container">
        <p>21 Chemin Kervéguen, 97480 Saint-Joseph</p>
        <p>Tél: 000000000 | Email: contact@example.com</p>
        <small>SIRET 79741277200015, Artisan enregistré</small>
    </div>
</footer>

<style global>
    :root {
        --primary-color: #1e88e5;
        --accent-color: #ff9800;
        --text-color: #333;
        --bg-color: #fff;
    }
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background: var(--bg-color);
        color: var(--text-color);
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
    }
    a {
        color: var(--primary-color);
        text-decoration: none;
    }
    header {
        position: sticky;
        top: 0;
        background: white;
        border-bottom: 1px solid #ddd;
        z-index: 10;
    }
    header .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0.5rem 1rem;
    }
    nav {
        display: flex;
        gap: 1rem;
    }
    .menu-toggle {
        display: none;
        font-size: 1.5rem;
        background: none;
        border: none;
    }
    footer {
        background: #f5f5f5;
        padding: 1rem 0;
        font-size: 0.875rem;
        color: #555;
    }
    footer .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        text-align: center;
    }
    @media (max-width: 600px) {
        nav {
            display: none;
            flex-direction: column;
            gap: 0.5rem;
            padding: 1rem 0;
        }
        nav.open {
            display: flex;
        }
        .menu-toggle {
            display: block;
        }
    }
</style>
