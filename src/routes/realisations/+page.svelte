<svelte:options runes={true} />

<script lang="ts">
  import Gallery from '$lib/components/Gallery.svelte';
  import { reveal } from '$lib/actions/reveal';
  const images = [
    { src: 'https://images.unsplash.com/photo-1581093588401-16b2e28f2d9b?q=80&w=1600&auto=format&fit=crop', alt: 'Sol résine époxy atelier' },
    { src: 'https://images.unsplash.com/photo-1532634726-8b9fb99825c7?q=80&w=1600&auto=format&fit=crop', alt: 'Marquage industriel' },
    { src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop', alt: 'Parking résine' },
    { src: 'https://images.unsplash.com/photo-1555992336-03a23c1c87fa?q=80&w=1600&auto=format&fit=crop', alt: 'Zone logistique' },
    { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop', alt: 'Entrepôt' },
    { src: 'https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?q=80&w=1600&auto=format&fit=crop', alt: 'Surface antidérapante' }
  ];
</script>

<section class="section gallery" use:reveal>
  <div class="container">
    <h1 class="gallery__title">Réalisations</h1>
    <p class="gallery__subtitle">Quelques chantiers récents en résine, marquage et peinture technique.</p>
    <div style="margin-top:1.25rem">
      <Gallery {images} />
    </div>
  </div>
</section>
