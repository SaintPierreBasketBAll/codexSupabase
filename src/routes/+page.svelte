<svelte:options runes={true} />

<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import { reveal } from '$lib/actions/reveal';
</script>

<Hero />

<section id="services" class="section services" use:reveal>
  <div class="container">
    <h2 class="services__title">Nos services phares</h2>
    <p class="services__subtitle">Solutions de revêtement industriel adaptées à vos contraintes.</p>
    <div class="services__grid">
      <ServiceCard title="Résine époxy" description="Revêtement durable, résistant aux chocs chimiques et mécaniques. Idéal ateliers et parkings." icon="🧪" />
      <ServiceCard title="Marquage au sol" description="Signalétique, zones de sécurité, lignes de circulation. Haute visibilité et tenue." icon="📏" />
      <ServiceCard title="Peinture industrielle" description="Peintures techniques antidérapantes, anti-poussières et anti-corrosion." icon="🛡️" />
    </div>
    <div style="margin-top:1.25rem; display:flex; gap:.75rem;">
      <a class="btn btn--primary" href="/services">Découvrir tous nos services</a>
      <a class="btn btn--secondary" href="/contact">Obtenir un devis</a>
    </div>
  </div>
</section>

<section id="about" class="section" use:reveal={{ delay: 100 }}>
  <div class="container">
    <h2 class="services__title" style="color:var(--color-text)">Pourquoi nous choisir ?</h2>
    <div class="services__grid">
      <div class="card" style="padding:1.25rem;">
        <h3>Expertise</h3>
        <p>10+ ans d’expérience en sols industriels et résines.</p>
      </div>
      <div class="card" style="padding:1.25rem;">
        <h3>Qualité</h3>
        <p>Matériaux certifiés, finitions soignées et durables.</p>
      </div>
      <div class="card" style="padding:1.25rem;">
        <h3>Sécurité</h3>
        <p>Marquage conforme et surfaces antidérapantes.</p>
      </div>
    </div>
  </div>
</section>
