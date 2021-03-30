import UserCard from './components/UserCard'

function App() {

  const randomUserGenerator = () => {
  fetch('https://randomuser.me/api/20')
    .then((response) => {
      return(response.json())
    })
    .then((data) =>{
      return data.results
    })
  }

  return (
    <div className="App">

      {/*<!-- HEADER -->*/}
      <div class="header header-fixed unselectable header-animated">
        <div class="header-brand">
          <div class="nav-item no-hover">
            <h6 class="title">Programacion 3</h6>
          </div>
          <div class="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
        </div>
        <div class="header-nav" id="header-menu">
          <div class="nav-left">
            <div class="nav-item text-center">  <span class="icon"> <i class="fas fa-code"></i> </span> </div>
          </div>
        </div>
      </div>

      <section class="section" style={{'background-color': '#FBF8F3;'}}>
        <div class="hero">
          <div class="hero-body">
            <div class="content">

              {/*<!-- BUSCADOR -->*/}
              <div class="form-group card">
                 <input type="search" class="form-group-input" placeholder="Filtrar por Nombre, Apellido o Edad" />
                 <button class="form-group-btn">Buscar</button>
              </div>

              {/*<!-- AÑADIR PERSONAS -->*/}    
              <div class="form-group card">
                 <input type="number" class="input-contains-icon"  placeholder="Agregar x Cantidad de personas" />
                 <button class="form-group-btn">Añadir</button>
              </div>

              {/*<!-- ORDENAR -->*/}
              <div class="input-control card">
               <select class="select" placeholder="Filtrar por">
                  <option value="0">Ordenar por</option>
                  <option value="1">Nombre descendente</option>
                  <option value="2">Nombre ascendente</option>
                  <option value="3">Edad descendente</option>
                  <option value="4">Edad ascendente</option>
               </select>
              </div>

              <div class="divider"></div>


              {/*<!-- Contenedor de tarjetas -->*/}
              <div class="grid grid-cols-3 grid-gap-3">

                < UserCard name='Pedro Fraguas' age='24' email='pfraguas@udesa.edu.ar'/>
                < UserCard name='Joaquin Berardi' age='20' email='jberardi@udesa.edu.ar'/>
                < UserCard name='Benjamin Mackinnon' age='20' email='bmackinnon@udesa.edu.ar'/>

              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
