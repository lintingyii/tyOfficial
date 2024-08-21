import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Footerwraper>
      © Tingyi Lin  |  All rights reserved 2024  |  
      <EmailLink href="mailto:910620morgan@gmail.com">
        <Span>910620morgan@gmail.com</Span>
      </EmailLink>
    </Footerwraper>
  );
};

export default Footer;

const Footerwraper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333;
  width: 100%;
  background-color: #f2f2f2;
  text-align: center;
  padding: 24px 0px;
  font-size: 1rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  margin-top: auto; /* 将 Footer 推到页面的结尾 */

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.div`
  color: #333;
  margin-left: 6px;
  transition: color .4s ease;

  &:hover {
  color: #000fff;
  }
`;

const EmailLink = styled.a`
  text-decoration: none; /* 移除默认的下划线 */
  color: inherit; /* 继承 Span 的颜色 */
`;