const { makeStyles } = require("@material-ui/core");





const Header_styles=makeStyles({

    root:{
        backgroundColor:"white"
    },


    headerhome:{
        display: "flex",
        marginTop:"10px",
        marginBottom:"12px",
        
       
    },

    hometext:{
        fontSize:"1.5rem !important",
        color:"black",
        fontFamily:"shabnam !important",
        fontWeight:"800",
        marginTop:"10px"
        
        
    },
    divider:{
            width: "100%",
            backgroundColor:"#5ea9dd",
            filter: "opacity(0.4)"
    },


    tweetme:{
        marginTop:"20px",
        paddingRight:"20px",
        width:"100%",
       

    },
    ramyar_pic: {
        width: "70px",
        borderRadius: "100px",
     
    },
    textarea:{
        marginTop:"10px",
        marginRight:"20px",
        height:"40px",
        width:"200%",
        fontFamily:"shabnam",
        fontSize:"1rem",
        fontWeight:"600",
        border:"none",
        "&:focus":{all :"unset"}

    },
    btn:{
        color:"white",
        backgroundColor:"#20b1ea",
        width:"6rem",
        height:"35px",
        border:"none",
        borderRadius:"50px",
        fontSize:"23px",
        fontWeight:"600",
        fontFamily:"shabnam",
        marginLeft:"10px",
        filter:"opacity(0.9)",
        border:"none",
        outline:"none",
        cursor:"pointer"

    },

    img_upload:{
    color:"red",
    marginLeft:"10px",
    marginTop:"5px",
    padding:"10px",
    border: "1px solid black",
    borderRadius:"50px"
    },


});


export default Header_styles;