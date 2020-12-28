import { createMuiTheme } from "@material-ui/core";



export const Theme = createMuiTheme({




    overrides: {
        MuiTypography: {
            root: {
                    fontSize:"2rem !important",
                    color: "#5ea9dd",
                    fontWeight:"bold"


            }
        }
    }

})