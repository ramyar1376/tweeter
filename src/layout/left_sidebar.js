import { ButtonBase, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Styles from '../styles/style'


const News = ({name,id,img}) => {
    const lcss = Styles();
    return (<div>
     <ButtonBase>
        <Grid container direction={"row"} >
            <Grid item>
                <img src={img} className={lcss.img_icon} />
            </Grid>
            <Grid item direction={"row"} >
                <Grid item className={lcss.nameinterview}>
                    {name}
                  </Grid>
                <Grid item className={lcss.idinterview}>
                    {id}
                  </Grid>
            </Grid>

        </Grid>
        </ButtonBase>

    </div>
    )
};

const twiteernews=[{
    name:"بیل گیتس",
    id:"bill gates325@",
    img:"images/bilgats.png",

},{
    name:"مارک زاکر",
    id:"mark256@",
    img:"images/markzakerberg.png",
},
{
    name:"رامیار",
    id:"ramyar123@",
    img:"images/ramyar.png",
},
{
    name:"جف بروز",
    id:"jef.558@",
    img:"images/jef.png",
}




]


const Left_sidebar = () => {

    const lcss = Styles();







    return (<div className={lcss.left_side}>
        <Grid container direction={"row"} className={lcss.ramyar_profile} wrap={"nowrap"}>
            <Grid item>
                <img src={"images/ramyar_pic.jpg"} className={lcss.ramyar_pic} />
            </Grid>
            <Grid item container direction="column">
                <Grid item>
                    <Typography className={lcss.ramyar_id}>
                        Ramyar Jahanimehr
            </Typography>
                </Grid>
                <Grid item>
                    <Typography className={lcss.email_ramyar}>
                        ramyar.jahani@gmail.com
                    </Typography>
                        
                </Grid>


            </Grid>


        </Grid>

        <Grid container direction={"column"} className={lcss.bestkhabar}>
            <Grid item className={lcss.interviews}>
                بهترین خبرنگاران
            </Grid>
            <Divider style={{ marginRight: "-20px" }} />
            {
             twiteernews.map((items)=>{
              return (<>
             
                <News name={items.name}id={items.id} img={items.img}/>
                <Divider style={{ marginRight: "-20px" }} />
               
                </>
              )
              
             })   
            }
           


        </Grid>





    </div>

    )

};
export default Left_sidebar;