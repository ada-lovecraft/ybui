/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const UserInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 200;
  border: 0 none;
  border-radius: 5px;
  transition: border 50ms;
  font-family: ${props => props.theme.font};
  align-self: flex-end;

  &:focus {
    outline: 0;
  }
`;

export default UserInput;