export function saveBooking(name, room, date) {
  const booking = { Name: name, Room: room, Date: date };

  const key = `booking_${Date.now()}`;

  localStorage.setItem(key, JSON.stringify(booking));
}