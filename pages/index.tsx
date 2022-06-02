import type { NextPage } from 'next';
import styled from 'styled-components';

const TemplateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: red;
`;

const Home: NextPage = () => {
  return <TemplateWrap>Template</TemplateWrap>;
};

export default Home;
