import React from 'react';
import Mid_styles from './midlebar_style'
import Header from './header/header'
import Tweetlist from './body/tweet_list'

const Midle_bar = () => {

    const mcss=Mid_styles();

    const arrlist=[{
        name:"حسین اقاتبار",
        id:"hossein@",
        img:"images/hossein.jpg",
        caption:"",
        like:"20"
        
    },{
        name:"هانیه محبی",
        id:"haniye@",
        img:"images/girl.png",
        caption:"",
        like:"103"
    },
    {
        name:"محدثه آریامنش",
        id:"mohadese@",
        img:"images/girl2.png",
        caption:"",
        like:"9"
    },
    {
        name:"حسین اقاتبار",
        id:"hossein@",
        img:"images/hossein.jpg",
        caption:"",
        like:"20"
        
    },{
        name:"هانیه محبی",
        id:"haniye@",
        img:"images/girl.png",
        caption:"",
        like:"103"
    },
    {
        name:"محدثه آریامنش",
        id:"mohadese@",
        img:"images/girl2.png",
        caption:"",
        like:"9"
    }



]


    return(<div className={mcss.root}>
        <Header/>

        {
            arrlist.map((item)=>{
           return     <Tweetlist name={item.name} id={item.id}img={item.img} caption={item.caption} like={item.like}  />
            })
            
        }
              
       
    </div>
    )


};



export default Midle_bar;