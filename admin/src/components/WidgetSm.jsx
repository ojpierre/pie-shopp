import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../requestMethods";

const WidgetSmContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const WidgetSmTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6b6b;
  display: block;
  margin-bottom: 10px;
`;

const WidgetSmList = styled.ul`
  list-style: none;
  padding: 0;
`;

const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const WidgetSmImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const WidgetSmUser = styled.div`
  margin-left: 10px;
`;

const WidgetSmUsername = styled.span`
  font-weight: bold;
`;

const WidgetSmButton = styled.button`
  border: none;
  background-color: #ff6b6b;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  .widgetSmListItem:hover & {
    background-color: #ff5252;
  }
`;

const WidgetSmIcon = styled(Visibility)`
  font-size: 1rem;
  margin-right: 5px;
`;

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <WidgetSmContainer>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        {users.map((user) => (
          <WidgetSmListItem key={user._id}>
            <WidgetSmImg
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
            />
            <WidgetSmUser>
              <WidgetSmUsername>{user.username}</WidgetSmUsername>
            </WidgetSmUser>
            <WidgetSmButton>
              <WidgetSmIcon />
              Display
            </WidgetSmButton>
          </WidgetSmListItem>
        ))}
      </WidgetSmList>
    </WidgetSmContainer>
  );
}
