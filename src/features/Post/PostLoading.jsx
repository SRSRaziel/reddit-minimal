import React from "react";
import './Post.css';
import './PostLoading.css';
import getRandomNumber from "../../utils/getRandomNumber";
import ReactLoading from 'react-loading';
import { TiArrowDownOutline, TiArrowUpOutline, TiMessage } from "react-icons/ti";

const PostLoading = () => {
    return (
        <article className="post">
            <div className="post-votes-container">
                <button type="button" className="icon-action-button up-vote" aria-label="Up vote"><TiArrowUpOutline className="icon-action" /></button>
                <ReactLoading className="post-votes-value post-votes-value-loading"/>
                <button type="button" className="icon-action-button down-vote" aria-label="Down vote"><TiArrowDownOutline className="icon-action" /></button>
            </div>
            <div className="post-container">
                <h3 className="post-title"><ReactLoading width={getRandomNumber(100, 200)} /></h3>
                <div className="post-image-container">
                    <ReactLoading height={250} />
                </div>
                <div className="post-details">
                    <span><ReactLoading width={getRandomNumber(20, 50)} /></span>
                    <span><ReactLoading width={getRandomNumber(50, 100)} /></span>
                    <span className="post-comments-container"><button type="button" className="icon-action-button" aria-label="Show comments"><TiMessage className="icon-action" /></button>
                    <ReactLoading width={getRandomNumber(10, 50)} />
                    </span>
                </div>
            </div>
        </article>
    );
  };

export default PostLoading;