<svelte:options runes={true} />

<footer class="footer">
  <div class="footer__grid container">
    <div class="footer__col">
      <div class="footer__col-title">Manu Peinture Sol</div>
      <p>Peinture de sol, résine époxy, marquage industriel. Qualité & sécurité.</p>
    </div>
    <div class="footer__col">
      <div class="footer__col-title">Coordonnées</div>
      <address class="not-italic">
        21 Chemin Kervéguen<br />
        97480 Saint-Joseph<br />
        SIRET 79741277200015
      </address>
      <div style="margin-top:.5rem;">Tél: 000000000<br />Email: contact@example.com</div>
    </div>
    <div class="footer__col">
      <div class="footer__col-title">Liens</div>
      <nav class="footer__links">
        <a href="/services" class="footer__link">Services</a>
        <a href="/realisations" class="footer__link">Réalisations</a>
        <a href="/a-propos" class="footer__link">À propos</a>
        <a href="/contact" class="footer__link">Contact</a>
      </nav>
      <div class="footer__social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" class="footer__link" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V24h-4V8z"/></svg>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="footer__link" title="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.7c0-2.4 1.4-3.8 3.5-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12"/></svg>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="footer__link" title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.2.4-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.8.2 4.1.4c-.8.3-1.5.7-2.2 1.4C1.2 2.5.8 3.2.4 4.1.2 4.8 0 5.7 0 7c0 1.3 0 1.7 0 5s0 3.7.1 5c.1 1.3.3 2.2.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.7.2 1.6.4 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.2-.7.4-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.5-2.9-.3-.8-.7-1.5-1.4-2.2C21.5.7 20.8.3 20 .1 19.3 0 18.4 0 17.1 0 15.8 0 15.3 0 12 0z"/><path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8m0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4m6.4-10.6a1.4 1.4 0 1 0 1.3 1.4 1.4 1.4 0 0 0-1.3-1.4"/></svg>
        </a>
      </div>
    </div>
  </div>
  <div class="footer__copyright">© {new Date().getFullYear()} Manu Peinture Sol — Tous droits réservés</div>
</footer>
