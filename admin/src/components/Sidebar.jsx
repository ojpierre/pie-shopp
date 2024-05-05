import React from "react";
import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const LightPinkTheme = {
  primary: "#FFC0CB",
  secondary: "#F08080",
  text: "#333",
};

const SidebarContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${LightPinkTheme.primary};
  padding: 20px;
  color: ${LightPinkTheme.text};
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarMenu = styled.div`
  margin-bottom: 20px;
`;

const SidebarTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${LightPinkTheme.secondary};
  }

  &.active {
    background-color: ${LightPinkTheme.secondary};
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/" className="link">
              <SidebarListItem className="sidebarListItem active">
                <SidebarIcon>
                  <LineStyle />
                </SidebarIcon>
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <SidebarIcon>
                <Timeline />
              </SidebarIcon>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <TrendingUp />
              </SidebarIcon>
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <Link to="/users" className="link">
              <SidebarListItem>
                <SidebarIcon>
                  <PermIdentity />
                </SidebarIcon>
                Users
              </SidebarListItem>
            </Link>
            <Link to="/products" className="link">
              <SidebarListItem>
                <SidebarIcon>
                  <Storefront />
                </SidebarIcon>
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <SidebarIcon>
                <AttachMoney />
              </SidebarIcon>
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <BarChart />
              </SidebarIcon>
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <SidebarIcon>
                <MailOutline />
              </SidebarIcon>
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <DynamicFeed />
              </SidebarIcon>
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <ChatBubbleOutline />
              </SidebarIcon>
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <SidebarIcon>
                <WorkOutline />
              </SidebarIcon>
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <Timeline />
              </SidebarIcon>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <Report />
              </SidebarIcon>
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
