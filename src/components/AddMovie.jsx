import React, { useState } from "react";
import { Input } from "antd";
import { Button, message, Modal } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import validator from "validator";

export const AddMovie = ({ setMyMovies, setRandom, memorizedMovies }) => {
  // Message API and context holder for displaying messages
  const [messageApi, contextHolder] = message.useMessage();

  // State for controlling the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for storing movie information
  const [movieInfo, setMovieInfo] = useState({
    ID: Math.random(),
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  // Function to handle input changes
  const handleInput = (e) => {
    const { id, value } = e.target;
    setMovieInfo((preValue) => {
      return { ...preValue, [id]: value };
    });
  };

  // Function to show the modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle the okay button click
  const handleOk = () => {
    // Validation of all inputs
    if (!validator.isURL(movieInfo.posterURL)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid Image Address",
      });
      return;
    }
    if (validator.isEmpty(movieInfo.title)) {
      messageApi.open({
        type: "error",
        content: "Please provide a movie title",
      });
      return;
    }
    if (validator.isEmpty(movieInfo.description)) {
      messageApi.open({
        type: "error",
        content: "Please provide a description",
      });
      return;
    }
    if (movieInfo.rating < 1) {
      messageApi.open({
        type: "error",
        content: "Please rate the Movie",
      });
      return;
    }

    // Display success message
    messageApi.open({
      type: "success",
      content: "Added movie successfully",
    });

    // Update movie list
    setMyMovies(() => [movieInfo, ...memorizedMovies.myMemorizedMovies]);

    // Trigger re-render by changing a random value
    setRandom(Math.random());

    // Reset movieInfo and close the modal
    setMovieInfo({
      ID: Math.random(),
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
    setIsModalOpen(false);
  };

  // Function to handle the cancel button click
  const handleCancel = () => {
    // Reset movieInfo and close the modal
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
      {/* Button to open the modal */}
      <Button
        type="primary"
        icon={<VideoCameraAddOutlined />}
        onClick={showModal}
        className="bg-custGreen"
      >
        Add new Movie
      </Button>

      {/* Modal for adding a new movie */}
      <Modal
        title="Add New Movie"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}
        {/* Input for movie title */}
        <Input
          rows={4}
          id="title"
          onChange={handleInput}
          value={movieInfo.title}
        />
        <br />

        {/* Textarea for movie description */}
        <Input.TextArea
          rows={4}
          id="description"
          onChange={handleInput}
          value={movieInfo.description}
        />
        <br />

        {/* Input for movie poster URL */}
        <Input
          rows={4}
          label="ImageUrl"
          id="posterURL"
          onChange={handleInput}
          value={movieInfo.posterURL}
        />
        <br />

        {/* Rating input for movie rating */}
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
