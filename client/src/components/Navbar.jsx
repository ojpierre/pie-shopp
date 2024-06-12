import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  background-color: #fdeef1;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid #ffd3e5;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

const Input = styled.input`
  border: none;
  margin-left: 10px;
  font-size: 14px;
  width: 100%;
  outline: none;

  ::placeholder {
    color: gray;
  }
`;

const Centre = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 28px;
  margin: 0;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Poppins", sans-serif;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;

  &:hover {
    color: #ff6b6b;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Search style={{ color: "gray", fontSize: 16 }} />
            <Input placeholder="Search" />
          </SearchContainer>
        </Left>
        <Centre>
          <Link to="/">
            <Logo>PIERRE</Logo>
          </Link>
        </Centre>
        <Right>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
