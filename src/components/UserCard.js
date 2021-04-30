import React, { Component } from 'react';

class UserCard extends Component {
    constructor(props){
        super();
        this.state={
            date:[],
        }
    }

    componentDidMount(){
        let date= this.props.specs.dob.date;
        this.setState({date: date.substr(0,10)});
    }

    render(){
        return(
            <div className="card u-flex u-flex-column">
                <div className="card__container">
                    <div className="card__image" style={{"backgroundImage": "url(" + this.props.specs.picture.large + ")"}}></div>
                </div>

                {/**<div class="card__mobile-title">
                    <div class="content">
                        <div class="tile">
                            <div class="tile__container">
                                <p class="tile__title">{this.props.specs.name.first} {this.props.specs.name.last} ({this.props.specs.dob.age})</p>
                                <p class="tile__subtitle">{this.props.specs.location.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card__body content">
                    <p>Email: {this.props.specs.email}</p>
                    <p>{this.props.specs.dob.date}</p>
                </div>
                <div class="card__footer content">Gender: {this.props.specs.gender}</div>

                <div className="card__action-bar u-center">
                    <button className="btn-transparent "> Ver detalle <i className="fas fa-angle-right"></i></button>
                    <button className="btn-transparent " onClick={() => this.props.onDelete(this.props.specs.login.uuid)}> Descartar <i className="far fa-trash-alt"></i></button>
                </div>**/}

                <div className="content">
                    <p className="title">{this.props.specs.name.first} {this.props.specs.name.last} ({this.props.specs.dob.age})</p>
                    <p>Email: {this.props.specs.email}</p>
                    <p>Gender: {this.props.specs.gender}</p>
                    <p>{this.state.date}</p>
                </div>
            
                <div className="card__action-bar u-center">
                    <button className="btn-transparent "> Ver detalle <i className="fas fa-angle-right"></i></button>
                    <button className="btn-transparent " onClick={() => this.props.onDelete(this.props.specs.login.uuid)}> Descartar <i className="far fa-trash-alt"></i></button>
                </div>
                  
            </div>

        )};
}

export default UserCard