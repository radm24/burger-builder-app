import React, { Component } from 'react';
import style from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
        totalPrice: 0
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Radik Radikov",
                phone: "+79994448888",
                email: "test@test.com",
                address: {
                    street: "Teststreet",
                    zipCode: "455255",
                    country: "Russia"
                }
            },
            deliveryMethod: "fastest"
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            })
    }

    render() {
        let form = (
            <>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </>
        )
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={style.ContactData}>
               {form}
            </div>
        )
    }
}

export default ContactData;