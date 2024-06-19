import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { BookmarkPage } from "./pages/BookmarkPage";
import { ButtonScrollTop } from "./components/ButtonScrollTop";
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
          </Routes>
          <ButtonScrollTop />
        </Layout>
      </BrowserRouter>
    </>
  );
}
