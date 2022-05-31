import React from 'react';

const Card = ({ data }) => {
    return (
        <div className='random-card'>
            <h2>{data.activity}</h2>
            <link rel="stylesheet" href={data.link} />
            <h3>{data.participants}</h3>
            <h4>{data.price}</h4>
            <h4>{data.type}</h4>
        </div>
    );
};

export default Card;