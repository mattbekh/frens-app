import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
  // const setUserSocial = (user, social) => {
  //   console.log(social);
  //   if (social === "facebook") {
  //     user.social.facebook = 1;
  //   }
  //   if (social === "instgram") {
  //     user.social.instgram = 1;
  //   }
  // };

  const [data, setData] = useState({
    facebook: props.social ? props.social.email : props.email,
    instagram: props.social ? props.social.email : props.email,
  });

  const dispatch = useDispatch();

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
    console.log(data);
    console.log(props.social._id);
    setPrint(!print);
    if (props._id) {
      let id = props._id.toString();
      axios
        .put("/users/" + id, data)
        .then((response) => {
          //  this.setState({ updatedAt: response.data.updatedAt });
          // {[e.target.name]: e.target.value.trim()}
          console.log("from axios put");
          console.log(e.target.name);
          console.log(response.data);
        })
        .catch((error) => {
          // this.setState({ errorMessage: error.message });
          console.error("There was an error!", error);
        });
    }
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
    if (props._id) {
      let id = props._id.toString();
      axios.get("/users/" + id).then((response) => {
        console.log("from axios");
        console.log(response.data);
      });
    }
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
        ></SocialMediaInput>

        <h1>Instagram</h1>

        <SocialMediaInput
          type="text"
          name="instagram"
          onChange={handleChange}
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
