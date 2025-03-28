import "./globals.css";


export const metadata = {
  title: "Veed Clone",
  description: "Veed.io clone with Mantine UI and Dropzone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
