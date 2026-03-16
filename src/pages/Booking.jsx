import { NavLink } from "react-router-dom";
import { saveBooking } from "../script";
import { useState } from "react";

export const Booking = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("Välj rum");
  const [date, setDate] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    saveBooking(name, room, date);

    setName("");
    setRoom("Välj rum");
    setDate("");

    setConfirmed(true)

  }
  return (
    <section className="booking">
      {!confirmed && (
        <div className="bookingBox">
          <h1>Boka ditt rum</h1>

          <form onSubmit={handleSubmit}>

            <label>Namn</label>
            <input value={name} onChange={e => setName(e.target.value)} required />
            

            <label>Välj rum</label>
            <select value={room} onChange={e => setRoom(e.target.value)} required>
              <option>Välj rum</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>

            <label>Incheckningsdatum</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />

            <button type="submit" className="btnBook">
              Boka nu
            </button>

          </form>
        </div>
      )}
      {confirmed && (
        <div className="bookingBox">
          <h2>Bokningen är bekräftad!</h2>
          <p>Vi ser fram emot att välkommna dig.</p>

          <NavLink to="/" className="btnFront">
            Tillbaka till startsidan
          </NavLink>

        </div>
      )}

    </section>
  );
};