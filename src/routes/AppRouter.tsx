import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { CategoryPage } from "@/pages/CategoryPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { TemplateDemoPage } from "@/pages/TemplateDemoPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="plantilla/:slug/:tier" element={<TemplateDemoPage />} />
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="categoria/:slug" element={<CategoryPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
