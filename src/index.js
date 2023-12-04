import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Brot mit italienischem Olivenöl und Rosmarin",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomaten, Mozzarella, Spinat und Ricotta-Käse",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomate und Mozzarella",
      price: 12,
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
  

function App(){
    
    return (
      <>
        <Header />
        <Menu /> 
        <Footer />
      </>
    );
    }
    
    function Header() {
       // const style = {color: "red", fontSize: '51px', textTransform: "uppercase"};
       const style = {};

        return (
         <header className="header">
           <h1 style={style}>
           schnell Pizza Co.
           </h1>
         </header>
        );
    }
    function Menu() {
        const pizzas = pizzaData;
        //const pizzas = [];
        const numPizzas = pizzas.length;
        return (
         <main className="menu">
           <h2>Unser Speisekarte</h2>

           

            {numPizzas  > 0 ? (
                <>
                <p>
               Authentische italienische Küche. 6 kreative Gerichte zur Auswahl. Alles aus unserem Steinofen, alles Bio, alles lecker.
               </p>


             <ul className="pizzas"> 
               {pizzas.map((pizza) => (
                   <Pizza pizzaObject = {pizza} key={pizza.name} />
                   ))}

           </ul>
                   </>
           ) : (
            <p>Wir arbeiten noch an unserer Speisekarte. bitte komme später zurück :)</p>
           )}
           

           
           {/* <Pizza 
             name='Focaccia'
             ingredients='Brot mit italienischem Olivenöl und Rosmarin' 
             photoName='pizzas/focaccia.jpg' 
             price={10}
           />
           <Pizza
            name='Pizza Margherita'
            ingredients='Tomaten, Mozzarella, Spinat und Ricotta-Käse' 
            photoName='pizzas/margherita.jpg' 
            price={12}
           />
           <Pizza
            name='Pizza Spinaci'
            ingredients='Tomate und Mozzarella' 
            photoName='pizzas/spinaci.jpg' 
            price={20}
           />
           <Pizza
            name='Pizza Funghi'
            ingredients='Tomaten, Mozzarella, Pilze und Zwiebeln' 
            photoName='pizzas/funghi.jpg' 
            price={22}
           />
           <Pizza
            name='Pizza Salamino'
            ingredients='Tomate, Mozzarella und Peperoni' 
            photoName='pizzas/salamino.jpg' 
            price={15}
           />
           <Pizza
            name='Pizza Prosciutto'
            ingredients='Tomaten, Mozzarella, Schinken, Aragula und Burrata-Käse' 
            photoName='pizzas/prosciutto.jpg' 
            price={19}
           /> */}
           
         </main>
        );
    }

    function Pizza({pizzaObject}){
       // console.log(props);

        if(pizzaObject.soldOut) return null;
        return (
          <li className="pizza">
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
            <h3>{pizzaObject.name}</h3>
            <p>{pizzaObject.ingredients}</p>
            <span>{pizzaObject.price}</span>
            </div>
                 
          </li>
        );
    }
    function Footer() {
        const hour = new Date().getHours()
        const openHour = 12;
        const closeHour = 22;
        const isOpen = hour >= openHour && hour <= closeHour ;
       console.log(isOpen);

        // if(hour >= openHour && hour <= closeHour) alert("wir haben derzeit geöffnet");
        //  else alert("Tut mir leid, aber wir sind geschlossen");
        if(!isOpen)
         return(
             <p>
                GESCHLOSSEN
             </p>
         )
        return (
            <footer className="footer">
                {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} /> 
                ): (
                <p>Wir freuen uns, Sie zwischendurch begrüßen zu dürfen {openHour}:00 and {closeHour}:00.</p>
                )}
            </footer>

        );
        
        //<footer className="footer">{new Date().toLocaleTimeString()}. Wir haben derzeit geöffnet</footer>
        //return React.createElement('footer', null, "We're currently open")
    }
    function Order({closeHour, openHour}) {
return <div className="order">
<p>
    wir haben geöffnet von {openHour} bis {closeHour}:00. Besuchen Sie uns oder bestellen Sie online.
</p>
<button className="btn">Bestellen</button>
</div>
    } 
    
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode> 
     );