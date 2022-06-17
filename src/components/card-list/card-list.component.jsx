import React, { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {
    render(){

        const {monsters} = this.props;
        return(
            <div className='card-list'>
                {monsters.map((val) => {
                   return <Card key={val.id} val={val} /> 
                
                })}
            </div>
        )
    }
}

export default CardList