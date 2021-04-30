import UserCard from './components/UserCard';
import React, { Component, useImperativeHandle, useState, Modal} from 'react';


class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=6')
    .then(result => result.json())
    .then(data => {
      this.setState({users: data.results});
    })
  }

  deleteCard = (id) => {
    this.setState({users: this.state.users.filter(user => user.login.uuid !== id)})
  }


  addCards = (n) => {
    fetch('https://randomuser.me/api/?results=' + n)
    .then(result => result.json())
    .then(data => {
      this.setState({users: this.state.users.concat(data.results)});
    })
  }

  sorting = (x) => {
    if (x == 'alpha-desc') {
      this.sortAlphaDesc()
    } else if (x == 'alpha-asc') {
      this.sortAlphaAsc()
    } else if (x == 'age-desc') {
      this.sortAgeDesc()
    } else if (x == 'age-asc') {
      this.sortAgeAsc()
    }
  }

  sortAlphaDesc = () => {
    let users = []
    users = this.state.users.sort(function (a, b) {
      if (a.name.first < b.name.first){
        return 1
      } else if (a.name.first > b.name.first){
        return -1
      } else {
        return 0
      }
    })
    this.setState({users: users})
  }
  sortAlphaAsc = () => {
    let users = []
    users = this.state.users.sort(function (a, b) {
      if (a.name.first > b.name.first){
        return 1
      } else if (a.name.first < b.name.first){
        return -1
      } else {
        return 0
      }
    })
    this.setState({users: users})
  }

  sortAgeDesc = () => {
    let users = []
    users = this.state.users.sort(function (a, b) {
      if (a.dob.age < b.dob.age){
        return 1
      } else if (a.dob.age > b.dob.age){
        return -1
      } else {
        return 0
      }
    })
    this.setState({users: users})
  }

  sortAgeAsc = () => {
    let users = []
    users = this.state.users.sort(function (a, b) {
      if (a.dob.age > b.dob.age){
        return 1
      } else if (a.dob.age < b.dob.age){
        return -1
      } else {
        return 0
      }
    })
    this.setState({users: users})
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
                <input type="number" className="input-contains-icon add-n-cards"  placeholder="Agregar x Cantidad de personas" />
                <button 
                className="form-group-btn" 
                onClick={() => this.addCards(document.querySelector('.add-n-cards').value)}
                >
                  Añadir
                </button>
                {/* Por cuestiones de api deberiamos setear un maximo de personas a añadir (20) y chquear lo de numeros negativos*/}
              </div>

              {/*<!-- ORDENAR -->*/}
              <div className="form-group input-control card">
                <select className="select" id="sorter">
                  <option selected disabled>Ordenar por</option>
                  <option value="alpha-desc">Nombre descendente</option>
                  <option value="alpha-asc">Nombre ascendente</option>
                  <option value="age-desc">Edad descendente</option>
                  <option value="age-asc">Edad ascendente</option>
                </select>
                <button className="form-group-btn" onClick={() => this.sorting(document.getElementById("sorter").value)}>Ordenar</button>
              </div>

              <div className="divider"></div>

              {/*<!-- Contenedor de tarjetas -->*/}
              <div className="grid grid-cols-3 grid-gap-3">
                {
                this.state.users.map((specs) => {
                  return < UserCard specs={specs} key={specs.login.uuid} onDelete={this.deleteCard} onDetalle={this.viewDetail}/> //Uso deleteCard porque me trae la ID
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
