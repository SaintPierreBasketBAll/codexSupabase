<svelte:options runes={true} />

<script>
const images = [
    { src: 'https://source.unsplash.com/collection/483251/800x600?sig=1', alt: 'Projet 1' },
    { src: 'https://source.unsplash.com/collection/483251/800x600?sig=2', alt: 'Projet 2' },
    { src: 'https://source.unsplash.com/collection/483251/800x600?sig=3', alt: 'Projet 3' },
    { src: 'https://source.unsplash.com/collection/483251/800x600?sig=4', alt: 'Projet 4' },
    { src: 'https://source.unsplash.com/collection/483251/800x600?sig=5', alt: 'Projet 5' },
    { src: 'https://source.unsplash.com/collection/483251/800x600?sig=6', alt: 'Projet 6' }
];
let selected = $state(null);
function open(img) {
    selected = img;
}
function close() {
    selected = null;
}
</script>

<h1>Galerie d'images</h1>
<div class="gallery">
    {#each images as img}
        <img src={img.src} alt={img.alt} on:click={() => open(img)}>
    {/each}
</div>

{#if selected}
<div class="lightbox" on:click={close}>
    <img src={selected.src} alt={selected.alt}>
</div>
{/if}

<style>
.gallery {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 1200px;
    margin: 1rem auto;
}
.gallery img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s;
}
.gallery img:hover {
    transform: scale(1.05);
}
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}
.lightbox img {
    max-width: 90%;
    max-height: 90%;
}
</style>
