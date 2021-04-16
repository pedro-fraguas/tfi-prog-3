import UserCard from './components/UserCard';
import React, { Component } from 'react';

class App extends Component {

constructor() {
  super();
  this.state = {
    items: [],
    contador: 1
  }
}
   componentDidMount() {
      fetch('https://randomuser.me/api/?results=15')
      .then(result => result.json())
      .then(data => {
        this.setState({items: data.results});
        console.log(data.results);
      })
    }

  render(){ 
    return (
    <div className="App">
      {/*<!-- HEADER -->*/}
      <div className="header header-fixed unselectable header-animated">
        <div className="header-brand">
          <div className="nav-item no-hover">
            <h6 className="title">Programacion 3</h6>
          </div>
          <div className="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
        </div>
        <div className="header-nav" id="header-menu">
          <div className="nav-left">
            <div className="nav-item text-center">  <span className="icon"> <i className="fas fa-code"></i> </span> </div>
          </div>
        </div>
      </div>

      <section className="section" style={{'backgroundColor': '#FBF8F3'}}>
        <div className="hero">
          <div className="hero-body">
            <div className="content">
              {/*<!-- BUSCADOR -->*/}
              <div className="form-group card">
                 <input type="search" className="form-group-input" placeholder="Filtrar por Nombre, Apellido o Edad" />
                 <button className="form-group-btn">Buscar</button>
              </div>

              {/*<!-- AÑADIR PERSONAS -->*/}    
              <div className="form-group card">
                 <input type="number" className="input-contains-icon"  placeholder="Agregar x Cantidad de personas" />
                 <button className="form-group-btn">Añadir</button>
              </div>

              {/*<!-- ORDENAR -->*/}
              <div className="input-control card">
               <select className="select" placeholder="Filtrar por">
                  <option value="0">Ordenar por</option>
                  <option value="1">Nombre descendente</option>
                  <option value="2">Nombre ascendente</option>
                  <option value="3">Edad descendente</option>
                  <option value="4">Edad ascendente</option>
               </select>
              </div>

              <div className="divider"></div>


              {/*<!-- Contenedor de tarjetas -->*/}
              <div className="grid grid-cols-3 grid-gap-3">
                {                    this.state.items.map(function(specs, idx) {
                        return < UserCard specs={specs} key={idx}/>
                    })
                }
              </div>
     
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )};
}

export default App;
