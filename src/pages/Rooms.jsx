import { NavLink } from "react-router-dom";

export const Rooms = () => {
  return (
    <section className="roomsSection">

      <h1>Våra rum</h1>

      <div className="roomCard">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
          alt="Standard rum"
        />

        <div className="roomInfo">
          <h2>Standard</h2>
          <p>Ett elegant och bekvämt rum med dubbelsäng, skrivbord och modern inredning.</p>
          <p className="price">Från 1 295 kr / natt</p>

          <NavLink to="/booking" className="btnNav">
            Boka
          </NavLink>
        </div>
      </div>

      <div className="roomCard">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
          alt="Deluxe rum"
        />

        <div className="roomInfo">
          <h2>Deluxe</h2>
          <p>Rymligt rum med extra komfort, sittgrupp och fantastisk utsikt över staden.</p>
          <p className="price">Från 1 895 kr / natt</p>

          <NavLink to="/booking" className="btnNav">
            Boka
          </NavLink>
        </div>
      </div>

      <div className="roomCard">
        <img
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
          alt="Suite rum"
        />

        <div className="roomInfo">
          <h2>Suite</h2>
          <p>Vår mest exklusiva svit med separat vardagsrum, lyxigt badrum och premiumservice.</p>
          <p className="price">Från 3 495 kr / natt</p>

          <NavLink to="/booking" className="btnNav">
            Boka
          </NavLink>
        </div>
      </div>

    </section>
  );
};