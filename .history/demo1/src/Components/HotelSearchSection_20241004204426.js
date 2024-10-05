import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/header";
import FilterBar from "../Components/FilterBar";
import HotelSearchSection from "../Components/HotelSearchSection";
import FilterCard from "../Components/FilterCard";
import HotelList from "../Components/HotelList";
import Footer from "../Components/footer";

const ResultSearch = () => {
  const [activeCategory, setActiveCategory] = useState("hotels");

  const handleCategoryChange = (value) => {
    setActiveCategory(value);
  };

  return (
    <div className="result-search-page px-4 px-lg-5"> {/* Thêm class và padding */} 
      <Container className="px-0"> {/* Loại bỏ padding mặc định của Container */}
        <Header />

        <HotelSearchSection>  {/*  Chuyển FilterBar vào  HotelSearchSection */} 
          <FilterBar onCategoryChange={handleCategoryChange} /> 
        </HotelSearchSection> 

        <Row className="mt-4">
          <Col md={3}>
            <FilterCard />
          </Col>
          <Col md={9}>
            {activeCategory === "hotels" && <HotelList />}
            {/*  Thêm các component danh sách khác cho Chuyến bay, Địa điểm vui chơi, Nhà hàng */} 
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
};

export default ResultSearch;