import styled from 'styled-components';

import HomeImg from '../../img/home_img.jpg';

export const Container = styled.div`
  min-height: calc(100vh - 64px);

  @media screen and (min-width: 750px) {
    display: flex;
  }
`;

export const Img = styled.div`
  @media screen and (min-width: 750px) {
    width: 500px;
    height: inherit;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('${HomeImg}');
  }
`;
