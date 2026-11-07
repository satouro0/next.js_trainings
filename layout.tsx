// import Link from "next/link";
// import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/Theme-provider";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
        {/* <Navbar/> */}
        
        </body>
    </html>
  );
}
