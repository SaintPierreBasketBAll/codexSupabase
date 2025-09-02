<svelte:options runes={true} />

<section class="hero">
    <h1>Travaux de peinture et revêtement de sols</h1>
    <p><em>Qualité &amp; Savoir-Faire depuis 2013</em></p>
    <a href="/devis" class="btn">Demander un devis</a>
</section>

<section class="services">
    <h2>Nos Services</h2>
    <div class="grid">
        <div>
            <h3>Peinture intérieure &amp; extérieure</h3>
            <p>Des finitions impeccables pour vos murs et façades.</p>
        </div>
        <div>
            <h3>Revêtements de sols</h3>
            <p>Pose de parquet, carrelage et sols souples adaptés à vos besoins.</p>
        </div>
        <div>
            <h3>Revêtements muraux</h3>
            <p>Papiers peints et solutions décoratives pour sublimer vos pièces.</p>
        </div>
    </div>
</section>

<section class="values">
    <div class="grid">
        <div>
            <h3>Expérience</h3>
            <p>Plus de 10 ans au service de vos projets.</p>
        </div>
        <div>
            <h3>Qualité</h3>
            <p>Des matériaux et un savoir-faire professionnels.</p>
        </div>
        <div>
            <h3>Service de Proximité</h3>
            <p>Un artisan à votre écoute sur toute l'île.</p>
        </div>
    </div>
</section>

<style>
.hero {
    background: url('https://source.unsplash.com/1600x600/?paint') center/cover no-repeat;
    color: white;
    text-align: center;
    padding: 4rem 1rem;
}
.hero .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border-radius: 4px;
    transition: background 0.3s;
}
.hero .btn:hover {
    background: var(--accent-color);
}
.services, .values {
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
}
.grid {
    display: grid;
    gap: 1.5rem;
}
@media(min-width: 600px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
