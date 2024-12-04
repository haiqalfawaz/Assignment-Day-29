import React from "react";

// import components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Book from "./Components/Book Room/Book";
import Facilities from "./Components/Facilities/Facilities";
import SpecialOffers from "./Components/Special Offers/SpecialOffers";
import FacilitiesPrice from "./Components/Facilities Price/FacilitiesPrice";
import Footer from "./Components/Footer/Footer";

// import picture
import logo from "./assets/Logo.png";
import heroImage from "./assets/Hero-Image.png";
import conferenceMeeetings from "./assets/Conference&Meetings.png";
import dining from "./assets/Dining.png";
import room from "./assets/Room.png";
import wedding from "./assets/Wedding.png";
import servicesFacilities from "./assets/Service&Facilities.png";
import honeyMoon from "./assets/Honeymoon.png";
import meetings from "./assets/Meetings.png";
import romanticDining from "./assets/Romantic-Dining.png";
import footerLogo from "./assets/Logo-footer.png";

// import icon
import { FaPerson } from "react-icons/fa6";

const App = () => {
  const navList1 = ["Home", "About", "Newsletter"];
  const navList2 = ["Rooms", "Services", "Pricing"];
  const faciltiesList = [
    {
      id: 1,
      image: room,
      description: "Rooms",
    },
    {
      id: 2,
      image: dining,
      description: "Dining",
    },
    {
      id: 3,
      image: servicesFacilities,
      description: "Services & Facilities",
    },
    {
      id: 4,
      image: conferenceMeeetings,
      description: "Conference & Meetings",
    },
    {
      id: 5,
      image: wedding,
      description: "Wedding Package",
    },
  ];

  const facilitiesPriceList = [
    {
      id: 1,
      image: honeyMoon,
      facility: "Room",
      title: "Honeymoon",
      icons: <FaPerson />,
      capacity: 2,
      description: "Indulge in a Memorable One-Time Romantic Dinner for Two",
      price: 699,
    },
    {
      id: 2,
      image: meetings,
      facility: "Room",
      title: "Meetings",
      icons: <FaPerson />,
      capacity: 30,
      description:
        "Experience an Exclusively Private Environment to Boost Your Productivity",
      price: 999,
    },
    {
      id: 3,
      image: romanticDining,
      facility: "Dining",
      title: "Romantic Dining",
      icons: <FaPerson />,
      capacity: 2,
      description: "Indulge in a Memorable One-Time Romantic Dinner for Two",
      price: 499,
    },
  ];

  const footerList = [
    "About us",
    "FAQ",
    "Services & Facilities",
    "Contact",
    "Term of Use",
    "Careers",
    "Location",
    "Privacy Police",
    "How To Book",
  ];

  return (
    <div>
      <Navbar logo={logo} navList1={navList1} navList2={navList2} />
      <Hero heroImage={heroImage} />
      <Book />
      <Facilities facilities={faciltiesList} />
      <SpecialOffers />
      <FacilitiesPrice facilitiesPriceList={facilitiesPriceList} />
      <Footer logo={footerLogo} footerList={footerList} />
    </div>
  );
};

export default App;
