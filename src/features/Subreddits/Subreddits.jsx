import React, { useEffect } from "react";
import './Subreddits.css';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../store/redditSlice';
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";

const Subreddits = () => {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return(
        <Card className="subreddit-card">
            <h2> Subreddits </h2>
            <ul class="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id} className={`${selectedSubreddit === subreddit.url && `selected-subreddit`}`}>
                        <button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                            <img src={subreddit.icon_img} alt={`${subreddit.display_name}`} className="subreddit-icon" style={{ border: `3px solid ${subreddit.primary_color}` }}/>
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default Subreddits;