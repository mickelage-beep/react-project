import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="front">
        <div>
          <h1>Välkommen till Grand Hotel</h1>
          <p>En exklusiv upplevelse mitt i stadens hjärta</p>

          <NavLink to="/booking" className="btnFront">
            Boka ditt rum
          </NavLink>
        </div>
      </section>

      <section className="about">
        <div>
          <h2>Ett klassiskt hotell med modern komfort</h2>

          <p>
            Grand Hotel erbjuder eleganta rum, förstklassig service
            och ett perfekt läge nära till stranden men ändå centralt.
          </p>
        </div>
      </section>
    </>
  );
}
