import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import './header.css';
import { connect } from "react-redux";
import { actionCreators } from './store';


const Header = (props) => {
  return (     
    <Fragment>
      <p>{props.focused === true ? '1': '0'}</p>
      <div className="header-wrapper">
        <CSSTransition
          timeout={500}
          in={props.focused}
          classNames="slide"
        >
          <input type="text" onFocus={props.handleInputFocuse} onBlur={props.handleInputBlur}/>
        </CSSTransition>
      </div>
    </Fragment>
  )

}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocuse() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);