import React, { useEffect, useState } from "react";
import Followers from "../../components/Followers/Followers";
import MetaData from "../../components/MetaData";
import axios from "axios";

function Index(props) {

  return (
    <>
      <MetaData title={"Followers"} />

      <Followers followers={props.data} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("https://randomuser.me/api/?results=5");
  return {
    props: {
      data: data.results,
    },
  };
}

export default Index;
