import React, {useState, useEffect} from 'react';
import styled from 'styled-components'



const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2%;

    .card{
        display:flex;
        width: 60%;
        border: 4px solid rgb(237 142 0);
        background: whitesmoke;
        align-items: center;
        flex-wrap: wrap;
        margin:1%;

        h2 {
            text-align: left; 
            width: 90%;
            margin-left: 2%;
        }
    }

    .card-info{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        div{
            width: 20%;
            margin: 2%;
        }
    }

`


export default function Character({listOfCharacters, toggleDetails}) {
    const [display, setDisplay] = useState(null)
    const [buttonLabel, setButtonLabel] = useState("open")
    const toggleOpenButton = () => {
        if (display !== null) {
            setDisplay(null)
            setButtonLabel("open")

        } else {
            setDisplay(true)
            setButtonLabel("close")
        }
    } 
 
    return(
        <CardContainer >
            {listOfCharacters && listOfCharacters.map( Character => {
                return (
                    <div className="card"key={Character.edited}>
                        <h2>{Character.name}</h2>
                        <button onClick={toggleOpenButton}>{buttonLabel}</button>
                        {display &&    
                            <div className="card-info">
                                <div>Birth Year: <br/>{Character["birth_year"]}</div>
                                <div>Eye Color: <br/>{Character["eye_color"]}</div>
                                <div>Gender: <br/>{Character["gender"]}</div>
                                <div>Hair Color: <br/>{Character["hair_color"]}</div>
                                <div>Height: <br/>{Character["height"]}</div>
                                <div>Mass: <br/>{Character["mass"]}</div>
                            </div>
                        }
                    </div>
                    
                )
            })}
        </CardContainer>
    )
}