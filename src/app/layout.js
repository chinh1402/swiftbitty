import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import "./css/grid.css";
import "./css/responsive.css";  

export const metadata = {
  title: 'SwiftB',
  description: 'A design constructed by ching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
