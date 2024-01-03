import React, { Fragment } from 'react';
import PropTypes from "prop-types";

import {getFunName} from '../helpers'; //import only a specific function, getFunName, from helpers

class StorePicker extends React.Component{
  static propTypes = {
    history: PropTypes.object
  };
  //only used when need to bind "this"
  /*
  constructor(){
    super();
    this.goToStore = this.goToStore.bind(this); //so we can use "this" everywhere
  }*/
  myInput = React.createRef();

  /*
  goToStore(event){
    event.preventDefault(); //stops the form from submitting
    // get the text from the input

    // change the page to /store/whatever-they-inputted

  }*/
  //if you need to access 'this", declare a PROPERTY instead of making a FUNCTION then adding contructor function
  goToStore = (event) => {
    event.preventDefault(); //stops the form from submitting
    // get the text from the input
    //console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    // change the page to /store/whatever-they-inputted
    this.props.history.push(`/store/${storeName}`);
  }


  render(){
    //return <p>Hello!</p>
    //return React.createElement('p', {className: 'hey'})
    //to add a class for css use, use className ... "emmet?"
    /* //cannot return multiple elements
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
      </form>
    )
    */
   /*
   //use fragment to return multiple elements
   return (
    <React.Fragment>
      <p>Fish!</p>
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
      </form>
    </React.Fragment>
   )
  */
   //other format for fragment is to import
   return (
    <Fragment>
      { /*{} is to use js in jsx; so to comment, still use the multi line comment; <!-- and // won't work */ }
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type ="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type = 'submit'>Visit Store -></button>
      </form>
      { /* place your comment inside the element because it is also considered another "element" */ }
    </Fragment>
   )
  }



}

export default StorePicker;

/* import the ingredients, make your sausage, export your sausage */
