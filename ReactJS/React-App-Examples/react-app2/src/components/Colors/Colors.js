import React from 'react';
import './Colors.css';

class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "red",
        };
    }

    render() {
        const handlerClick = (color) => {
            this.setState({currentColor: color});
        }
        return(
            <div id='Colors'>
                <div className='buttons'>
                    <button className='btn' color="red" onClick={() => handlerClick('red')}>Red</button>
                    <button className='btn' color="yellow" onClick={() => handlerClick('yellow')}>Yellow</button>
                    <button className='btn' color="green" onClick={() => handlerClick('green')}>Green</button>
                </div>
                <div className={'canvas canvas__' + this.state.currentColor}></div>
            </div>
        ); 
    }
}

export default Colors;
