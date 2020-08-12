import React from "react";

import './Content.scss';

const Content = () => {

    const randomNumbers = [...Array(16).keys()].sort(() => Math.random() - 0.5);
    console.log(randomNumbers);

    const cell = randomNumbers.map(item => {
        const cellInlineStyle = {order: randomNumbers.indexOf(item)};
        return (
            <div className='cell' key={randomNumbers[item] + 1} style={cellInlineStyle}>
                {randomNumbers[item] + 1}
            </div>
        )
    });

    return (
        <section className='game-container'>
            <h1>Fifteen</h1>
            <div className='field' id='field'>
                {cell}
            </div>
        </section>
    )
};

// const Ceil = props => {
//     return (
//         <div key={props}>
//
//         </div>
//     )
// }

export default Content;
