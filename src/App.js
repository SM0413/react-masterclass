import styled from "styled-components";

const Fater = styled.div`
  display: flex;
`;

const Box1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Box2 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Fater>
      <Box1>
        <Text>Hello</Text>
      </Box1>
      <Box2 />
    </Fater>
  );
}

export default App;
