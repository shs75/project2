import React from 'react'

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    return (
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            Wir freuen uns, Sie zwischendurch begrüßen zu dürfen {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    );
  }
  function Order({ closeHour, openHour }) {
    return (
      <div className="order">
        <p>
          wir haben geöffnet von {openHour}:00 bis {closeHour}:00. Besuchen Sie
          uns oder bestellen Sie online.
        </p>
        <button className="btn">Bestellen</button>
      </div>
    );
  }
  export default Footer