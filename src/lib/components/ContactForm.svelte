<svelte:options runes={true} />

<script lang="ts">
  import { enhance } from '$app/forms';

  // Runes: state for fields
  let name = $state('');
  let email = $state('');
  let phone = $state('');
  let subject = $state('Demande de devis');
  let message = $state('');

  // Runes: derived validity
  const emailValid = $derived(/.+@.+\..+/.test(email));
  const canSubmit = $derived(name.length > 1 && emailValid && message.length > 5);

  // Runes: derived payload preview (cheap computation)
  const preview = $derived({ name, email, phone, subject, message });

  let formEl: HTMLFormElement | null = null;
  let serverMessage = $state<string | null>(null);

  $effect(() => {
    // Example effect: log payload when valid
    if (canSubmit) console.debug('ContactForm payload preview', preview);
  });
</script>

<form class="contact-form" method="POST" use:enhance={(e) => {
    e.result?.then((r) => {
      if (r.type === 'success') serverMessage = (r.data as any)?.message ?? 'Message envoyé';
      if (r.type === 'failure') serverMessage = (r.data as any)?.error ?? 'Erreur lors de l\'envoi';
    });
  }} onsubmit={() => (serverMessage = null)} bind:this={formEl}>
  <div class="contact-form__group">
    <label for="name" class="contact-form__label">Nom</label>
    <input id="name" name="name" class="contact-form__input" placeholder="Votre nom" bind:value={name} required />
  </div>
  <div class="contact-form__group">
    <label for="email" class="contact-form__label">Email</label>
    <input id="email" name="email" type="email" class="contact-form__input" placeholder="vous@exemple.com" bind:value={email} required aria-invalid={!emailValid} />
    {#if !emailValid && email.length > 0}
      <span class="contact-form__hint">Email invalide</span>
    {/if}
  </div>

  <div class="contact-form__group">
    <label for="phone" class="contact-form__label">Téléphone</label>
    <input id="phone" name="phone" class="contact-form__input" placeholder="06 xx xx xx xx" bind:value={phone} />
  </div>

  <div class="contact-form__group">
    <label for="subject" class="contact-form__label">Sujet</label>
    <input id="subject" name="subject" class="contact-form__input" bind:value={subject} />
  </div>

  <div class="contact-form__group">
    <label for="message" class="contact-form__label">Message</label>
    <textarea id="message" name="message" rows="5" class="contact-form__textarea" bind:value={message}></textarea>
  </div>

  <div class="contact-form__actions">
    <button class="btn btn--primary contact-form__submit" disabled={!canSubmit}>Envoyer</button>
    <span style="color:rgba(255,255,255,.7); font-size:.9rem;">ou appelez-nous: 000000000</span>
  </div>

  {#if serverMessage}
    <div class="contact-form__hint" style="color:#a7f3d0;">{serverMessage}</div>
  {/if}
</form>
