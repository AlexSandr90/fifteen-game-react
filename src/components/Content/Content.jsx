import React from "react";

import './Content.scss';

const Content = () => {

    const randomNumbers = [...Array(16).keys()].sort(() => Math.random() - 0.5);

    const cell = randomNumbers.map(item => {

        let positions = [...randomNumbers];
        // console.log(positions);
        const move = (e) => {
            let zeroElement;
            let temp;


            return zeroElement;
        };

        console.log(move());
        const cellInlineStyle = {order: randomNumbers.indexOf(item)};
        if (randomNumbers[item] === 0) {
            return <div className='cell-zero' key={randomNumbers[item] + 1} style={cellInlineStyle}/>
        }

        return (
            <div onClick={move} className='cell' key={randomNumbers[item] + 1} style={cellInlineStyle}>
                {randomNumbers[item]}
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

export default Content;
