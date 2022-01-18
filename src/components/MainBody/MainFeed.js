import React, {useState } from "react";
import Modal from "react-modal";
import { ReactComponent as SortByDropDown } from "../svg/sort-by-dropdown.svg";
import { ReactComponent as FeedPhotoIcon } from "../svg/feed-photo.svg";
import { ReactComponent as FeedVideoIcon } from "../svg/feed-video.svg";
import { ReactComponent as FeedEventIcon } from "../svg/feed-event.svg";
import { ReactComponent as FeedArticalIcon } from "../svg/feed-artical.svg";
// import { ReactComponent as FeedheaderGlobe } from "../svg/feed-header-globe.svg";
// import { ReactComponent as LikeIcon } from "../svg/like-icon.svg";
// import { ReactComponent as HeartIcon } from "../svg/heart-icon.svg";
// import { ReactComponent as SupportIcon } from "../svg/support-icon.svg";
// import { ReactComponent as PostLikeIcon } from "../svg/post-like.svg";
// import { ReactComponent as PostShareIcon } from "../svg/post-share.svg";
// import { ReactComponent as PostCommentIcon } from "../svg/post-comment.svg";
// import { ReactComponent as PostSendIcon } from "../svg/post-send.svg";
import "./Feed.css";
import ModalSection from "./ModalSection";
import Post from './Posts'

Modal.setAppElement("#root");

function MainFeed() {
  // const [posts, setposts] = useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [comments, setcomments] = useState([]);

  function openModal() {
    setmodalIsOpen(true);
  }

  function closeModal() {
    setmodalIsOpen(false);
  }

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/posts")
  //     .then((response) => {
  //       const postsData = response.data.payload;
  //       console.log("[postdata] =>", [postsData.postId]);
  //       setposts(postsData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const commentClick = (id) => {
  //   const pId = id;
  //   console.log("Post Id", pId);
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${pId}/comments`)
  //     .then((response) => {
  //       console.log("Response Console data =>", response.data);
  //       setcomments(response.data);
  //     })
  //     .catch((err) => {
  //       console.log("Inside Error", err);
  //     });
  // };

  return (
    <div className="news-feed-section">
      <div className="posting-section">
        <div className="posting-area-entry">
          <div className="feed-input-container">
            <div className="feed-posting-section">
              <div className="feed-user-image">
                <img src={require("../images/profile-pic.jpg")} alt="" />
              </div>
              <div className="feed-input" onClick={openModal}>
                <form>
                  <input type="text" placeholder="Start a post" />
                </form>
              </div>
              <Modal isOpen={modalIsOpen} className="modal-design">
                <ModalSection closeModal={closeModal} />
              </Modal>
            </div>

            <div className="feed-input-option">
              <button className="feed-icon-button">
                <FeedPhotoIcon />
                <span className="artdeco-button-text">Photos</span>
              </button>
              <button className="feed-icon-button">
                <FeedVideoIcon />
                <span className="artdeco-button-text">Video</span>
              </button>
              <button className="feed-icon-button">
                <FeedEventIcon />
                <span className="artdeco-button-text">Event</span>
              </button>
              <button className="feed-icon-button">
                <FeedArticalIcon />
                <span className="artdeco-button-text">Write article</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="feed-sort-by">
        <button className="feed-sort-by-button">
          <hr className="sort-by-button-hr" />
          <div className="sort-button-right-section">
            <span className="sort-by-span t-12 t-black--light t-normal">
              Sort by:
            </span>
            <span className="top-span t-12 t-black t-bold">Top</span>
            <SortByDropDown />
          </div>
        </button>
      </div>
      <div className="sorts-by-section"></div>
    <Post />
    </div>
  );
}

export default MainFeed;
