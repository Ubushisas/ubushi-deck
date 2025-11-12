import "./globals.css";

export const metadata = {
  title: "Spa Analytics Dashboard - See What Your Spa Could Be Making",
  description: "Stop losing money to empty slots and no-shows. Analytics dashboard for spas to optimize revenue, pricing, and bookings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
