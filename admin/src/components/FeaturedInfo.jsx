import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest } from "../requestMethods";

const LightPinkTheme = {
  primary: "#FFC0CB",
  secondary: "#F08080",
  text: "#333",
};

const FeaturedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const FeaturedItem = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${LightPinkTheme.secondary};
  color: ${LightPinkTheme.text};

  &:hover {
    background-color: ${LightPinkTheme.primary};
  }

  .featuredTitle {
    font-size: 24px;
  }

  .featuredMoneyContainer {
    margin: 10px 0;
    display: flex;
    align-items: center;
    font-size: 32px;

    .featuredMoneyRate {
      display: flex;
      align-items: center;
      margin-left: 20px;
      font-size: 16px;
    }

    .featuredIcon {
      margin-right: 5px;
      &.negative {
        color: red;
      }
    }
  }

  .featuredSub {
    font-size: 16px;
  }
`;

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <FeaturedContainer>
      <FeaturedItem>
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </FeaturedItem>
      <FeaturedItem>
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </FeaturedItem>
      <FeaturedItem>
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </FeaturedItem>
    </FeaturedContainer>
  );
}
