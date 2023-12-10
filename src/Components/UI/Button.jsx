import React,{Component} from 'react';
import classes from './Button.module.css';

class Button extends Component {
    render() {
        return (
            <div className={classes.flex}>
            <button
                className={classes.button}
                type={this.props.type}
                onClick={this.props.clicked}>
                {this.props.children}
            </button>
            </div>
        );
    }
}

export default Button;