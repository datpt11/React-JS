import React from 'react';
const Person = (props) => {
    const { person } = props;
    const url = `https://randomuser.me/api/portraits/thumb/men/${person.img}.jpg`;
    return <div className="person">
        <img src={url} alt="" />
        <div>
            <h4>{person.name}</h4>
            <h4>{person.job}</h4>
            <p>{person.description}</p>
        </div>
    </div>
}
export default Person;