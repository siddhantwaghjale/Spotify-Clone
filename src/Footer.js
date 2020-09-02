import React from 'react';
import './Footer.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer(){
    return(
        <div className='footer'>
            <div className="footer_left">
            <img
            className="footer_logo"
        src="https://i.redd.it/ciq5iy0odpg11.jpg"
        alt=""
      />                <p>This is Ed Sherran</p>
            </div>
            <div className="footer_middle">
                <ShuffleIcon className="shuffle"/>
                <SkipPreviousIcon className="skipleft"/>
                <PlayCircleFilledIcon fontSize="large" className="play"/>
                <SkipNextIcon className="next"/>
                <RepeatIcon className="Repeat"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
                
            </div>

        </div>
    );
}

export default Footer;