<svelte:options runes={true} />

<script lang="ts">
  const { title, description, icon = '⚙️' } = $props<{
    title: string;
    description: string;
    icon?: string;
  }>();
</script>

<article class="service-card" aria-label={title}>
  <div class="service-card__icon" aria-hidden="true">{icon}</div>
  <h3 class="service-card__title">{title}</h3>
  <p class="service-card__description">{description}</p>
</article>
