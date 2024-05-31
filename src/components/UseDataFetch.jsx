import { useState } from "react";
import { initialData } from "../Data/Data";

const UseDataFetch = () => {
  const initial_Data = initialData;

  const [data, setData] = useState(initial_Data);
  const [loading, setLoading] = useState(false);

  return { data, loading };
};

export default UseDataFetch;
