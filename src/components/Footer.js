import react from "react";
import '../styles.css';

export default function Footer(){
    const currrentYear= new Date().getFullYear()

    return (<footer className="footer">
        <p className="footer-text">© {currrentYear} Moviedux, All rights reserved.</p>

    </footer>)
}