import React, { useState } from "react";
import './Post.css';
import Card from '../../components/Card/Card';
import { TiArrowDownOutline, TiArrowDownThick, TiArrowUpOutline, TiArrowUpThick, TiMessage } from "react-icons/ti";

const Post = (props) => {

    const [voteValue, setVoteValue] = useState(0);

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
    
    return (
        <article>
            <Card>
                <div className="post-wrapper">
                    <div className="post-votes-container">
                        <button type="button" className={`icon-action-button up-vote ${voteValue === 1 && 'active'}`} onClick={() => onHandleVote(1)} aria-label="Up Vote">{renderUpVote()}</button>
                        <p> Número </p>
                        <button type="button" className={`icon-action-button down-vote ${voteValue === -1 && 'active'}`} onClick={() => onHandleVote(-1)} aria-label="Down Vote">{renderDownVote()}</button>
                    </div>
                    <div className="post-container">

                        <h3 className="post-title">Título do Post</h3>

                        <div className="post-image-container">
                            <img src="" alt="" className="post-image"/>
                        </div>

                        <div className="post-details">
                            <span className="author-details">
                                Avatar
                                <span className="author-username"> Nome do Autor </span>
                            </span>
                            <span> Moment </span>
                            <span className="post-comments-container">
                                <button><TiMessage className="icon-action"/></button> 
                                Nº de Comentários
                            </span>
                        </div>
                        Comentários
                    </div>
                </div>
            </Card>
        </article>
    )
}

export default Post;