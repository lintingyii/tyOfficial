import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return (
      <Footerwraper>
        Tingyi Lin  |  All rights reserved 2024 | 910620morgan@gmail.com
      </Footerwraper>
    );
  };
  export default Footer;

  const Footerwraper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #0000FF;
  text-align: center;
  padding: 10px; /* 可以根據需要調整底部 padding */
`;