import UserCard from './components/UserCard';
import React, { Component, useImperativeHandle, useState, Modal} from 'react';


class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      storage: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=6')
    .then(result => result.json())
    .then(data => {
      this.setState({users: data.results});
      this.setState({storage: this.state.users});
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
      this.setState({storage: this.state.storage.concat(data.results)});
    })
  }

  filterCards = (name, crit, age, last_name) => {
    let users = this.state.users

    if (name !== '') {
      users = users.filter(user => {return user.name.first.includes(name)})
    }
    if (last_name !== '') {
      users = users.filter(user => {return user.name.last.includes(last_name)})
    }
    if (crit === 'menor') {
      users = users.filter(user => {return (user.dob.age < age)})
    } else if (crit === 'mayor') {
      users = users.filter(user => {return (user.dob.age > age)})
    }

    this.setState({users: users})
  }

  resetCards = () => {
    this.setState({users: this.state.storage});
  }

  sorting = (value) => {
    if (value === 'alpha-desc') {
      this.sortAlphaDesc()
    } else if (value === 'alpha-asc') {
      this.sortAlphaAsc()
    } else if (value === 'age-desc') {
      this.sortAgeDesc()
    } else if (value === 'age-asc') {
      this.sortAgeAsc()
    }
  }

  sortAlphaDesc = () => {
    let users = this.state.users.sort(function (a, b) {
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
    let users = this.state.users.sort(function (a, b) {
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
    let users = this.state.users.sort(function (a, b) {
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
    let users = this.state.users.sort(function (a, b) {
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

              <div className="level">

                {/*<!-- AÑADIR PERSONAS -->*/}    
                <div className="form-group card">
                  <input type="number" className="input-contains-icon" id="add-cards" placeholder="Amount of cards" />
                  <button 
                  className="form-group-btn" 
                  onClick={() => this.addCards(document.getElementById('add-cards').value)}
                  >
                    ADD
                  </button>
                  {/* Por cuestiones de api deberiamos setear un maximo de personas a añadir (20) y chquear lo de numeros negativos*/}
                </div>
              
                {/*<!-- ORDENAR -->*/}
                <div className="form-group input-control card">
                  <select className="select" id="sorter">
                    <option selected disabled>Sort by</option>
                    <option value="alpha-desc">Name descendant</option>
                    <option value="alpha-asc">Name ascendant</option>
                    <option value="age-desc">Age descendant</option>
                    <option value="age-asc">Age ascendant</option>
                  </select>
                  <button className="form-group-btn" onClick={() => this.sorting(document.getElementById("sorter").value)}>SORT</button>
                </div>

                {/*<!-- BUSCADOR -->*/}
                <a href="#filter-modal"><button className="form-group-btn">FILTER</button></a>
                <a><button className="form-group-btn" onClick={() => this.resetCards()}>RESET</button></a>

              </div>

              <div className="divider"></div>

              {/*<!-- Contenedor de tarjetas -->*/}
              <div className="grid grid-cols-3 grid-gap-3">
                {
                this.state.users.map((specs) => {
                  return < UserCard specs={specs} key={specs.login.uuid} onDelete={this.deleteCard}/>
                })
                }
              </div>
     
            </div>
          </div>
        </div>

        {/* Modal */}
        <div class="modal modal-animated--zoom-in modal-large" id="filter-modal">
          <a class="modal-overlay close-btn" aria-label="Close"></a>
          <div class="modal-content" role="document">
              <div class="modal-header"><a href="#components" class="u-pull-right" aria-label="Close"><span class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 fa-wrapper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></span></a>
                <div class="modal-title">Filter parameters</div>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <input type="text" id="name-crit" placeholder="Name"></input>
                </div>
                <div class="form-group">
                  <input type="text" id="last-name-crit" placeholder="Last Name"></input>
                </div>
                <div class="form-group">
                  <select id="filter-crit">
                    <option selected disabled>Older or Younger</option>
                    <option value="mayor">Older than</option>
                    <option value="menor">Younger than</option>
                  </select>
                  <input type="number" id="age-crit" placeholder="Age"></input>
                </div>
                <button onClick={() => this.filterCards(document.getElementById("name-crit").value, document.getElementById("filter-crit").value, document.getElementById("age-crit").value, document.getElementById("last-name-crit").value)}>Filter</button>
              </div>
            </div>
      </div>
      </section>
      
    </div>
  )};
}

export default App;
