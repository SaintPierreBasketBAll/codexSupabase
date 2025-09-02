<svelte:options runes={true} />

<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { reveal } from '$lib/actions/reveal';
  const on = { reveal };
</script>

<section class="section contact" use:reveal>
  <div class="container">
    <h1 class="services__title">Contact</h1>
    <p class="services__subtitle" style="text-align:center">Parlez-nous de votre projet de sol : nous vous répondons sous 24h ouvrées.</p>
    <div class="contact__grid" style="margin-top:1.5rem;">
      <ContactForm />
      <div class="contact__info">
        <div class="contact__info-inner">
          <h2>Coordonnées</h2>
          <address class="not-italic" style="color:rgba(255,255,255,.8); margin-top:.5rem;">
            21 Chemin Kervéguen<br />97480 Saint-Joseph
          </address>
          <div style="margin-top:.5rem; color:rgba(255,255,255,.85)">
            Tél: <a href="tel:000000000" class="footer__link">000000000</a><br/>
            Email: <a href="mailto:contact@example.com" class="footer__link">contact@example.com</a>
          </div>
          <div style="margin-top:1rem;">
            <h3>Horaires</h3>
            <p style="color:rgba(255,255,255,.7)">Lun–Ven : 8h–18h</p>
          </div>
        </div>
        <iframe title="Carte" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=55.615%2C-21.38%2C55.63%2C-21.36&layer=mapnik" class="contact__map"></iframe>
      </div>
    </div>
  </div>
</section>
