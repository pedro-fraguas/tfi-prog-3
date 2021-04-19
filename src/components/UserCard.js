import React, { Component } from 'react';

class UserCard extends Component {
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="card u-flex u-flex-column">
                <div className="card__container">
                    <div className="card__image" style={{"backgroundImage": "url(" + this.props.specs.picture.large + ")"}}></div>
                </div>

            <div className="content">
                <p className="title">{this.props.specs.name.first}</p>
                <p>Email: {this.props.specs.email}</p>
                <p>Gender: {this.props.specs.gender}</p>
                <p>DoB: {this.props.specs.dob.date}'('{this.props.specs.dob.age}')'</p>
                <p>Origin: {this.props.specs.location.country}</p>
            </div>
     
            <div className="card__action-bar u-center">
                <button className="btn-transparent ">Ver detalle <i className="fas fa-angle-right"></i></button>
                <button className="btn-transparent ">Descartar <i className="far fa-trash-alt"></i></button>
            </div>
                  
        </div>

        )};
}

export default UserCard