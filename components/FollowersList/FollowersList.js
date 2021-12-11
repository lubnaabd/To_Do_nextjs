import React, { useEffect, useState } from "react";

import axios from "axios";
import FollowersListComponent from "./FollowersListComponent";

function FollowersList(props) {
  return <FollowersListComponent followers={props.followers} />;
}

export default FollowersList;
