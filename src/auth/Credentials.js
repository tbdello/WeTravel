import React from 'react';
import styled from 'styled-components';

export default class Credentials extends React.PureComponent{ 
  handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    console.log('elements are', elements);
    const data = {};
    if(this.props.allowName) data.name = elements.name.value ;
    data.email = elements.email.value;
    data.password = elements.password.value;
    console.log('data is', data);
    this.props.submit(data);
  }

  render(){
    return(
      <StyledForm onSubmit ={this.handleSubmit}>
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