import React from 'react'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Brot mit italienischem Olivenöl und Rosmarin",
      price: 16,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomaten, Mozzarella, Spinat und Ricotta-Käse",
      price: 15,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomate und Mozzarella",
      price: 10,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomaten, Mozzarella, Pilze und Zwiebeln",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomate, Mozzarella und Peperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomaten, Mozzarella, Schinken, Aragula und Burrata-Käse",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
      <main className="menu">
        <h2>Unser Speisekarte</h2>
  
        {numPizzas > 0 ? (
          <>
            <p>
              Authentische italienische Küche. 6 kreative Gerichte zur Auswahl.
              Alles aus unserem Steinofen, alles Bio, alles lecker.
            </p>
  
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObject={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>
            Wir arbeiten noch an unserer Speisekarte. bitte komme später zurück :)
          </p>
        )}
      </main>
    );
  }
  
  function Pizza({ pizzaObject }) {
    return (
      <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObject.photoName} alt={pizzaObject.name} />
        <div>
          <h3>{pizzaObject.name}</h3>
          <p>{pizzaObject.ingredients}</p>
          <span>{pizzaObject.soldOut ? "ausverkauft" : pizzaObject.price}</span>
        </div>
      </li>
    );
  }

  export default Menu