import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
  background-color: #ffd3e5;
  margin-left: 52px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 24px;
  animation: fadeInLeft 1s ease-in;
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #${(props) => props.hoverColor};
  }
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })};
  margin: 24px;
  animation: fadeInUp 1s ease-in;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff69b4;
  }
`;

const Right = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: "#fff8f8" })};
  margin: 24px;
  animation: fadeInRight 1s ease-in;
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff69b4;
  }
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PIERRE.</Logo>
        <Desc>Lorem50</Desc>
        <SocialContainer>
          <SocialIcon color="3b5999" hoverColor="4c70ba">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f" hoverColor="ff617d">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee" hoverColor="7ac8ff">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023" hoverColor="ff5a70">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          622 Dixil Street, Nairobi West
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +254799538923
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          pierreouma@gmail.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
