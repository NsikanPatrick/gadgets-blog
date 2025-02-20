const Footer = () => {
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
      }
      
    return (
        <div className="footer">
            <h2>Gadgets Blog</h2>
            <p>&copy; Gadgets Blog {getCurrentYear()}</p>
        </div>
    )
}

export default Footer;