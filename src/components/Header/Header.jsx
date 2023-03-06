import React from "react";
import SearchForm from "../SearchForm/SearchForm";
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content flex flex-c text-center">
          <h2 className="header-title">Search your book</h2>
          <br />
          <SearchForm />
        </div>
      </header>
    </div>
  );
};
export default Header;
