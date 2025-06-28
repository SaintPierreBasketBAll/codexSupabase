<script>
  let licence = '';
  const handleSubmit = () => {
    alert(`Licence saisie : ${licence}`);
  };
</script>

<main>
  <h1>Basket Club</h1>
  <h2>Formulaire d'inscription</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="licence">Licence du joueur</label>
    <input id="licence" bind:value={licence} placeholder="Entrez la licence" />
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

  h1, h2 {
    background: linear-gradient(to right, #ffd27f, #ff8c00);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }

  form {
    background: #333;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 250px;
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

  button {
    background: #444;
    color: #ccc;
    border: 1px solid #555;
    padding: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>
