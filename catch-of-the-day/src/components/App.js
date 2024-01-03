import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component{
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };
  componentDidMount(){
    const { params } = this.props.match;

    //reinstate localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef){
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    //assigned to this.ref so we can unmount this when leaving the store
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  };

componentDidUpdate(){
  localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
};

componentWillUnmount(){
  base.removeBinding(this.ref);
};

addFish = fish => {
  //console.log("adding a fish!");
  // 1. take a copy of the existing state
  const fishes = { ...this.state.fishes };
  // 2. add our new fish to that fishes variable
  fishes[`fish${Date.now()}`] = fish;
  // 3. set the new fishes object to state
  this.setState({
    fishes: fishes
  })
};

updateFish = (key, updatedFish) => {
  // take a copy of the current state
  const fishes = {...this.state.fishes};
  // update the state
  fishes[key] = updatedFish;
  // set that to the state
  this.setState({ fishes: fishes });
}

deleteFish = (key) => {
  //take a copy of the current state
  const fishes = {...this.state.fishes};
  // update the state
  fishes[key] = null;
  // set that to the state
  this.setState({ fishes: fishes });
}

loadSampleFishes =  () => {
  this.setState({
    fishes: sampleFishes
  })
};

addToOrder = (key) => {
  // 1. take a copy of state
  const order = { ...this.state.order };
  // 2. add to the order or update the number of order --- order.fish1 = order.fish1 + 1 || 1;
  order[key] = order[key] + 1 || 1;
  // 3. call setState to update the state
  this.setState({order: order});
};

deleteOrder = (key) => {
  // 1. take a copy of state
  const order = { ...this.state.order };
  // 2. update the state
  delete order[key];
  // 3. call setState to update the state
  this.setState({order: order});
};

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {/* Object.keys returns the keys for the hash */}
            {/*if you need to use the key, you need to pass it as a prop */}
            {Object.keys(this.state.fishes).map(key =>
            <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}/>
            )}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} deleteOrder={this.deleteOrder}/>
        <Inventory addFish={this.addFish} updateFish={this.updateFish} deleteFish={this.deleteFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} storeId={this.props.match.params.storeId}/>
      </div>
    )
  }
}

export default App;
