import React from 'react';
import './Counter.css';
import City from '../City/City';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: props.start,
        }
    }

    render() {
        const handlerClick = () => {
            this.setState({currentValue: this.state.currentValue + 1});
        }
        return (
            <React.Fragment>
                <City count={this.state.currentValue} />
                <div id="Counter">
                    <button className='clicker' onClick={handlerClick}>{this.state.currentValue}</button>
                </div>
            </ React.Fragment>
        );
    }
}

export default Counter;
