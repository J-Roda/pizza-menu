/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <>
            {isOpen ? (
                <footer>
                    {new Date().toLocaleTimeString()}. We're currently open
                </footer>
            ) : (
                <footer>
                    {new Date().toLocaleTimeString()}. Sorry we're close
                </footer>
            )}
        </>
    );
};

export default Footer;
