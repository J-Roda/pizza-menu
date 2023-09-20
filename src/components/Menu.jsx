/* eslint-disable react/no-unescaped-entities */
import Pizza from "./Pizza";
import data from "../assets/data.json";

const Menu = () => {
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {data.length > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {data.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our Menu</p>
            )}
        </main>
    );
};

export default Menu;
