import Header_styles from './header_style'
import HomeIcon from '@material-ui/icons/Home';
import { ButtonBase, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';



const Header=()=>{

    const hcss=Header_styles();




    return( <div className={hcss.root}>
       <div className={hcss.headerhome}>
       <IconButton>
       <HomeIcon/>
       </IconButton>
       <Typography className={hcss.hometext}>
           خانه
       </Typography>
       
       </div>
       <Divider className={hcss.divider}/>

       <Grid container direction={"row"} className={hcss.tweetme}>
           <Grid item>
              <img src={"images/ramyar_pic.jpg"}className={hcss.ramyar_pic}/>
           </Grid>
           <Grid item>
             <textarea placeholder={'توییت کن...'} className={hcss.textarea}/>
           </Grid>
       </Grid>
        <Grid container direction={"row-reverse"}>
            <ButtonBase>
            <button className={hcss.btn} type={"submit"}>توییت</button>
            </ButtonBase>
           <Grid item>
           <IconButton><PhotoLibraryIcon className={hcss.img_upload}/></IconButton>
           </Grid>

        </Grid>


    </div>


    )
};


export default Header;
