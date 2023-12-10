import React,{Component} from 'react';
import classes from './Header.module.css';

class Header extends Component{
    render(){
        return(
            <div className={classes.header}>
                <div className={classes.text}>Designers &amp; Quotes</div>
                <div className={classes.logo}>quotationer.</div>
            </div>
        )
    }   
}

export default React.memo(Header);