import React from "react";
import './Post.css';
import './PostLoading.css';
import { Skeleton } from "@mui/material";
import { TiArrowDownOutline, TiArrowUpOutline, TiMessage } from "react-icons/ti";

const PostLoading = () => {
    return (
        <article className="post">
            <div className="post-votes-container">
                <button type="button" className="icon-action-button up-vote" aria-label="Up vote"><TiArrowUpOutline className="icon-action" /></button>
                <Skeleton width={20} height={40}/>
                <button type="button" className="icon-action-button down-vote" aria-label="Down vote"><TiArrowDownOutline className="icon-action" /></button>
            </div>
            <div className="post-container">
                <h3 className="post-title"><Skeleton/></h3>
                <div className="post-image-container">
                    <Skeleton/>
                </div>
                <div className="post-details">
                    <span><Skeleton width={100}/></span>
                    <span><Skeleton width={100}/></span>
                    <span className="post-comments-container"><button type="button" className="icon-action-button" aria-label="Show comments"><TiMessage className="icon-action" /></button>
                    <Skeleton width={15}/>
                    </span>
                </div>
            </div>
        </article>
    );
  };

export default PostLoading;