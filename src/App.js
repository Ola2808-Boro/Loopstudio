import React, { useEffect, useContext } from "react";
import MainPage from "views/MainPage";
import { dataContext } from "providers/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getData from "hooks/getData";
function App() {
  const { setData, data } = useContext(dataContext);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      console.log(data);
      setData(data?.data);
    }
    fetchData();
  }, []);

  return (
    Object.keys(data).length !== 0 && (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
