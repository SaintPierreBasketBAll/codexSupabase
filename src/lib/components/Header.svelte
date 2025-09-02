<svelte:options runes={true} />

<script lang="ts">
  import { goto } from '$app/navigation';
  let open = $state(false);
  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/#services', label: 'Services' },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' }
  ];

  function toggle() {
    open = !open;
  }

  $effect(() => {
    // prevent body scroll when menu is open on mobile
    if (open) document.documentElement.classList.add('overflow-hidden');
    else document.documentElement.classList.remove('overflow-hidden');
  });
  function navTo(href: string) {
    open = false;
    goto(href);
  }
</script>

<header class="header">
  <div class="header__inner container">
    <a href="/" class="header__brand" aria-label="Retour à l’accueil">
      <div class="header__logo">MP</div>
      <span class="header__title">Manu Peinture Sol</span>
    </a>

    <nav class="header__nav" aria-label="Navigation principale">
      {#each links as l}
        <a href={l.href} onclick={(e) => { e.preventDefault(); navTo(l.href); }} class="header__nav-link">{l.label}</a>
      {/each}
      <a href="/contact" class="btn btn--primary">Devis gratuit</a>
    </nav>

    <button class="header__burger" onclick={toggle} aria-expanded={open} aria-controls="mobile-nav" aria-label="Ouvrir le menu">☰</button>
  </div>

  {#if open}
    <div id="mobile-nav" class="header__mobile">
      <div class="header__mobile-inner container">
        {#each links as l}
          <a href={l.href} class="header__nav-link" onclick={(e) => { e.preventDefault(); navTo(l.href); }}>{l.label}</a>
        {/each}
        <a href="/contact" class="btn btn--primary" onclick={() => (open = false)}>Devis gratuit</a>
      </div>
    </div>
  {/if}
</header>
