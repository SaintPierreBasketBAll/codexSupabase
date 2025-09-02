<svelte:options runes={true} />

<script lang="ts">
  export type Img = { src: string; alt?: string };
  const { images = [] } = $props<{ images?: Img[] }>();
  let selected: Img | null = $state(null);
</script>

<div class="gallery__grid">
  {#each images as img}
    <button class="gallery__item" onclick={() => (selected = img)} aria-label={img.alt ?? 'Voir photo'}>
      <img src={img.src} alt={img.alt ?? ''} loading="lazy" class="gallery__image" />
      <div class="gallery__overlay" aria-hidden="true">🔍</div>
    </button>
  {/each}
</div>

{#if selected}
  <div class="gallery__lightbox" role="dialog" aria-modal="true" tabindex="0" onclick={() => (selected = null)} onkeydown={(e) => (e.key === 'Escape' || e.key === 'Enter') && (selected = null)}>
    <img src={selected?.src} alt={selected?.alt ?? ''} class="gallery__lightbox-img" />
  </div>
{/if}
