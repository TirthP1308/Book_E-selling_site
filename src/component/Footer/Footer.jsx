import React from "react";
import { footerStyle } from "./style"

export const Footer = () => {
    const classes = footerStyle();

    return(
        <div className={classes.footerWrapper}>
            <footer className="site-footer">
                <div className="footer-text">
                    <p>Hope you are enjoying the combing.</p><br/>
                    <p>© Copyright. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}