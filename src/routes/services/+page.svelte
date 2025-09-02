<svelte:options runes={true} />

<script lang="ts">
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import { reveal } from '$lib/actions/reveal';
  const services = [
    { title: 'Résine époxy', icon: '🧪', description: 'Sols homogènes, résistants et faciles d’entretien. Idéal pour ateliers, parkings, laboratoires.' },
    { title: 'Marquage industriel', icon: '📏', description: 'Signalétique au sol, zones de sécurité, lignes de circulation et numérotation.' },
    { title: 'Antidérapant', icon: '⚠️', description: 'Traitements antiglisse pour zones humides, rampes et escaliers.' },
    { title: 'Peinture technique', icon: '🛡️', description: 'Anti-poussière, anti-corrosion, haute résistance chimique.' },
    { title: 'Réparation & joints', icon: '🧰', description: 'Réparation de fissures, ragréage, joints de dilatation.' },
    { title: 'Étanchéité', icon: '💧', description: 'Protection des surfaces, barrières anti-humidité, membranes liquides.' }
  ];
</script>

<section class="section services" use:reveal>
  <div class="container">
    <h1 class="services__title">Nos services</h1>
    <p class="services__subtitle" style="text-align:center">Prestations sur-mesure pour sites industriels, commerces et collectivités.</p>

    <div class="services__grid">
      {#each services as s}
        <ServiceCard {...s} />
      {/each}
    </div>

    <div style="margin-top:1.5rem">
      <a href="/contact" class="btn btn--primary">Demander un devis personnalisé</a>
    </div>
  </div>
  
</section>
