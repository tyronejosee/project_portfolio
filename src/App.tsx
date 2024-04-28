import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main paths */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
