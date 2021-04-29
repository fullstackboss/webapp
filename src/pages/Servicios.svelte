<script>
  import Loader from "../components/Loader.svelte";

  let promesa = ajax();
  let registros = [];
  const url = "https://jsonplaceholder.typicode.com/comments";
  async function ajax() {
    const respuesta = await fetch(url);
    registros = await respuesta.json();
    if (respuesta.ok) {
      return registros;
    } else {
      throw new Error("No se puede conectar");
    }
  }
</script>

<section class="col-sm-12 my-auto">
  <div class="container row mx-auto py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-5 text-center mb-3">
        <h2>ACERCA DE NUESTROS EVENTOS</h2>
        <p>
          Let's choose the package that is beppily
          and cheerfully.
        </p>
      </div>
    </div>
    <div class="row h-100 justify-content-center">
      <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 justify-content-center">
        {#await promesa}
          <Loader />
        {:then usuarios}
          {#each usuarios as item}
            <div class="col">
              <div class="card h-100">
                <img
                  src="https://picsum.photos/200/300?random={item.id}"
                  height="140"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.body.slice(0, 50)}</p>
                  <a href={item.url} target="_blank" class="btn btn-danger"
                    >Ver más</a
                  >
                </div>
                <div class="card-footer">
                  <small class="text-muted"
                    ><i class="bi bi-envelope-fill px-1" /> {item.email}</small
                  >
                </div>
              </div>
            </div>
          {/each}
        {:catch error}
          <p>{error}</p>
        {/await}
      </div>
    </div>
  </div>
  <!-- end of .container-->
</section>
