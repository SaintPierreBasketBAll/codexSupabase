<svelte:options runes={true} />

<script>
let nom = $state('');
let email = $state('');
let telephone = $state('');
let projectType = $state('');
let terrainSurface = $state('');
let houseSurface = $state('');
let file = $state(null);
let message = $state('');
let sent = $state(false);

function submit(e) {
    e.preventDefault();
    console.log({ nom, email, telephone, projectType, terrainSurface, houseSurface, file, message });
    sent = true;
}

$effect(() => {
    if (projectType === 'construction') houseSurface = '';
    if (projectType === 'renovation') terrainSurface = '';
});
</script>

<h1>Demande de devis</h1>
{#if sent}
<p class="thanks">Merci, votre demande a été envoyée.</p>
{/if}
<form on:submit={submit} class="quote-form">
    <div class="field">
        <label>Nom</label>
        <input type="text" bind:value={nom} required>
    </div>
    <div class="field">
        <label>Email</label>
        <input type="email" bind:value={email} required>
    </div>
    <div class="field">
        <label>Téléphone</label>
        <input type="tel" bind:value={telephone} required>
    </div>
    <div class="field">
        <label>Type de projet</label>
        <select bind:value={projectType} required>
            <option value="" disabled selected>Choisir...</option>
            <option value="construction">Construction neuve</option>
            <option value="renovation">Rénovation</option>
        </select>
    </div>
    {#if projectType === 'construction'}
    <div class="field">
        <label>Surface du terrain (m²)</label>
        <input type="number" bind:value={terrainSurface} min="0">
    </div>
    {/if}
    {#if projectType === 'renovation'}
    <div class="field">
        <label>Surface de la maison (m²)</label>
        <input type="number" bind:value={houseSurface} min="0">
    </div>
    {/if}
    <div class="field">
        <label>Joindre un fichier (plan ou photo)</label>
        <input type="file" on:change={(e) => file = e.target.files[0]}>
    </div>
    <div class="field">
        <label>Message complémentaire</label>
        <textarea rows="4" bind:value={message}></textarea>
    </div>
    <button type="submit" class="btn">Envoyer la demande</button>
</form>

<style>
.quote-form {
    max-width: 600px;
    margin: 1rem auto;
    display: grid;
    gap: 1rem;
}
.field {
    display: flex;
    flex-direction: column;
}
.btn {
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}
.btn:hover {
    background: var(--accent-color);
}
.thanks {
    background: #e0ffe0;
    border: 1px solid #b2deb2;
    padding: 1rem;
    text-align: center;
}
</style>
