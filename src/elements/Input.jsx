import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    const {_name, _autocomplete, _type, _placeholder, _value, _onChange, width } = props
    return (
        <React.Fragment>
            <StyleInput 
                type={_type}
                onChange={_onChange}
                name={_name}
                autocomplete={_autocomplete}
                value={_value}
                placeholder={_placeholder}
                width={width}
            />
        </React.Fragment>
    );
};
const StyleInput = styled.input`
    width: 100%;
    padding: ${props => props.width === "100%" ? "1rem 1rem 1rem 1.4rem;": "1rem 4.4rem 1rem 1.4rem;"}
    border-width: 1px 1px 0px;
    border-style: solid;
    border-color: rgba(154, 151, 161, 0.2);
    border-image: initial;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 1;
    color: rgb(51, 51, 51);
    &:focus {
        outline: none;
        border-color: rgba(154,151,161,0.2);
    }
    &::placeholder{
        font-weight: 700;
        color: rgba(0,0,0,0.3);
    }
`

export default Input;