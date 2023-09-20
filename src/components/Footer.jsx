import Order from "./Order";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to serve you between {openHour}:00 and{" "}
                    {closeHour}
                    :00.
                </p>
            )}
        </footer>
    );
};

export default Footer;
