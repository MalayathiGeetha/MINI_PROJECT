import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';

const trainData = [
    { trainNumber: '12345', trainName: 'Express 1', from: 'Kadapa', to: 'Tirupati', date: '2025-03-21', time: '02:00', price: 200 },
    { trainNumber: '67890', trainName: 'Express 2', from: 'Kadapa', to: 'Hyderabad', date: '2025-03-21', time: '08:00', price: 250 },
    { trainNumber: '54321', trainName: 'Superfast 3', from: 'Kadapa', to: 'Chennai', date: '2025-03-22', time: '10:00', price: 300 }
];

const Hero = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to || !date || !time || seats <= 0) {
      alert("Please fill all fields properly!");
    } else {
      navigate(`/results?from=${from}&to=${to}&date=${date}&time=${time}&seats=${seats}`);
    }
  };

  return (
    <section className="bg-black text-white py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-2">
        Reserve Your Train <span className="text-purple-500">Tickets</span> Now
      </h1>
      <p className="text-gray-400 mb-6">
        Find and book your train tickets with just a few clicks!
      </p>

      <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-full mb-8 transition duration-300 ease-in-out">
        Reserve Seat Now
      </button>

      <div className="bg-gray-900 p-4 rounded-lg shadow-lg mx-auto max-w-4xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
            />
            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-3 rounded bg-white text-black border border-gray-700"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-3 rounded bg-white text-black border border-gray-700"
            />
            <input
              type="number"
              placeholder="Total Seat"
              min="1"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 w-full p-3 rounded-full font-semibold transition duration-300 ease-in-out"
          >
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
};

const Results = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const from = queryParams.get('from');
  const to = queryParams.get('to');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const seats = queryParams.get('seats');
  const navigate = useNavigate();

  const availableTrains = trainData.filter(train => 
    train.from.toLowerCase() === from.toLowerCase().trim() &&
    train.to.toLowerCase() === to.toLowerCase().trim() &&
    train.date === date &&
    train.time === time
);

  return (
    <div className="text-center p-50">
        <br></br><br/><br/><br/><br/>
      <h1 className="text-4xl font-bold">Available Trains</h1>
      <p>From: {from}, To: {to}</p>
      <p>Date: {date}, Time: {time}</p>
      <p>Seats: {seats}</p>

      {availableTrains.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {availableTrains.map((train) => (
            <li key={train.trainNumber} className="p-2 border rounded bg-black-200">
              {train.trainName} ({train.trainNumber})
              <button
                className="bg-blue-500 ml-4 p-2 rounded"
                onClick={() => navigate(`/booking?train=${train.trainNumber}&seats=${seats}`)}
              >Book Ticket</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-red-500">No trains available.</p>
      )}
    </div>
  );
};

const Booking = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const trainNumber = queryParams.get('train');
  const seats = queryParams.get('seats');
  const train = trainData.find(train => train.trainNumber === trainNumber);
  const totalPrice = train.price * seats;
  const navigate = useNavigate();
  if (!train) {
    return <p className="text-red-500 text-center mt-4">Train not found!</p>;
  }

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Confirm Your Booking</h1>
      <p>Train: {train.trainName} ({train.trainNumber})</p>
      <p>Seats: {seats}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <button className="bg-green-500 p-2 mt-4 rounded" onClick={() => navigate('/confirmation')}>Confirm Booking</button>
    </div>
  );
};
const BookingConfirmation = () => (
    <div className="text-center p-10">
        <br></br><br/><br/>
      <h1 className="text-4xl font-bold text-green-500">Your Tickets Have Been Booked Successfully!</h1>
      <p>Thank you for choosing our service. Have a safe journey!</p>
    </div>
  );
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/results" element={<Results />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/confirmation" element={<BookingConfirmation />} />
    </Routes>
  );
};

export default App;
