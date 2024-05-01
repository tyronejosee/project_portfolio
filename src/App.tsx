import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { BookmarkPage } from "./pages/BookmarkPage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main paths */}
            <Route path="/" element={<HomePage />} />
            <Route path="/bookmarks" element={<BookmarkPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
