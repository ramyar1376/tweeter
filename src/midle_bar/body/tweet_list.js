import { Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import Tweetstyle from './tweet_style'
import FavoriteIcon from '@material-ui/icons/Favorite';
import RepeatIcon from '@material-ui/icons/Repeat';




const Tweetlist = ({name,id,img,caption,like}) => {
    const listcss = Tweetstyle()



    return (
        <div className={listcss.root}>
            <Grid container alignContent={"center"}>
                <Grid item>
                    <img src={img} className={listcss.imgprofiles} />
                </Grid>
                <Grid item>
                    <Typography className={listcss.textProfiles}>
                       {name}
                 </Typography>

                </Grid>
                <Grid item>
                    <Typography className={listcss.idprofiles}>
                        {id}
                 </Typography>

                </Grid>

            </Grid>

            <Grid container direction={"column"}>
                <Grid item>
                    <Typography className={listcss.captionProfiles}>
                        بهترین وعده عذایی با اختلاف صبحانست، چون ممکن نیست برای <span style={{ color: "#20b1ea" }}>#صبحانه</span> کسی خورشت کرفس درست کنه
                </Typography>
                </Grid>
                <Grid item container direction={"row-reverse"} alignItems={"center"}>
                    <Grid items>
                    <IconButton>
                   < RepeatIcon className={listcss.repeaticon}/>
                   </IconButton>
                    </Grid>
                    <Grid items>
                        <IconButton>
                            <FavoriteIcon className={listcss.heart_icon} />
                        </IconButton>
                    </Grid>
                    <Grid items>
                        <Typography className={listcss.like}>
                            {like}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
};
export default Tweetlist;