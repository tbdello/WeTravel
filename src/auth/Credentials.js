import React from 'react';
import styled from 'styled-components';

export default class Credentials extends React.PureComponent{ 
  render(){
    return(
      <StyledForm onSubmit={e => {
        e.preventDefault();
        const { elements } = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
          obj[key] = elements[key].value;
          return obj;
        }, {});
        this.props.submit(data);
      }}>
        { this.props.allowName && <label>name: <input name="name"/></label>}
        <label>email: <input name="email"/></label>
        <label>password: <input type="password" name="password"/></label>
        <button>{this.props.action}</button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
text-align: center;
label {
  display: block;
}
label, button {
  padding: 5px;
}
`;