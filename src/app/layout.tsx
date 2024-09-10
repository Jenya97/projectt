// src/app/layout.tsx
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import '../styles/globals.scss';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js project with SSR and TypeScript',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <Header />
        <main style={mainStyle}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

const bodyStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: '20px',
};

export default RootLayout;
