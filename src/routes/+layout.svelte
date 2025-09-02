<svelte:options runes={true} />

<script lang="ts">
  import '$lib/styles/globals.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  // Typage explicite pour calmer l'IDE/TS
  const { children = () => null } = $props<{ children?: () => any }>();
</script>

<Header />

<main class="container" style="padding: 2rem 0;">
  {@render children()}

  <!-- Decorative divider -->
  <div class="divider" style="margin-top: 4rem;"></div>
</main>

<Footer />
