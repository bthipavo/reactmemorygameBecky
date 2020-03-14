// import React from "react";
import React, { useState } from "react";
import Wrapper from "../Wrapper"
import Container from "../Container"
// import MemoryCard from "../MemoryCard"
import cardsData from "../../cards.json"
import MemoryCard from '../MemoryCard';
import uuid from "uuid/v1"
import "./style.css"


const PhotoGrid = () => {

    const [cards, setCards] = useState(cardsData)

    console.log('cardsData', cardsData)


    const cardClicked = event => {
        console.log('card clicked: ', event.target); //loging the photo info clicked

        console.log('cardsData', cardsData)

        

        shufflePhotoDisplay();
    }
    
    const shufflePhotoDisplay = () => {
        const shuffle = require('shuffle-array'), 
            collection = cards;
       // const cards2 = shuffle(cards, { 'copy': true });
        console.log("cards", cards);
       // console.log("cards", cards2);
        console.log(cards.length)
        setCards(shuffle(cards, { 'copy': true }))
    }

    return (
        <Wrapper>
                <Container>
                        {cards.map(card => { 
                            return (
                                <img key={uuid()} id={card.id} src={card.image} onClick={cardClicked}/>
                            )
                        })
                        }
                </Container>
        </Wrapper>
    )
    }




export default PhotoGrid; 