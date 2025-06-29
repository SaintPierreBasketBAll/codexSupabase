<script lang="ts">
  let nom: string = '';
  let prenom: string = '';
  let dateNaissance: string = '';
  let sections: string[] = [];
  let sexe: string[] = [];
  let motif: string = '';

  const sectionsList = [
    'U6',
    'U7',
    'U8',
    'U9',
    'U10',
    'U11',
    'U12',
    'U13',
    'U14',
    'U15',
    'U16',
    'U17',
    'U18',
    'Séniors'
  ];

  const handleSubmit = () => {
    alert(`Nom: ${nom}\nPrénom: ${prenom}\nDate de naissance: ${dateNaissance}\nSections: ${sections.join(', ')}\nSexe: ${sexe.join(', ')}\nMotif: ${motif}`);
  };
</script>

<main>
  <h1>Basket Club</h1>
  <h2>Formulaire d'inscription</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="nom">Nom</label>
    <input id="nom" bind:value={nom} placeholder="Entrez le nom" />

    <label for="prenom">Prénom</label>
    <input id="prenom" bind:value={prenom} placeholder="Entrez le prénom" />

    <label for="dateNaissance">Date de naissance</label>
    <input type="date" id="dateNaissance" bind:value={dateNaissance} />

    <fieldset>
      <legend>Section</legend>
      {#each sectionsList as sec}
        <label>
          <input type="checkbox" value={sec} bind:group={sections} /> {sec}
        </label>
      {/each}
    </fieldset>

    <fieldset>
      <legend>Sexe</legend>
      <label>
        <input type="checkbox" value="Masculin" bind:group={sexe} /> Masculin
      </label>
      <label>
        <input type="checkbox" value="Féminin" bind:group={sexe} /> Féminin
      </label>
    </fieldset>

    <label for="motif">Motif de demande de licence</label>
    <select id="motif" bind:value={motif}>
      <option value="Renouvellement">Renouvellement</option>
      <option value="Nouvelle inscription">Nouvelle inscription</option>
      <option value="Mutation">Mutation</option>
    </select>

    <button type="submit">Valider</button>
  </form>
</main>

<style>
  :global(body) {
    margin: 0;
    background: #000;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ccc;
    gap: 1rem;
  }

  h1,
  h2 {
    background: linear-gradient(to right, rgb(246, 173, 63), rgb(213, 128, 1), rgb(190, 66, 0));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    font-family: 'Bebas Neue', sans-serif;

  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }

  form {
    background: #333;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 40rem;
  }

  label {
    color: #ccc;
  }

  input {
    background: #444;
    color: #ccc;
    border: 1px solid #555;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  select {
    background: #444;
    color: #ccc;
    border: 1px solid #555;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  button {
    background: #444;
    color: #ccc;
    border: 1px solid #555;
    padding: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>
