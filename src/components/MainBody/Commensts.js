import React, { useEffect, useState } from "react";
import axios from "axios";

function Commensts({ postId }) {
  const [comments, setcomments] = useState([]);

  console.log("Comments Section", postId);
  // Api call , with ID, UseEffect(ID)

  // https://jsonplaceholder.typicode.com/comments?postId=${postId}

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        console.log("Response Console data =>", response.data);
        setcomments(response.data);
      })
      .catch((err) => {
        console.log("Inside Error", err);
      });
  }, []);

  return (
    <div>
      {comments.map((val) => {
        return (
          <div className="bottom-comment-section">
            <div className="lists-comments-section">
              <div className="comments_lists_section">
                <div className="user_commnets_section">
                  <div className="feed-user-image">
                    <img src={require("../images/follow3.jpeg")} alt="" />
                  </div>
                  <div className="individual_comments">
                    <div className="feed-post-info comment_display_flex">
                      <a href="/home">
                        <h4 className="t-14 t-bold t-black header">
                          {/* Ankur Warikoo<span> • 2nd</span> */}
                          {val.name}
                        </h4>
                        <p>{val.email}</p>
                        <span>2d •</span>
                      </a>
                      <div className="time_line">
                        <button className="time_line_button">3h ...</button>
                      </div>
                    </div>
                    <div className="user-comments text-decoration">
                      <span className="t-12">{val.body}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Commensts;
