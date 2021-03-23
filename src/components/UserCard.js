function UserCard(props) {
    return(
        <div class="card u-flex u-flex-column">
            <div class="card__container">
                  <div class="card__image" style="background-image: url(https://camo.githubusercontent.com/eb6a385e0a1f0f787d72c0b0e0275bc4516a261b96a749f1cd1aa4cb8736daba/68747470733a2f2f612e736c61636b2d656467652e636f6d2f64663130642f696d672f617661746172732f6176615f303032322d3531322e706e67);"></div>
            </div>
        
            <div class="content">
               <p class="title">Nombre y Apellido</p>
                  <p >Edad</p>
                  <p> Email </p>
            </div>
        
            <div class="card__action-bar u-center">
                  <button class="btn-transparent ">Ver detalle <i class="fas fa-angle-right"></i></button>
                  <button class="btn-transparent ">Descartar <i class="far fa-trash-alt"></i></button>
            </div>
                  
        </div>
    )
}

export default UserCard