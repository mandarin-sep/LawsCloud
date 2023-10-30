import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Title from "./components/Title";
import WordCloudPage from "./pages/WordCloudPage";
import ComparedWordCloudPage from "./pages/ComparedWordCloudPage";

import Bills from "./pages/Bills";
import {getIp} from "./api/getIp";
import {useRecoilState} from "recoil";
import {userIp} from "./recoil/store";

function App() {
  const [, setIp] = useRecoilState(userIp);
  useEffect(() => {
    (async () => {
      const userIp = await getIp();
      setIp(userIp);
    })();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path="/" element={<WordCloudPage />} />
          <Route path="/main" element={<WordCloudPage />} />
          <Route path="/compare" element={<ComparedWordCloudPage />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
