import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { BookmarkPage } from "./pages/BookmarkPage";
import { Example } from "./components/Example";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main paths */}
            <Route path="/project_portfolio/" element={<HomePage />} />
            <Route
              path="/project_portfolio/bookmarks"
              element={<BookmarkPage />}
            />
            <Route path="/project_portfolio/example" element={<Example />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
