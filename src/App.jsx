import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { publicDir } from "./routes/routes";
import { routes } from "./routes/links";

function App() {
  const { home } = routes;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {publicDir.map((publicRoute) => (
            <Route {...publicRoute} key={publicRoute.path} />
          ))}

          <Route element={<></>} path={home} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
