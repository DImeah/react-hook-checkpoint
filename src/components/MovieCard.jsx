import React from "react";
import { Card, Space } from "antd";
import { Rate } from "antd";

const { Meta } = Card;

// MovieCard component displays a card for a movie with its title, description, image, and rating
export const MovieCard = ({ m }) => (
  // Ant Design Card component to display movie information
  <Card
    className="bg-[#FAF5E9]"
    hoverable
    style={{
      width: 240,
      height: "max-content",
      background: "",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}
    // Card cover displays the movie poster image
    cover={<img alt="example" src={m.url} className="h-[300px]" />}
  >
    {/* Meta information for movie title and truncated description */}
    <Meta title={m.title} description={m.description.slice(0, 100)} />

    {/* Rating component to display the movie rating */}
    <Rate defaultValue={m.rating} className="mt-5 bg-[] p-4" />
  </Card>
);
