import React from 'react';
import styled from 'styled-components';

export default ({ submit, action, allowName = false }) => (
  <StyledForm onSubmit={e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = Object.keys(elements).reduce((obj, key) => {
      obj[key] = elements[key].value;
      return obj;
    }, {});
    submit(data);
  }}>
    { allowName && <label>name: <input name="name"/></label>}
    <label>email: <input name="email"/></label>
    <label>password: <input type="password" name="password"/></label>
    <button>{action}</button>
  </StyledForm>
);

const StyledForm = styled.form`
text-align: center;
label {
  display: block;
}
label, button {
  padding: 5px;
}
`;