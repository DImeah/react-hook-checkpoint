import React from "react";
import { Card, Space } from "antd";
import { Rate } from "antd";

const { Meta } = Card;

export const MovieCard = ({ m }) => (
  <Card
    className="bg-[#FAF5E9]"
    hoverable
    style={{
      width: 240,
      height: "max-content",
      background: "",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}
    cover={<img alt="example" src={m.url} className="h-[300px]" />}
  >
    <Meta title={m.title} description={m.description.slice(0, 100)} />

    <Rate defaultValue={m.rating} className="mt-5 bg-[] p-4" />
  </Card>
);
