import React, { useState } from "react";
import { Banner } from "../../components/Pet/Banner";
import { Search } from "../../components/Pet/Search";

export const BannerContainer = () => {
  const [type, setType] = useState("all");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  return (
    <div style={{ position: "relative" }}>
      <Banner handleChangeType={handleChangeType} type={type} />
      <Search />
    </div>
  );
};
