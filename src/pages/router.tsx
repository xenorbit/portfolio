import React from 'react';
import { Routes, Route } from "react-router-dom";
import PublicLayout from './public/PublicLayout';
import NotFoundPage from './public/NotFound';
import HomePage from "./public/HomePage";
import ImpressumPage from './misc/ImpressumPage'
import PrivacyPage from './misc/PrivacyPage'
import TermsPage from './misc/TermsPage'
import BlogList from './blogs/BlogList';
import BlogDetail from './blogs/BlogDetail';

export const AppRouter = () => {

    return (
        <React.Fragment>
            <Routes >
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route element={<PublicLayout />}>
                    <Route path="/impressum" element={<ImpressumPage />} />
                    <Route path="/terms-of-use" element={<TermsPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPage />} />
                    <Route path="/blogs" element={<BlogList />} />
                    <Route path="/blogs/:blogId" element={<BlogDetail />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>

            </Routes>
        </React.Fragment>
    )
}