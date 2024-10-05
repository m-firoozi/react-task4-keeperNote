import styles from "./footer-style.module.css"
const Footer=()=>{
    const d=new Date()
    let year=d.getFullYear();
    return(
        <>
        <p className={styles.copyright}>copyright © {year}</p>
        </>
    )
}
export default Footer;