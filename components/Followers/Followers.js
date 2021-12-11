import React from "react";
import FollowersList from "../FollowersList/FollowersList";
import Header from "../Header/Header";
import styles from "./Followers.module.css";
import Banner from "../Banner/Banner";

export default function Followers({followers}) {
  return (
    <>
      <Banner />
      <div className={styles.followers}>
        <Header title="Followers" />
        <FollowersList followers={followers}/>
      </div>
    </>
  );
}
