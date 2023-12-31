"use client";
import classes from "./HomePage.module.css";
import "../../globals.css";
import { useState } from "react";

function HomePage() {
  const [selectedTag, setSelectedTag] = useState("");

  const explainInputChangeHandler = (e: any) => {
    // console.log(e.target.value);
  };

  const selectTagClickHandler = (e: any) => {
    setSelectedTag(e.target.innerHTML);
  };

  return (
    <section className={classes.homePage}>
      <div className={`sectionContainer ${classes["home-page-content"]} `}>
        <h1 className={`header-primary`}>A Journey Through Imagination</h1>
        <h2 className={`header-secondary ${classes["home-page-header-secondary"]}`}>We illustrate only what you desire from your imagination!</h2>
        <div className={classes["home-page-input-container"]}>
          <input
            className={classes["home-page-input"]}
            placeholder="Explain what you want or use the following tags"
            type="text"
            onChange={explainInputChangeHandler}
            value={selectedTag}
          />
          <button>Create</button>
          <ul>
            Popular Tags:
            <li onClick={selectTagClickHandler}>Human</li>
            <li onClick={selectTagClickHandler}>Car</li>
            <li onClick={selectTagClickHandler}>Animal</li>
            <li onClick={selectTagClickHandler}>Girl</li>
            <li onClick={selectTagClickHandler}>Creativity</li>
            <li onClick={selectTagClickHandler}>Nature</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
