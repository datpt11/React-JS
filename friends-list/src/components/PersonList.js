import React from 'react';
import Person from './Person';
const PersonList = () => {
    const people = [
        {
            img: 22,
            name: "Tony Stark",
            job: "Iron man"
        },
        {
            img: 50,
            name: "Steve Rogers",
            job: "Captian America",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint et sequi, optio quaerat odit excepturi!"
        },
        {
            img: 30,
            name: "Thor",
            job: "Thor"
        }
    ]
    return (
        <div className="container">
            <div className="row">
                {
                    people.map((employee, i) =>
                        <div className="col-sm-4">
                            <Person key={i} person={employee} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default PersonList;