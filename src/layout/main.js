import React from 'react';
import Right_sidebar from './right_sidebar';
import Styles from '../styles/style'
import { Divider } from '@material-ui/core';
import Left_sidebar from './left_sidebar';
import Midle_bar from '../midle_bar/midle';





const Main = () => {
    const csss=Styles()


    return (<div className={csss.root}>
         
         <Right_sidebar/>
         <Divider orientation={"vertical"} className={csss.divider}/>
         <Midle_bar/>
         <Divider orientation={"vertical"} className={csss.divider}/>
         <Left_sidebar/>


        
         

      
    </div>
       
    )
};



export default Main;