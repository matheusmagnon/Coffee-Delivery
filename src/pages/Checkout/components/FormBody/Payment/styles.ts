import styled, { css } from 'styled-components';

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  margin-left: -0.5rem;
  font-family: 'Roboto';

  span {
    padding-left: 0.5rem;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    height: 3.188rem;
    width: 32%;
    background: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    color: ${(props) => props.theme['base-text']};
    :hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  input {
    display: none;
  }

  input[type='radio']:checked + label {
    transition: 0.5s;
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-dark']};
  }

  cursor: pointer;
  border-radius: 6px;
  border: 0;
`;
