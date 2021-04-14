import React, { Component } from 'react';
import '../styles/CSSPage.css';
import Text from '../components/Text';

class CSSPage extends Component {
    state = {
        active: false,
        underline: false
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {

        // const btn_off = {
        //     border: '2px solid black',
        //     padding: '10px 20px',
        //     fontFamily: 'arial',
        //     fontSize: 30,
        //     display: 'block',
        //     margin: '20px auto',
        //     backgroundColor: 'white'
        // }

        // const btn_on = {
        //     border: '2px solid black',
        //     padding: '10px 20px',
        //     fontFamily: 'arial',
        //     fontSize: 30,
        //     display: 'block',
        //     margin: '20px auto',
        //     backgroundColor: 'cadetblue',
        //     color: 'white'

        // }

        const styles = {
            btn_off: {
                border: '2px solid black',
                width: '150px',
                padding: '10px 20px',
                fontFamily: 'arial',
                fontSize: 30,
                display: 'block',
                margin: '20px auto',
                backgroundColor: 'white'
            },
            btn_on: {
                border: '2px solid black',
                width: '150px',
                padding: '10px 20px',
                fontFamily: 'arial',
                fontSize: 30,
                display: 'block',
                margin: '20px auto',
                backgroundColor: 'cadetblue',
                color: 'white'
            },
        }


        const text = "Witaj na stronie - dynaiczne użycie klas css";

        // let classes = "";
        // if (this.state.underline) classes += " line";
        // if (text.length > 10) classes += " big"

        const classes = ['one'];
        if (this.state.underline) classes.push("line");
        if (text.length > 10) classes.push("big");
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Strona do testowania CSS w react</h1>
                <h2 style={{ textAlign: 'center' }}> Guzik z inline CSS</h2>
                <button style={this.state.active ? styles.btn_on : styles.btn_off} onClick={this.handleClick}>{this.state.active ? "Wyłącz" : "Włącz"}</button>
                <hr />
                <div className={classes.join(" ")}>
                    <h1 className="helloPage" onClick={() => this.setState({
                        underline: !this.state.underline
                    })}>{text}</h1>
                    <Text />
                </div>
                <hr />
            </div >
        );
    }
}

export default CSSPage;