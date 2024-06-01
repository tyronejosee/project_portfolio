import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
            <Route path="/" element={<HomePage />} />
            <Route path="/bookmarks" element={<BookmarkPage />} />
            <Route path="/example" element={<Example />} />
            <Route path="/project_portfolio/" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
