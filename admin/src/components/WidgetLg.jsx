import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import { format } from "timeago.js";

const WidgetLgContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const WidgetLgTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff6b6b;
  margin-bottom: 15px;
`;

const WidgetLgTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const WidgetLgTh = styled.th`
  text-align: left;
  padding: 10px 0;
  color: #777;
`;

const WidgetLgTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
`;

const WidgetLgDate = styled.td`
  color: #777;
`;

const WidgetLgAmount = styled.td`
  font-weight: bold;
`;

const WidgetLgStatus = styled.td``;

const WidgetLgButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &.Approved {
    background-color: #4caf50;
  }

  &.Pending {
    background-color: #f39c12;
  }

  &.Declined {
    background-color: #e74c3c;
  }
`;

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest transactions</WidgetLgTitle>
      <WidgetLgTable>
        <thead>
          <WidgetLgTr>
            <WidgetLgTh>Customer</WidgetLgTh>
            <WidgetLgTh>Date</WidgetLgTh>
            <WidgetLgTh>Amount</WidgetLgTh>
            <WidgetLgTh>Status</WidgetLgTh>
          </WidgetLgTr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <WidgetLgTr key={order._id}>
              <WidgetLgUser>
                <span className="widgetLgName">{order.userId}</span>
              </WidgetLgUser>
              <WidgetLgDate>{format(order.createdAt)}</WidgetLgDate>
              <WidgetLgAmount>${order.amount}</WidgetLgAmount>
              <WidgetLgStatus>
                <WidgetLgButton type={order.status}>
                  {order.status}
                </WidgetLgButton>
              </WidgetLgStatus>
            </WidgetLgTr>
          ))}
        </tbody>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
}
