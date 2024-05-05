import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #808080;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
`;

const Content = styled.span`
  transition: transform 0.3s ease;
`;

const Announcement = () => {
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Content>Super Deal! Free shipping for orders over 50$</Content>
    </Container>
  );
};

export default Announcement;
