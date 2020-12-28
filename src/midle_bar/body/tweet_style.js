const { makeStyles } = require("@material-ui/core");





const Tweetstyle=makeStyles({

    root:{
        backgroundColor:"white",
        marginTop:"10px"
    
    },
    textProfiles:{
            marginTop:"25px",
            color:"black",
            fontSize:'22px !important',
            fontFamily:"shabnam",
            fontWeight:"600",
            marginLeft:"5px",
    },

    idprofiles:{
        color:"#e8e8e8",
        fontSize:'19px !important',
            fontFamily:"shabnam",
            fontWeight:"600",
            marginTop:"25px",
    },
    captionProfiles:{
        marginTop:"10px",
        color:"black",
        fontSize:'20px !important',
        fontFamily:"shabnam",
        fontWeight:"400",
        marginLeft:"5px",
        width:"80%",
        marginRight:"80px"
    },


    imgprofiles:{
        width: "70px",
        margin:"20px 20px",
        borderRadius:"250px !important",
        
        
    },



    heart_icon:{
            color:"red",
        fontSize:"35px !important",
        border:"1px solid black",
        borderRadius:"50px",
       padding:"2px",
       marginLeft:"5px"
    },
    repeaticon:{
        fontSize:"35px !important",
        border:"1px solid black",
        borderRadius:"50px",
       padding:"2px",
       marginLeft:"5px"
    },
    like:{
        color:"#dbd0d0",
        fontSize:"20px !important"
    }



});
export default Tweetstyle;