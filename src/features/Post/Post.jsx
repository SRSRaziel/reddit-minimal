import React, { useState } from "react";
import './Post.css';
import Card from '../../components/Card/Card';
import Comment from "../Comment/Comment";
import { TiArrowDownOutline, TiArrowDownThick, TiArrowUpOutline, TiArrowUpThick, TiMessage } from "react-icons/ti";
import ReactLoading from 'react-loading';
import shortenNumber from '../../utils/shortenNumber';
import moment from "moment";

const Post = (props) => {

    const [voteValue, setVoteValue] = useState(0);
    const {post, onToggleComments} = props;

    const onHandleVote = (newValue) => {
        if (newValue === voteValue){
            setVoteValue(0);
        } else if (newValue === 1){
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    }
    
    const renderUpVote = () => {
        if (voteValue === 1){
            return <TiArrowUpThick className="icon-action"/>
        }
        return <TiArrowUpOutline className="icon-action"/>
    }

    const renderDownVote = () => {
        if (voteValue === -1){
            return <TiArrowDownThick className="icon-action"/>
        }
        return <TiArrowDownOutline className="icon-action"/>
    }

    const getVoteType = () => {
        if (voteValue === 1){
            return 'up-vote';
        }
        if (voteValue === -1){
            return 'down-vote';
        }

        return '';
    }

    const renderMedia = () => {
        if (post.is_video === true){
            return (
                <div className="post-image-container">
                    <video src={post.media.reddit_video.fallback_url} width="100%" controls autoplay>Your browser does not support the video tag</video>
                </div>
            );
        }

        if (post.is_video === false){
            return (
                <div className="post-image-container">
                    <img src={post.url} alt="" className="post-image"/>
                </div>
            );
        }
    }

    const renderComments = () => {
        if (post.errorComments){
            return(
                <div>
                    <h3> Error loading the comments...</h3>
                </div>
            );
        }

        if (post.loadingComments){
            return(
                <div>
                    <ReactLoading/>
                </div>
            );
        }

        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }

        return null;
    }
    
    return (
        <article key={post.id}>
            <Card>
                <div className="post-wrapper">
                    <div className="post-votes-container">
                        <button type="button" className={`icon-action-button up-vote ${voteValue === 1 && 'active'}`} onClick={() => onHandleVote(1)} aria-label="Up Vote">{renderUpVote()}</button>
                        <p className={`post-votes-value ${getVoteType()}`}>{shortenNumber(post.ups, 1)}</p>
                        <button type="button" className={`icon-action-button down-vote ${voteValue === -1 && 'active'}`} onClick={() => onHandleVote(-1)} aria-label="Down Vote">{renderDownVote()}</button>
                    </div>
                    <div className="post-container">

                        <h3 className="post-title">{post.title}</h3>

                        {renderMedia()}

                        <div className="post-details">
                            <span className="author-details"><span className="author-username">{post.author}</span></span>
                            <span>{moment.unix(post.created_utc).fromNow()}</span>
                            <span className="post-comments-container">
                                <button type="button" className={`icon-action-button ${post.showingComments && 'showing-comments'}`} onClick={() => onToggleComments(post.permalink)} aria-label="Show Comments"><TiMessage className="icon-action"/></button> 
                                {shortenNumber(post.num_comments, 1)}
                            </span>
                        </div>
                        {renderComments()}
                    </div>
                </div>
            </Card>
        </article>
    )
}

export default Post;