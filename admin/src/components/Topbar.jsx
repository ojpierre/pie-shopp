import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const TopbarContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopLeft = styled.div`
  flex: 1;
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6b6b;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarIconContainer = styled.div`
  position: relative;
  margin-right: 15px;
  cursor: pointer;
`;

const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background-color: #ff6b6b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.7rem;
`;

const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export default function Topbar() {
  return (
    <TopbarContainer>
      <div className="topbarWrapper">
        <TopLeft>
          <Logo>pierreadmin</Logo>
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <TopAvatar
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </TopRight>
      </div>
    </TopbarContainer>
  );
}
