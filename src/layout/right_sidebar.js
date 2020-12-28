import { ButtonBase, Divider, Grid, Typography } from '@material-ui/core';
import { Style } from '@material-ui/icons';
import React from 'react';
import Styles from '../styles/style';

const hashtag = ['پرچم_دار_جدید', 'کرونا_ویروس', 'ویروس_لامصب', 'ترامپ', 'جوبایدن']

const Right_sidebar = () => {

    const css = Styles()


    return (
        <div className={css.right} >



            <Grid container direction={"row"} alignContent={"center"} >
                <Grid item>
                    <img src={"twitter.png"} className={css.img} />
                </Grid>

                <Grid item>
                    <ButtonBase>
                        <Typography className={css.twiterfarsi}>
                            توییتر فارسی
                </Typography>
                    </ButtonBase>
                </Grid>
                <ButtonBase>
                    <Typography className={css.daghtariha}>
                        داغ ترین هشتگ ها
                    </Typography>
                </ButtonBase>

                <Grid container direction={"column"}>


                    {
                        hashtag.map((item) => {
                            return <Grid container item alignContent={"center"} >
                                <ButtonBase>
                                    <img src={'hashtag.png'} className={css.hashtag} />


                                    <Typography className={css.hashtagttext}>
                                        {item}
                                    </Typography>
                                </ButtonBase>





                            </Grid>
                        })
                    }

                </Grid>


            </Grid>
     
          
        </div>

    )
}


export default Right_sidebar;







