import styled, { keyframes } from "styled-components";
//Learned this spinner from https://gist.github.com/adrianmcli/9fac3ff3c144c2805be90381eaa8d3d4
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 3px solid #54392e;
  border-right: 3px solid #54392e;
  border-bottom: 3px solid #54392e;
  border-left: 3px solid rgb(244, 187, 68);
  background: transparent;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 10px;
  margin-top: 50px;
`;

export default Spinner;
