import  { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const createAccountStyle = makeStyles((theme) => ({
    createAccount: {
        "& .whole-component": {
            margin: "5px 10px auto 10px",
            "& .component-heading": {
                textAlign: "center",
                margin: "10px auto 10px auto",
                borderBottom: "200px",
                "& p":{
                    "& b":{
                        color: colors.primary,
                    }
                },
            },
            "& .details-collection": {
                margin: "auto 25%",
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: " 0 15px",
                // flexWrap: "wrap",
                maxWidth: "50%",
                flex: "0 0 50%",
                // position: "relative",
                "& .text-danger": {
                    color: colors.primary,
                    margin: "0",
                },
                "& .btn": {
                    maxWidth: "100px",
                },
                "& .end-line": {
                    display: "flex",
                    marginTop: "15px",
                    "& .old-user": {
                        position: "absolute",
                        display: "flex",
                        flex: "wrap",
                        right: "27%",          
                    },
                    "@media (max-width: 540px)": {
                        display: "block",
                        position: "relative",
                        margin: "auto",
                    },
                },
                "& .MuiFormLabel-root": {
                    marginBottom: "8px",
                }
            },
        },
    },
}));

export { createAccountStyle };