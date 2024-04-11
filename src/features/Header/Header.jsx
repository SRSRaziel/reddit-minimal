import React, { useEffect, useState } from "react";
import './Header.css';
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import {useSelector, useDispatch} from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {

    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    }

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    return(
        <header>
            <div className="logo">
                <FaReddit className="logo-icon" />
                <p>Reddit <span>Minimal</span></p>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input type="text" placeholder="Search" aria-label="Search posts" value={searchTermLocal} onChange={onSearchTermChange}/>
                <button onClick={onSearchTermSubmit} type="submit" aria-label="Search"><HiOutlineSearch/></button>
            </form>
        </header>
    )
}

export default Header;