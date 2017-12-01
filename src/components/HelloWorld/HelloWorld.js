import React from 'react';
import PropTypes from 'prop-types';

/** Hello World description here  */
function HelloWorld ( {message} ) {
    return  <div>Hello, {message}</div>;
}


HelloWorld.propTypes = {
    /** desc for message here */
    message: PropTypes.string
}

export default HelloWorld;
