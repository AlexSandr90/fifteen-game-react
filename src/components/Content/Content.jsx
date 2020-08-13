import React from "react";

import './Content.scss';

const Content = () => {

    const numbers = [...Array(16).keys()];
    const randomNumbers = [...numbers];
    randomNumbers.sort(() => Math.random() - 0.5);

    console.log(numbers);
    console.log(randomNumbers);

    const cell = numbers.map(item => {

        let positions = [...randomNumbers];
        // console.log(positions);
        const move = (e) => {
            let temp;
            let targetOrder = randomNumbers.indexOf(item);
            let targetIndex = item;

            [targetIndex, zeroIndex] = [zeroIndex, targetIndex];
            [targetOrder, zeroOrder] = [zeroOrder, targetOrder];

            console.log('targetOrder: ' ,targetOrder, 'targetIndex: ', targetIndex);
        };

        // console.log(move());
        const cellInlineStyle = {order: randomNumbers.indexOf(item)};
        if (randomNumbers[item] === 0) {
            var zeroOrder = randomNumbers.indexOf(item);
            var zeroIndex = item;

            console.log('zeroElement: ', zeroOrder, 'zeroIndex: ', zeroIndex);
            return <div className='cell-zero' key={randomNumbers[item] } style={cellInlineStyle}/>
        }


        return (
            <div onClick={move} className='cell' key={randomNumbers[item] } style={cellInlineStyle}>
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
