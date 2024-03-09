import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="title"
          content="ICGC Kabod presents Youth Alive Conference 2024"
        />
        <meta
          name="description"
          content="Experience empowerment, inspiration, and connection at the Youth Alive Conference 2024. "
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.youth-alive-conference.com/"
        />
        <meta property="og:title" content="Youth Alive Conference 2024" />
        <meta
          property="og:description"
          content="Experience empowerment, inspiration, and connection at the Youth Alive Conference 2024. "
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dznr6aomp/image/upload/v1709731982/YOUTH_ALIVE_2024.SC_s9lwln.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.youth-alive-conference.com/"
        />
        <meta
          property="twitter:title"
          content="ICGC Kabod presents Youth Alive Conference 2024"
        />
        <meta
          property="twitter:description"
          content="Experience empowerment, inspiration, and connection at the Youth Alive Conference 2024. "
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dznr6aomp/image/upload/v1709731982/YOUTH_ALIVE_2024.SC_s9lwln.jpg"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
