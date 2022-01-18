import React, { useState } from "react";
import "./Feed.css";
import axios from "axios";
import { ReactComponent as PrivacyIcon } from "../svg/modal-anyone-icon.svg";
import { ReactComponent as ModalPhotoIcon } from "../svg/modal-photo-icon.svg";
import { ReactComponent as ModalVideoIcon } from "../svg/modal-video-icon.svg";
import { ReactComponent as ModalNoteIcon } from "../svg/modal-note-icon.svg";
import { ReactComponent as ModalJobsIcon } from "../svg/modal-jobs-icon.svg";
import { ReactComponent as ModalOccasionIcon } from "../svg/modal-occasion-icon.svg";
import { ReactComponent as ModalPollIcon } from "../svg/modal-poll-icon.svg";
import { ReactComponent as ModalPostIcon } from "../svg/modal-post-icon.svg";
import { ReactComponent as GlobeIcon } from "../svg/globe.svg";
import { ReactComponent as DropDownIcon } from "../svg/drop-down.svg";

function ModalSection({ closeModal }) {
  const [data, setdata] = useState({
    user_name: "Dhrubo",
    info_title: "Junior Developer",
    post_info: "",
  });

  function sendData() {
    // Scope for api call
    // axios
    //   .post(`http://localhost:8000/api/posts/AddPost`, data)
    //   .then((response) => {
    //     console.log("Response", response);
    //     window.location.reload(false)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <div className="whole-modal">
      <div className="modal-design">
        <div className="modal-header">
          <div className="create-post">
            <span className="t-20 ">Create Post</span>
          </div>
          <button onClick={closeModal}>Close</button>
        </div>

        <div className="modal-middle-section">
          <div className="modal-profile modal-display-flex">
            <div className="profile-image">
              <img src={require("../images/profile-pic.jpg")} />
            </div>
            <div className="profile-title mL5">
              <span className="t-16 t-bold">Muhammad Ibn Saeed</span>
              <button className="globe-icon modal-display-flex">
                <GlobeIcon />
                <span className="t-14 t-black--light">Anyone</span>
                <DropDownIcon />
              </button>
            </div>
          </div>

          <textarea
            id="post_info"
            name="post_info"
            className="modal-text-area"
            placeholder="What do you want to talk about?"
            value={data.post_info}
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>

        <div className="modal-bottom">
          <div className="add-hash-tag-section">
            <span className="t-16 ">Add hashtag</span>
          </div>
          <div className="post-bottom-section">
            <div className="left-side-logos">
              <button className="logos-button">
                <ModalPhotoIcon />
              </button>
              <button className="logos-button">
                <ModalVideoIcon />
              </button>
              <button className="logos-button">
                <ModalNoteIcon />
              </button>
              <button className="logos-button">
                <ModalJobsIcon />
              </button>
              <button className="logos-button">
                <ModalOccasionIcon />
              </button>
              <button className="logos-button">
                <ModalPollIcon />
              </button>
              <button className="logos-button">
                <ModalPostIcon />
              </button>
            </div>
            <div className="anyone-section">
              <button className="logos-button modal-display-flex">
                <PrivacyIcon />
                <span className="pD4">Anyone</span>
              </button>
            </div>

            <div className="post-button-section">
              <button
                className="modal-post-button"
                onClick={() => {
                  sendData();
                  closeModal();
                }}
              >
                <span>Post</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSection;
