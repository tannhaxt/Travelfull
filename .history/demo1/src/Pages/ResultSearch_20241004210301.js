import React from 'react';
import Header from '../Components/header'; // Import component header
import FilterBar from '../Components/FilterBar'; // Import component filter bar
import HotelSearchSection from '../Components/HotelSearchSection'; // Import component hotel search section
import FilterCard from '../Components/FilterCard'; // Import component filter card
import HotelList from '../Components/HotelList'; // Import component hotel list
import Footer from '../Components/footer'; // Import component footer
import '../Style/ResultSearch.css'; // Import CSS file

const ResultSearch = () => {
  return (
    <div className="result-search-page">
      {/* Header Section */}
      <Header />

      <div className="main-content">
        {/* Filter Bar */}
        <FilterBar />

        <div className="search-content">
          {/* Filter Card */}
          <div className="filter-card">
            <FilterCard />
          </div>

          {/* Hotel Search Section */}
          <div className="hotel-section">
            <HotelSearchSection />
            <HotelList />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ResultSearch;
