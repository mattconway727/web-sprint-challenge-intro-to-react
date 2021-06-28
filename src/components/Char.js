import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";
import styled from "styled-components";

const CardDiv = styled.div`
    opacity: .6;
    `

const Char = props => {
    const [star, setStar] = useState([]);

    useEffect(() => {
      axios
        .get("https://swapi.dev/api/people")
        .then((res) => {
          console.log("results.data", res.data);
          setStar(res.data);
          console.log(star);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    return(
        <CardDiv>
            {star.map(
               data => {
                 return(
                     <Character key={data.url} name={data.name} height={data.height} gender={data.gender}/>
                 )  
               } 
            )}
        </CardDiv>
    )
}
export default Char;