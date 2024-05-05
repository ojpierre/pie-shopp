import React from "react";
import styled from "styled-components";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const UserContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const UserTitle = styled.h1`
  font-size: 24px;
`;

const UserAddButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008080;
  }
`;

const UserTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const UserTopLeft = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const UserTopRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTopTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserShow = styled.div`
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const UserShowImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserShowTopTitle = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UserShowUsername = styled.span`
  font-size: 16px;
`;

const UserShowUserTitle = styled.span`
  font-size: 12px;
  color: gray;
`;

const UserShowBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserShowTitle = styled.span`
  font-size: 16px;
`;

const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserShowIcon = styled.div`
  color: teal;
`;

const UserShowInfoTitle = styled.span`
  font-size: 14px;
  color: gray;
`;

const UserUpdate = styled.div`
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const UserUpdateTitle = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

const UserUpdateForm = styled.form`
  display: flex;
  gap: 20px;
`;

const UserUpdateLeft = styled.div`
  flex: 1;
`;

const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UserUpdateInput = styled.input`
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
`;

const UserUpdateRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserUpdateUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserUpdateIcon = styled.div`
  color: teal;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #008080;
  }
`;

const UserUpdateButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008080;
  }
`;

export default function User() {
  return (
    <UserContainer>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newUser">
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserTop>
        <UserTopLeft>
          <UserShow>
            <UserShowTop>
              <UserShowImg
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <UserShowTopTitle>
                <UserShowUsername>Anna Becker</UserShowUsername>
                <UserShowUserTitle>Software Engineer</UserShowUserTitle>
              </UserShowTopTitle>
            </UserShowTop>
            <UserShowBottom>
              <UserShowTitle>Account Details</UserShowTitle>
              <UserShowInfo>
                <UserShowIcon>
                  <PermIdentity />
                </UserShowIcon>
                <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <UserShowIcon>
                  <CalendarToday />
                </UserShowIcon>
                <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowTitle>Contact Details</UserShowTitle>
              <UserShowInfo>
                <UserShowIcon>
                  <PhoneAndroid />
                </UserShowIcon>
                <UserShowInfoTitle>+1 123 456 67</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <UserShowIcon>
                  <MailOutline />
                </UserShowIcon>
                <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <UserShowIcon>
                  <LocationSearching />
                </UserShowIcon>
                <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
              </UserShowInfo>
            </UserShowBottom>
          </UserShow>
        </UserTopLeft>
        <UserTopRight>
          <UserUpdate>
            <UserUpdateTitle>Edit</UserUpdateTitle>
            <UserUpdateForm>
              <UserUpdateLeft>
                <UserUpdateItem>
                  <label>Username</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label>Full Name</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                  />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label>Email</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label>Phone</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </UserUpdateItem>
                <UserUpdateItem>
                  <label>Address</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                  />
                </UserUpdateItem>
              </UserUpdateLeft>
              <UserUpdateRight>
                <UserUpdateUpload>
                  <UserUpdateImg
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <UserUpdateIcon>
                      <Publish />
                    </UserUpdateIcon>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </UserUpdateUpload>
                <UserUpdateButton>Update</UserUpdateButton>
              </UserUpdateRight>
            </UserUpdateForm>
          </UserUpdate>
        </UserTopRight>
      </UserTop>
    </UserContainer>
  );
}
