import { makeStyles } from "@material-ui/core";
import { colors } from "../../constant/constant";

const loginStyle = makeStyles((theme)=>({
    loginWrapper: {
        "& .container": {
          padding: "5px 10px",
          "& .heading": {
            margin: "10px auto",
          },
          "& .login-row": {
            display: "flex",
            justifyContent: "space-between",
            margin: "0 220px",
            "@media (max-width: 767px)": {
              flexWrap: "wrap",
            },
            "& p": {
              color: colors.lightTextColor,
              fontWeight: 300,
              fontSize: "15px",
              marginBottom: "16px",
              "&.text-danger": {
                fontSize: "14px",
                color: colors.primary,
              },
            },
            "& .content-col": {
              maxWidth: "40%",
              flex: "0 0 50%",
              padding: "0 15px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              "@media (max-width: 767px)": {
                maxWidth: "100%",
                flex: "0 0 100%",
                marginTop: "10px",
              },
              "& .btn-wrapper": {

                "@media (max-width: 816px)": {
                  marginTop: "30px",
                  fontSize: "10px"
                },
              },
            },
            "& .form-block": {
              maxWidth: "40%",
              flex: "0 0 50%",
              padding: "0 15px",
    
              "@media (max-width: 767px)": {
                maxWidth: "100%",
                flex: "0 0 100%",
                marginTop: "35px",
              },
              "& .MuiInputBase-formControl": {
              },
              "& .form-row-wrapper": {
                maxWidth: "390px",
                width: "100%",
                "@media (max-width: 767px)": {
                  maxWidth: "100%",
                },
                "& .form-col": {
                  marginBottom: "20px",
                  "& .MuiFormLabel-root": {
                    marginBottom: "8px",
                }
                },
              },
              "& .forgot-password-link": {
                color: colors.primary,
                fontWeight: "300",
              },
              "& .btn-wrapper": {
                marginTop: "25px",
                "& .btn": {
                  minWidth: "110px",
                  padding: "0 15px",
                  "@media (max-width: 767px)": {
                    fontSize: "18px",
                  },
                },
              },
            },
          },
        },
      },
}))

export { loginStyle };