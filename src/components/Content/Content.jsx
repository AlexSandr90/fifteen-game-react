import React from "react";

import './Content.scss';

const Content = () => {

    const numbers = [...Array(15).keys()];
    const randomNumbers = [...numbers];
    randomNumbers.sort(() => Math.random() - 0.5);

    console.log('numbers: ', numbers);
    // console.log('randomNumbers: ', randomNumbers);

    const cell = randomNumbers.map(item => {
debugger
        const elRef = React.createRef();
    debugger
        // let positions = [...randomNumbers];
        const move = (e) => {
            // const elRef = React.createRef();
            let targetOrder = randomNumbers.indexOf(item);
            let targetIndex = item;
debugger
            const test = {order: 5};
debugger
            elRef.target.style = {test};

            // console.log('targetOrder: ' ,targetOrder, 'targetIndex: ', targetIndex, 'targetElement: ', randomNumbers[item]);
        };

        const cellInlineStyle = {order: randomNumbers.indexOf(item)};

        return (
            <div onClick={move} className='cell' key={randomNumbers[item] } style={cellInlineStyle} ref={elRef}>
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

            {/*<div className="field">*/}
            {/*    <div className="cell" style={{order:1}}>1</div>*/}
            {/*    <div className="cell" style={{order:2}}>2</div>*/}
            {/*    <div className="cell" style={{order:3}}>3</div>*/}
            {/*    <div className="cell" style={{order:4}}>4</div>*/}
            {/*    <div className="cell" style={{order:5}}>5</div>*/}
            {/*    <div className="cell" style={{order:6}}>6</div>*/}
            {/*    <div className="cell" style={{order:7}}>7</div>*/}
            {/*    <div className="cell" style={{order:8}}>8</div>*/}
            {/*    <div className="cell" style={{order:9}}>9</div>*/}
            {/*    <div className="cell" style={{order:10}}>11</div>*/}
            {/*    <div className="cell" style={{order:11}}>11</div>*/}
            {/*    <div className="cell" style={{order:12}}>12</div>*/}
            {/*    <div className="cell" style={{order:13}}>13</div>*/}
            {/*    <div className="cell" style={{order:14}}>14</div>*/}
            {/*    <div className="cell" style={{order:15}}>15</div>*/}
            {/*    <div className="cell" style={{order:16}}>16</div>*/}
            {/*</div>*/}
        </section>
    )
};

export default Content;





// [targetIndex, zeroIndex] = [zeroIndex, targetIndex];
// [targetOrder, zeroOrder] = [zeroOrder, targetOrder];
// console.log('zeroOrder: ', zeroOrder, 'zeroIndex: ', zeroIndex, 'zeroElement: ', zeroElement);


// if (randomNumbers[item] === 0) {
//     var zeroOrder = randomNumbers.indexOf(item);
//     var zeroIndex = item;
//     var zeroElement = randomNumbers[item];
//
//     console.log('zeroOrder: ', zeroOrder, 'zeroIndex: ', zeroIndex);
//     return <div onClick={move} className='cell-zero' key={randomNumbers[item] } style={cellInlineStyle}/>
// }
