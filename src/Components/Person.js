import React from 'react';

const Person = ({names}) => {
    return <div>
        <h2>My name is {names.name} and my age is {names.age}</h2>
    </div>;
}



export default Person;