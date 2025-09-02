<svelte:options runes={true} />

<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  const { title = 'Peinture de sols industriels et résine époxy', subtitle = 'Revêtements durables, résistants et sécurisés pour vos ateliers, parkings et zones logistiques.', ctaHref = '/contact', ctaLabel = 'Demander un devis', imageUrl = 'https://images.unsplash.com/photo-1581093588401-16b2e28f2d9b?q=80&w=1600&auto=format&fit=crop' } = $props<{
    title?: string;
    subtitle?: string;
    ctaHref?: string;
    ctaLabel?: string;
    imageUrl?: string;
  }>();
</script>

<section class="hero">
  <div aria-hidden="true" class="hero__bg" style={`background:url('${imageUrl}') center/cover no-repeat`}></div>
  <div aria-hidden="true" class="hero__gradient"></div>
  <div aria-hidden="true" class="hero__overlay"></div>

  <div class="hero__content container">
    <div class="hero__inner" use:reveal>
      <h1 class="hero__title">{title}</h1>
      <p class="hero__subtitle">{subtitle}</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href={ctaHref}>
          {ctaLabel}
          <span style="margin-left:.5rem; display:inline-block; transition: transform .2s ease" aria-hidden="true">→</span>
        </a>
        <a class="btn btn--secondary" href="/realisations">Voir nos réalisations</a>
      </div>
    </div>
  </div>
</section>
