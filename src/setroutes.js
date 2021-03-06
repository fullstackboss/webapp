import Inicio from './pages/Inicio.svelte';
import Nosotros from './pages/Nosotros.svelte';
import Servicios from './pages/Servicios.svelte';
import Contacto from './pages/Contacto.svelte';
import Colaboradores from './pages/Colaboradores.svelte';
import Error from './pages/Error.svelte';

const rutas ={
    '/': Inicio,
    '/nosotros': Nosotros,
    '/servicios': Servicios,
    '/colaboradores': Colaboradores,
    '/contacto': Contacto,
    '*': Error
}
export default rutas
