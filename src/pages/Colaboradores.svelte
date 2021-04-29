<script>
    import Loader from "../components/Loader.svelte";
  
    let promesa = ajax();
    let registros = [];
    const url = "../assets/json/colaboradores.json";
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
          <h2>COLABORADORES</h2>
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
                <div class="card h-100 bg-light">
                  <div class="card-header bg-danger text-white">
                    <i class="bi bi-person-circle px-2"></i> {item.name}
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><i class="bi bi-globe2 px-2"></i> {item.website}</h6><hr>
                    <h6 class="card-title"><i class="bi bi-telephone-outbound-fill px-2"></i> {item.phone}</h6><hr>
                      <div class="d-grid gap-2 pt-2">
                        <button class="btn btn-outline-secondary btn-block btn-contacto" type="button"><i class="bi bi-person-lines-fill px-2"></i> Más información</button>
                      </div>
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
  


  <style>
      .card-title{
          font-size: 13px;
          font-weight: 400;
      }
      .btn-contacto{
        font-size: 13px;
          font-weight: 400;
      }
  </style>