import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import {useDataLayerValue} from './DataLayer';
// import {useEffect} from 'react';

function Header(spotify) {
    const [{ user }] =  useDataLayerValue();
    return (
        <div className="header">
            <div className="header_left">
            <SearchIcon/>
            <input placeholder="Search for songs here" type="text">
            </input>
            </div>
            <div className="header_right">
            <Avatar alt={user?.display_name} src={user?.images[0].url} />
    <h4>{user?.display_name}</h4>
            </div>

        </div>
    );
}

export default Header;