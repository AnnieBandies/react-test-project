import React from 'react';
import PropTypes from 'prop-types';

/* OPTION ONE:
function Header(props){
  return(
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day</h1>
      <h3 className="tagline">
        <span>{props.tagline}</span> {/*pass values through "props" this.props.tagline ... tagline="aa" was used in App.js*//*}
      </h3>
    </header>
  );
}
*/

//OPTION TWO:
const Header = props => ( //can be ({props1,prop2}) for multiple params or {tagline, age}
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day</h1>
      <h3 className="tagline">
        <span>{props.tagline}</span> {/*pass values through "props" this.props.tagline ... tagline="aa" was used in App.js*/}
      </h3>
    </header>
  );

/*
  if it is just something that gets passed in data via props and returning some jsx then ^
*/
/*
function Header(props){
  return(
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day</h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
}


class Header extends React.Component{
  render(){
    return(
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day</h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span> {/*pass values through "props" this.props.tagline ... tagline="aa" was used in App.js*//*}
        </h3>
      </header>
    );
  }
}
*/

Header.prototypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
