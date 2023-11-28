import React, { useState } from "react";
import { Input } from "antd";
import { Button, message, Modal } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import validator from "validator";

export const AddMovie = ({ setMyMovies, setRandom, memorizedMovies }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieInfo, setMovieInfo] = useState({
    ID: Math.random(),
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  // function to handle input
  const handleInput = (e) => {
    const { id, value } = e.target;
    setMovieInfo((preValue) => {
      return { ...preValue, [id]: value };
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  // handle the okay button
  const handleOk = () => {
    // Validation of all inputs

    if (!validator.isURL(movieInfo.posterURL)) {
      messageApi.open({
        type: "error",
        content: "This provide a valid Image Adress",
      });
      return;
    }
    if (validator.isEmpty(movieInfo.title)) {
      messageApi.open({
        type: "error",
        content: "Pls provide a movie title",
      });
      return;
    }
    if (validator.isEmpty(movieInfo.description)) {
      messageApi.open({
        type: "error",
        content: "Pls Provide a discription",
      });
      return;
    }
    if (movieInfo.rating < 1) {
      messageApi.open({
        type: "error",
        content: "Pls rate the Movie",
      });
      return;
    }

    messageApi.open({
      type: "success",
      content: "Added movie successfully",
    });

    setMyMovies(() => [movieInfo, ...memorizedMovies.myMemorizedMovies]);

    // to trigger the memorized the value in the use memo in app.jsx
    setRandom(Math.random());
    // ***************************
    // ***************************

    setMovieInfo({
      ID: Math.random(),
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setMovieInfo({
      ID: Math.random(),
      title: "",
      description: "",
      posterURL: "",
      rating: "1",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<VideoCameraAddOutlined />}
        onClick={showModal}
        className="bg-custGreen"
      >
        Add new Movie
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}
        <Input
          rows={4}
          id="title"
          onChange={handleInput}
          value={movieInfo.title}
        />
        <br />
        <Input.TextArea
          rows={4}
          id="description"
          onChange={handleInput}
          value={movieInfo.description}
        />
        <br />
        <Input
          rows={4}
          label="ImageUrl"
          id="posterURL"
          onChange={handleInput}
          value={movieInfo.posterURL}
        />
        <br />
        <Rate
          value={movieInfo.rating}
          onChange={(value) => {
            setMovieInfo((preValue) => ({ ...preValue, rating: value }));
          }}
        />
      </Modal>
    </>
  );
};
