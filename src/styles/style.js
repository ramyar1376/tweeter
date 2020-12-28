const { makeStyles } = require("@material-ui/core");




const Styles = makeStyles({



    root: {
        width: "100%",
        height: "100vh",
        display: 'flex !important',
        overflow: "hidden",
       

    },






    right: {

        width: "20%",
        height: "100vh !important",
        backgroundColor: "white",
        paddingTop: "10px",
        paddingRight: "20px",
        





    },
    img: {
        width: "4rem",
        marginLeft: "20px"
    },


    container: {
        marginTop: "50px",

    },
    twiterfarsi: {
        lineHeight: "60px !important",
        fontFamily: "lalezar"
    },

    daghtariha: {
        color: "black",
        marginTop: "20px",
        fontFamily: "lalezar",
        
    },
    divider: {
        backgroundColor: "#5ea9dd ",
        width: "1",
        height: "100vh !important",


    },
    hashtag: {
        width: "50px"
    },
    hashtagttext: {
        color: "black",
        marginTop: "10px",
        lineHeight: "30px",
        marginBottom: "20px",
        fontSize: "25px !important",
        fontWeight: "bolder !important",
        width: "100% !important",
        fontFamily: "shabnam"


    },
    //-------------------------------
    left_side: {
        width: "23%",
        direction: "ltr",
        


    },
    ramyar_profile: {

        marginTop: "30px",
        width: "80%",

        marginLeft: "20px"

    },
    ramyar_pic: {
        width: "70px",
        borderRadius: "100px",
        
    },
    ramyar_id: {
        fontSize: "1rem !important",
        marginTop: "20px",
        paddingLeft: "30px",
        fontFamily: "shabnam",
        color: "black",
        fontWeight: "bolder"

    },
    email_ramyar: {
        fontSize: "1rem !important",
        fontWeight: "initial",
        fontFamily: "shabnam",
        color: "#d8d6d6",
        fontWeight: "bolder",
        marginBottom: "30px"

    },
    bestkhabar:{
        width:"80%",
        height:"70vh",
        backgroundColor:"#eaeaea",
         direction:"rtl",
         borderRadius:"30px",
         paddingRight:"20px",
         paddingTop:"10px",
         marginLeft:"30px",

        
       
    },
    interviews:{
            fontFamily:"shabnam",
        fontSize:"25px !important",
        fontWeight:"bold",
        

    },
//-----------------------



    img_icon:{
        width:"4rem",
        borderRadius:"50px",
        marginTop:"15px"
    },
    nameinterview:{
        fontSize:"20px",
        fontWeight:"bold",
        marginTop:"25px",
        marginRight:"10px"
    },
    idinterview:{
        color:"#bcb8b8"

    }




});




export default Styles