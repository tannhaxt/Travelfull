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
    <div>
      <Header />
      <Container className="py-4">
        <HotelSearchSection />
        <Row className="mt-4">
          <Col md={3}>
            <FilterCard />
          </Col>
          <Col md={9}>
            <FilterBar onCategoryChange={handleCategoryChange} />
            {activeCategory === "hotels" && <HotelList />}
            {/*  Thêm các component danh sách khác cho Chuyến bay, Địa điểm vui chơi, Nhà hàng */} 
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ResultSearch;