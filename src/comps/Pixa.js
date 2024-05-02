import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Pixa = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [images, setImages] = useState([]);
  const searchQuery = searchParams.get("s") || "";

  const fetchImages = async (query) => {
    const apiKey = "43678745-18d8dcf93b68599c9610e3dd1";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      query
    )}&image_type=photo&pretty=true`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages(searchQuery);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "80%",
          margin: "0 auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchParams({ s: e.target.value })}
          placeholder="Search for images..."
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          width: "80%",
          margin: "0 auto",
        }}
      >
        {images.map((image) => (
          <a
            key={image.id}
            href={image.largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.webformatURL}
              alt={image.tags}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pixa;
