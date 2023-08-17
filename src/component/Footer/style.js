import { makeStyles } from "@material-ui/core";
import { colors } from "../../constant/constant";

const footerStyle = makeStyles((theme)=>({
    footerWrapper:{
        "& .site-footer": {
            padding: "50px",
            "& .footer-text":{
                textAlign: "center",
                color: colors.primary,
            },
        },
    }
})
)

export { footerStyle }