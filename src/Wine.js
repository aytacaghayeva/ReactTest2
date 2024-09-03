import React, { Component } from "react";
import "./Wine.scss";


class Wine extends Component {
    render(){
        let{photo, name, desc ,price,handleClose} = this.props;
        return(
            <div className="wine1">
                <div className="cardIvanovka">
                    <img src={photo} className="wine1"></img>
                        <p className="wine1-name">{name}</p>
                        <p className="wine1-taste">{desc}</p>
                        <p className="wine1-price">{price}$</p>
                        <button className="handleBtn" onClick={handleClose}>X</button>
                        
                </div>
            </div>
        )
    }
}

export default Wine;