//
import React from 'react';
import PropTypes from 'prop-types';


// import from mySelf
import './GlobalStyles.scss';

function GlobalStyles({children}) {
    return React.Children.only(children);   //  Chỉ cho phép có 1 children
}

// prop-types
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired
}


export default GlobalStyles;