import React from "react";
import styled from "styled-components";

const NewUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const NewUserTitle = styled.h1`
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 20px;
`;

const NewUserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

const NewUserItem = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input[type="radio"] {
    margin-right: 5px;
  }

  .newUserGender label {
    margin-right: 10px;
  }
`;

const NewUserButton = styled.button`
  padding: 10px;
  background-color: #ff6b6b;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function NewUser() {
  return (
    <NewUserContainer>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </NewUserItem>
        <NewUserItem>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </NewUserItem>
        <NewUserItem>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </NewUserItem>
        <NewUserItem>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </NewUserItem>
        <NewUserItem>
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </NewUserItem>
        <NewUserItem>
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </NewUserItem>
        <NewUserItem>
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </NewUserItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </NewUserContainer>
  );
}
