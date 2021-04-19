import React, { useState } from "react";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Confirmation from './Components/Confirmation'
import toppingItems from './Components/ToppingItems'
import { Route, Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

const App = () => {

  // Used useHistory hook for onSubmit to show the confirmation page
  const history = useHistory();

  // Initialized the empty pizza order data to can pass it into useState for Pizza Order
  const initialPizzaOrder = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    pineapples: false,
    instructions: ''
  }

  //Set state for Pizza order form and error messaging
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaOrder)
  const [errors, setErrors] = useState({name: ''})

  // Using Yup to validate User Name in Pizza Form
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required').min(2, 'Must have 2 characters in the name'),
    size: Yup.string().required('Pick a size of pizza'),
    pepperoni: Yup.string(),
    sausage: Yup.string(),
    mushrooms: Yup.string(),
    pineapples: Yup.string(),
    instructions: Yup.string()
    
  })

  // Handles and displays error if user doesn't enter enough characters
  const setFormErrors = (name, value) => {
    Yup.reach(formSchema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  // When input changes, we update the state so that the data is not handled by HTML
  const onChange = event => {
    const { name, type, value, checked } = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setFormErrors(name, updatedInfo)
    setPizzaOrder({...pizzaOrder, [name]: updatedInfo})
  }

  // Describes what happens to data when submit button is pressed.
  const onSubmit = event => {
    event.preventDefault();
    history.push('/confirmation')
    axios.post('https://reqres.in/api/users', pizzaOrder)
    .then(res => {
      console.log('success', res.data)
    })
  }
  
  // Returns all of our components depending on routes, and passes the needed information
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route 
        path="/pizza"
        render={() => (
          <Form pizzaOrder={pizzaOrder} onChange={onChange} onSubmit={onSubmit} errors={errors}/>
        )}
        />
      <Route 
        path='/confirmation'
        render={() => (
          <Confirmation pizzaOrder={pizzaOrder} />
        )}
      />
    </>
  );
};

export default App;