import React from "react";

interface PersonProps{
    name: string;
    age: number;
}

export const Person: React.FC<PersonProps> = (props) => {
    return (<div><h1>{props.name}</h1></div>)
}