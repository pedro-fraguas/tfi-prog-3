import React, { Component } from 'react';

class UserCard extends Component {
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="card u-flex u-flex-column">
                <div className="card__container">
                    <div className="card__image" style={{"backgroundImage": "url(https://camo.githubusercontent.com/eb6a385e0a1f0f787d72c0b0e0275bc4516a261b96a749f1cd1aa4cb8736daba/68747470733a2f2f612e736c61636b2d656467652e636f6d2f64663130642f696d672f617661746172732f6176615f303032322d3531322e706e67)"}}></div>
                </div>

            <div className="content">
                <p className="title">{this.props.specs.name.first}</p>
                <p>Genero: {this.props.specs.gender}</p>
                <p>Edad: {this.props.specs.dob.age}</p>
                <p>Origen: {this.props.specs.location.country}</p>
            </div>
     
            <div className="card__action-bar u-center">
                <button className="btn-transparent ">Ver detalle <i className="fas fa-angle-right"></i></button>
                <button className="btn-transparent ">Descartar <i className="far fa-trash-alt"></i></button>
            </div>
                  
        </div>

        )};
}

export default UserCard