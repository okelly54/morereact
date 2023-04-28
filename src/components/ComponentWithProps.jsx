import React from 'react';
import PropTypes from 'prop-types';
const ComponentWithProps = props =>{
    return (
        <>
            <h1>{props.headerProp}</h1>
            <p>{props.contentProp}</p>
        </>
    )
}

ComponentWithProps.defaultProps = {
    headerProp: `This is the default heading`,contentProp: `This is default content`
}

ComponentWithProps.propTypes = {
    headerProp: PropTypes.string
}

