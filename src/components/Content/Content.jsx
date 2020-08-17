import React, {Component} from "react";

import './Content.scss';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {randomNumbers: [...Array(16).keys()].sort(() => Math.random() - 0.5)};
    }

    componentDidMount() {
        this.move()
    }

    componentWillUnmount() {

    }

    move() {
        this.setState({
            randomNumbers: 15
        })
    };

    render() {
        const numbers = [...Array(16).keys()];
        const randomNumbers = [...numbers];
        randomNumbers.sort(() => Math.random() - 0.5);

        console.log('numbers: ', numbers);
        console.log('randomNumbers: ', randomNumbers);
        const cell = randomNumbers.map(item => {
            const move = (e) => {
                let zeroIndex = randomNumbers.indexOf(0);
                let targetOrder = e.target.style.order;
                // let temp;
                console.log('order: ', e.target.style.order);
                console.log('zeroIndex: ', zeroIndex);

                let temp = targetOrder;
                targetOrder = zeroIndex;
                zeroIndex = temp;

                console.log('zeroIndexMove: ', zeroIndex, 'targetOrderMove: ', targetOrder);
                // [targetOrder, zeroIndex] = [zeroIndex, targetOrder];
            };

            const cellInlineStyle = {order: item};

            if (randomNumbers[item] === 0) {
                let zeroOrder = item;
                let zeroIndex = item;
                let zeroElement = randomNumbers[item];

                console.log('zeroOrder: ', zeroOrder, 'zeroIndex: ', zeroIndex, 'zeroElement: ', zeroElement);
                return <div onClick={() => move()} className='cell-zero' key={randomNumbers.indexOf(item)} style={cellInlineStyle}/>
            }

            return (
                <div onClick={() => move()} className='cell' key={randomNumbers.indexOf(item) } style={cellInlineStyle}>
                    {randomNumbers[item] }
                </div>
            )
        });

        const handleClick = event => {
            event.preventDefault();
            alert('Была нажата ссылка.')
        };

        return (
            <section className='game-container'>
                <h1>Fifteen</h1>
                <div className='field' id='field'>
                    {cell}
                </div>
                <a href="#" onClick={(event) => handleClick(event)}>Click Me</a>
            </section>
        )
    }
}

// const Content = () => {
//
//     const numbers = [...Array(16).keys()];
//     const randomNumbers = [...numbers];
//     randomNumbers.sort(() => Math.random() - 0.5);
//
//     console.log('numbers: ', numbers);
//     console.log('randomNumbers: ', randomNumbers);
//     const cell = randomNumbers.map(item => {
//         const move = (e) => {
//             let zeroIndex = randomNumbers.indexOf(0);
//             let targetOrder = e.target.style.order;
//             // let temp;
//             console.log('order: ', e.target.style.order);
//             console.log('zeroIndex: ', zeroIndex);
//
//             let temp = targetOrder;
//             targetOrder = zeroIndex;
//             zeroIndex = temp;
//
//             console.log('zeroIndexMove: ', zeroIndex, 'targetOrderMove: ', targetOrder);
//             // [targetOrder, zeroIndex] = [zeroIndex, targetOrder];
//         };
//
//         const cellInlineStyle = {order: item};
//
//         if (randomNumbers[item] === 0) {
//             let zeroOrder = item;
//             let zeroIndex = item;
//             let zeroElement = randomNumbers[item];
//
//             console.log('zeroOrder: ', zeroOrder, 'zeroIndex: ', zeroIndex, 'zeroElement: ', zeroElement);
//             return <div onClick={move} className='cell-zero' key={randomNumbers.indexOf(item)} style={cellInlineStyle}/>
//         }
//
//         return (
//             <div onClick={move} className='cell' key={randomNumbers.indexOf(item) } style={cellInlineStyle}>
//                 {randomNumbers[item] }
//             </div>
//         )
//     });
//
//     return (
//         <section className='game-container'>
//             <h1>Fifteen</h1>
//             <div className='field' id='field'>
//                 {cell}
//             </div>
//         </section>
//     )
// };
//
// export default Content;
