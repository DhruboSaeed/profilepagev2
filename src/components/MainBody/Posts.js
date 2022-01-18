import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as FeedheaderGlobe } from "../svg/feed-header-globe.svg";
import { ReactComponent as LikeIcon } from "../svg/like-icon.svg";
import { ReactComponent as HeartIcon } from "../svg/heart-icon.svg";
import { ReactComponent as SupportIcon } from "../svg/support-icon.svg";
import { ReactComponent as PostLikeIcon } from "../svg/post-like.svg";
import { ReactComponent as PostShareIcon } from "../svg/post-share.svg";
import { ReactComponent as PostCommentIcon } from "../svg/post-comment.svg";
import { ReactComponent as PostSendIcon } from "../svg/post-send.svg";
import Commensts from "./Commensts";

function Posts() {
  const [comments, setcomments] = useState([]);
  const [posts, setposts] = useState([]);
  const [showComment, setshowComment] = useState(false);
  const [postId, setpostId] = useState(null);
  const [commentId, setcommentId] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/posts")
  //     .then((response) => {
  //       const postsData = response.data.payload;
  //       console.log("[postdata] =>", [postsData.postId]);
  //       setposts(postsData);
  //       // setpostId(postsData.postId)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 32,
        },
      })
      .then((response) => {
        console.log("Response Posts => ", response.data);
        const postsData = response.data;
        console.log("[postdata] =>", [postsData.postId]);
        setposts(postsData);

        // setpostId(postsData.postId)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const commentClick = (id) => {
    setshowComment(!showComment);

    setpostId(id);

    setcommentId(id);
    // https://jsonplaceholder.typicode.com/comments?postId=${pId}

    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    //   .then((response) => {
    //     console.log("Comment Console data =>", response.data);
    //     setcomments(response.data);
    //   })
    //   .catch((err) => {
    //     console.log("Inside Error", err);
    //   });
  };

  //   console.log("Comments", comments)

  return (
    <div>
      <div className="main-post-section">
        {posts
          .slice(0)
          .reverse()
          .map((values, postIndex) => {
            return (
              <div className="feed-post-section">
                <div className="feed-post">
                  <div className="feed-post-header">
                    <div className="feed-user-image">
                      <img src={require("../images/user-1.jpeg")} alt="" />
                      <div className="online-status">
                        <span></span>
                      </div>
                    </div>
                    <div className="feed-post-info">
                      <a href="/home">
                        <h4 className="t-14 t-bold t-black header">
                          {/* {values.user_name} */}
                          {values.title}
                          {postIndex}
                          <span> • 2nd</span>
                        </h4>
                        <p>{values.info_title}</p>
                        <span>
                          2d •
                          <FeedheaderGlobe className="feed-header-globe" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="feed-post-body">
                    <div className="post-description-show-more-text text-decoration">
                      <div className="feed-shared-text">
                        {/* <span className="t-14">{values.post_info} </span> */}
                        <span className="t-14">{values.title} </span>
                        <br></br>
                        <span className="t-14">{values.body} </span>
                      </div>
                    </div>
                    <div className="feed-shared-image">
                      {/* <img src={require("../images/status-image.jpeg")} alt="" /> */}
                    </div>
                  </div>
                  <div className="feed-bottom">
                    <div className="feed-social-count">
                      <ul className="feed-social-ul">
                        <li className="social-reaction">
                          <button className="social-reaction-button">
                            <LikeIcon />
                            <HeartIcon />
                            <SupportIcon />
                            <span className="social-reaction-button-span header">
                              Kawshiqul Islam and 177 others
                            </span>
                          </button>
                        </li>
                        <li className="social-comments-count">
                          <div
                            className="social-reaction-button header"
                            onClick={(id) => commentClick(values.id)}
                          >
                            27 comments
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="feed-input-option post-icon-button">
                      <button className="feed-icon-button">
                        <PostLikeIcon />
                        <span>Like</span>
                      </button>
                      <button className="feed-icon-button">
                        <PostCommentIcon />
                        <span>Comment</span>
                      </button>
                      <button className="feed-icon-button">
                        <PostShareIcon />
                        <span>Share</span>
                      </button>
                      <button className="feed-icon-button">
                        <PostSendIcon />
                        <span>Send</span>
                      </button>
                    </div>
                    {/* Commnets */}
                    {showComment ? (
                      <Commensts comments={comments} postId={postId} />
                    ) : null}

                    {/* {console.log("Commenst =>" , comments)} */}
                    {/* {comments.map((valuess) =>{
                      console.log("Comments =>",valuess.name)
                      return (
                          <h4>Hello</h4>
                      )
                  })} */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
