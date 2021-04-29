<script>
	import {link, push} from 'svelte-spa-router'
	import Router from 'svelte-spa-router'
	import routes from '../setroutes.js'

	function gochat(){
		push('/contacto');
	}
</script>




<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
	<div class="container-fluid">

	  <a class="navbar-brand" href="/" use:link><img src="../assets/img/logo.png" alt="holas"></a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  
	  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
		<ul class="navbar-nav text-uppercase web-menu">
		  <li class="nav-item">
			<a class="nav-link" aria-current="page" href="/" use:link>+ inicio</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="/nosotros" use:link>+ nosotros</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="/servicios" use:link>+ servicios</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="/colaboradores" use:link>+ colaboradores</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="/contacto" use:link>+ contacto</a>
		  </li>
		  <li class="nav-item">
		  <button type="button" class="btn btn-outline-danger btn-sm text-uppercase" on:click={gochat}>
			  ir al Chat
		  </button>
			</li>
		</ul>   
	  </div>
	  
	</div>
  </nav>
  
  <Router {routes}/>