import React, { Fragment } from 'react';
import './header.css'
import { connect } from "react-redux";

const Header = (props) => {

  return (     
    <Fragment>
      <p>{props.focused}</p>
      <div className="header-wrapper">
        <input type="text" />
      </div>
    </Fragment>
  )

}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocuse() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);