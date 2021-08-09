import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginUser,
  updateQuestions,
  updateLoginUserSocial,
} from "../../actions";

import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const SocialMediaWrapper = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  margin-bottom: 5rem;
`;

const SocialMediaInput = styled.input`
  text-align: center;
  border-radius: 0.3rem;
  padding: 0.25rem;
  width: 20rem;
  height: 2rem;
  margin: 0.5rem;
`;

const SocialMediaButton = styled.button`
  text-align: center;
  border-radius: 0.3rem;
  padding: 0.25rem;
  width: 10rem;
  height: 3rem;
  margin: 0.5rem;
`;

const ThumbsContainer = styled.aside`
  display: "flex";
  flex-direction: "row";
  flex-wrap: "wrap";
  margin-top: 16;
`;

const Thumbs = styled.div`
  display: "inline-flex";
  border-radius: 2;
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: "border-box";
`;

const ThumbsInner = styled.div`
  display: "flex";
  min-width: 0;
  overflow: "hidden";
`;

const ThumbsInnerImg = styled.img`
  display: "block";
  width: 15rem;
  height: "100%";
`;

function SocialMedia(props) {
  const [data, setData] = useState({
    facebook: props.social ? props.social.email : props.email,
    instagram: props.social ? props.social.email : props.email,
  });

  const dispatch = useDispatch();
  const facebookInput = useRef();
  const instagramInput = useRef();
  // const profilePhoto = useRef();
  const loginUser = useSelector((state) => state.loginUser);
  const social = useSelector((state) => state.socialProfile);
  const questions = useSelector((state) => state.questionsProfile);

  const handleChange = (e) => {
    setData({
      ...data,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUserSocial(props.user, props.social.name);
    // ... submit to API or something
    console.log("send put request when submit");
    console.log(loginUser.username);
    setPrint(!print);
    // if (props._id) {
    let id = loginUser._id;

    let userCurrentInputs = {
      facebook: facebookInput.current.value,
      instagram: instagramInput.current.value,
    };

    console.log("[ userCurrentInputs ]", userCurrentInputs);

    axios
      .put("/users/" + id, userCurrentInputs)
      .then((response) => {
        console.log("[ response.data[0] ]", response.data[0]);
        console.log(
          "%c [ response.data[0] ]",
          "font-size:13px; background:pink; color:#bf2c9f;",
          response.data[0]
        );

        dispatch(updateLoginUserSocial(response.data[0].social));
        dispatch(setLoginUser(response.data[0]));

        console.log("[ loginUser ]", loginUser);
      })
      .catch((error) => {
        // this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
    // }
  };

  const [print, setPrint] = useState(false);

  //Cite the code from Dropzone
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <Thumbs className="thumbs" key={file.name}>
      <ThumbsInner className="thumbInner">
        <ThumbsInnerImg src={file.preview} />
      </ThumbsInner>
    </Thumbs>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  //Cite the code from Dropzone

  useEffect(() => {
    console.log(
      "%c [ Social Media ]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      loginUser
    );
    console.log("[ questions ]", questions);
  }, []);

  return (
    <SocialMediaWrapper>
      {/* <div className="socialMedia"> */}
      <form>
        <h1>Facebook</h1>
        <SocialMediaInput
          type="text"
          name="facebook"
          onChange={handleChange}
          ref={facebookInput}
          placeholder={social.facebook}
        ></SocialMediaInput>

        <h1>Instagram</h1>

        <SocialMediaInput
          type="text"
          name="instagram"
          onChange={handleChange}
          ref={instagramInput}
          placeholder={social.instagram}
        ></SocialMediaInput>

        <h1>Photo</h1>

        {/* cite the code from Dropzone */}
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <SocialMediaInput {...getInputProps()} />
            <SocialMediaInput
              type="text"
              value="Drop Here"
              onChange={handleChange}
            />
          </div>
          <ThumbsContainer className="thumbsContainer">
            {thumbs}
          </ThumbsContainer>
        </section>
        {/* cite the code from Dropzone */}

        <SocialMediaButton onClick={handleSubmit}>Submit</SocialMediaButton>
        {print && (
          <div>
            <h1>{data.facebook}</h1>
            <h1>{data.instagram}</h1>
          </div>
        )}
      </form>
    </SocialMediaWrapper>
  );
}

export default SocialMedia;
