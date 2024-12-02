// === Booking Hotel === //
const bookingHotel = () => {


console.log("\n== Hotel Terpopuler ==");

const hotelList = [
    {name: "Hotel Sunset", harga: 600000, fasilitas:["AC", "Kolam Renag","TV"]},
    {name: "Hotel Sunrise", harga: 300000, fasilitas:["WI-FI", "Sarapan Pagi", "Mobil"]},
    {name: "Hotel Patra", harga: 700000, fasilitas:["AC", "TV", "Motor"]},
];

hotelList.forEach((hotel, index) => {
    console.log(`hotel ${index + 1}: ${hotel.name}, harga: Rp ${hotel.harga.toLocaleString()}, Fasilitas: ${hotel.fasilitas.join(",")}`);
});
}
bookingHotel();
