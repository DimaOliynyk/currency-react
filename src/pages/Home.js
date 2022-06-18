import axios from 'axios';
import React, { Component } from 'react';
import './Home.css';

const CurrencyInfo = props => {
    const items = [];
    for(let currency in props.currency.rates){
        console.log(currency)
        const item = (
            <div className='currency-item'>
                <p>{currency} : {props.currency.rates[currency]}</p>
            </div>
        )

        items.push(item)
    }

    return items;
}
// https://www.currency-api.com/rates?base=USD
export default class Home extends Component{
    state = {
        data: null,
    }

    handleApi = (e) => {
        switch(e.target.value) {
            case 'eur': 
                axios.get(`https://www.currency-api.com/rates?base=${e.target.value.toUpperCase()}`)
                .then((res) => {
                    this.setState({data: res.data})
                })
                break;
            case 'usd': 
                axios.get(`https://www.currency-api.com/rates?base=${e.target.value.toUpperCase()}`)
                .then((res) => {
                    this.setState({data: res.data})
                })
                break;
            case 'dkk': 
                axios.get(`https://www.currency-api.com/rates?base=${e.target.value.toUpperCase()}`)
                .then((res) => {
                    this.setState({data: res.data})
                })
                break;
            case 'pln': 
                axios.get(`https://www.currency-api.com/rates?base=${e.target.value.toUpperCase()}`)
                .then((res) => {
                    this.setState({data: res.data})
                })
                break;
            default:
                console.log('currency isnt available!')
        }
    }

    render(){

        console.log(this.state)
        return(
            <>
                <header>
                    <p className='date'>{new Date().getUTCDate()}.{new Date().getUTCMonth()}</p>

                    <input list="base-value" className='base-value' onChange={this.handleApi}/>

                    <datalist id="base-value">
                        <option value="eur"/>
                        <option value="usd"/>
                        <option value="dkk"/>
                        <option value="pln"/>
                    </datalist>
                </header>

                <main>
                    <div className='currency-list'>
                        {this.state.data ? <CurrencyInfo currency={this.state.data}/> : console.log(1)}
                    </div>
                </main>
            </>
        )
    }
}