<svelte:options runes={true} />

<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
</script>

<section class="section about" use:reveal>
  <div class="container">
    <h1 class="services__title">À propos</h1>
    <div class="about__grid" style="margin-top:2rem;">
      <div class="about__image">
        <img src="https://images.unsplash.com/photo-1555992336-03a23c1c87fa?q=80&w=1600&auto=format&fit=crop" alt="Équipe sur chantier" loading="lazy" class="about__image" />
      </div>
      <div class="about__text">
        <h2 style="margin:0">Notre mission</h2>
        <p>Accompagner nos clients avec des revêtements de sol performants et durables, en alliant sécurité, esthétisme et contraintes d’exploitation.</p>
        <p>Depuis 2013, nous intervenons sur des sites industriels, parkings, commerces et collectivités à La Réunion.</p>
        <h3 style="margin-top:1rem">Engagements</h3>
        <ul>
          <li>Conseil technique et devis clair</li>
          <li>Respect des délais et de la sécurité</li>
          <li>Matériaux certifiés et éco-responsables quand possible</li>
        </ul>
      </div>
    </div>
  </div>
</section>
