import React from 'react';
import Person from './Person';

class ListRendering extends React.Component {


    person = [{ id:1, name: 'Tom', age: '25' }, { id:2, name: 'Jerry', age: '24' }]

 personList =this.person.map(names => <Person key ={names.id} names={names}/> )

    render() {
        return <div>
            {
               this.personList
            }
        </div>;
    }
}


export default ListRendering;