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

                <div className="content">
                    <p className="title">{this.props.specs.name.first} {this.props.specs.name.last} ({this.props.specs.dob.age})</p>
                    <p>Email: {this.props.specs.email}</p>
                    <p>Gender: {this.props.specs.gender}</p>
                    <p>{this.state.date}</p>
                </div>
                
                <div> 
                   
                </div>
            
                <div className="card__action-bar u-center">
                    <a href="#test-modal"><button  className="btn-transparent" > View detail <i className="fas fa-angle-right"></i></button>  </a>
                    <button className="btn-transparent " onClick={() => this.props.onDelete(this.props.specs.login.uuid)}> Delete <i className="far fa-trash-alt"></i></button>
                </div>
                
                {/* Modal */}
                <div class="modal modal-animated--zoom-in" id="test-modal">
                    <a class="modal-overlay close-btn" aria-label="Close"></a>
                    <div class="modal-content" role="document">
                        <div class="modal-header"><a href="#components" class="u-pull-right" aria-label="Close"><span class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 fa-wrapper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></span></a>
                            <div class="modal-title">{this.props.specs.name.first} {this.props.specs.name.last} ({this.props.specs.dob.age})</div>
                        </div>
                        <div class="modal-body">
                            <div class="r">
                                <h3 class="font-alt font-light u-text-center font-bold">Detalles</h3>
                                <p><b>Email: </b> {this.props.specs.email}</p>
                                <p><b>Phone Number: </b> {this.props.specs.cell}</p>
                                <p><b>Gender:</b> {this.props.specs.gender}</p>
                                <p><b>Age:</b> {this.props.specs.dob.age}</p>
                                <p><b>Date of birth:</b> {this.state.date}</p>
                                <p><b>Country:</b> {this.props.specs.location.country} </p>
                                <p><b>City, State:</b> {this.props.specs.location.city} , {this.props.specs.location.state} </p>
                                <p><b>Postal Code:</b> {this.props.specs.location.postcode} </p>
                                <p><b>Registration date:</b> {this.props.specs.registered.date} </p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>

        )};
}

export default UserCard