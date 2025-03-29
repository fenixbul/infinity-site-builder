// ui/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
        <Header />
        <main className={`mx-auto`}>
          {children}
        </main>
        <Footer />
    </div>
  );
}
