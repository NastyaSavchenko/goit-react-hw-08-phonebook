import styled from 'styled-components';

export const FormTitle = styled.h3`
  margin-bottom: 20px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
`;

export const FormInput = styled.input`
  height: 30px;
  margin-bottom: 20px;
  padding: 2px 20px;
  width: 100px;

  border: solid 2px #f3848c;
  border-radius: 6px;
  background-color: inherit;

  outline: none;

  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #f3848c;
  &:hover,
  &:focus {
    border: solid 2px #3c322d;
  }

  @media screen and (min-width: 750px) {
    max-width: 250px;
    width: 100%;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 5px;
  cursor: pointer;
  width: 100px;
  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(248, 110, 103, 0.63) 0%,
    rgba(253, 86, 143, 0.86) 100%
  );
  box-shadow: 0px 7px 27px -2px rgba(253, 88, 140, 0.35);
  border: inherit;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;

  &:hover,
  &:focus {
    border: solid 1px #f3848c;
    color: #f3848c;
    background: #ffffff;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }

  @media screen and (min-width: 750px) {
    width: 250px;
    font-size: 20px;
  }
`;
