import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import "./grid.scss";
import "./globals.scss";

export const metadata: Metadata = {
    metadataBase: new URL("https://pastellab.theurban.studio"),
    title: "Pastel Lab - The Urban Studio",
    description: "Pastel Lab by The Urban Studio",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    alternates: {
        canonical: "https://pastellab.theurban.studio",
        languages: {
            "en-NG": "/en-NG",
            "en-GH": "/de-GH",
        },
    },
    openGraph: {
        title: "Pastel Lab - The Urban Studio",
        description: "Pastel Lab by The Urban Studio",
        images: "https://pbs.twimg.com/card_img/1876029518747508736/aLfcXHKr?format=jpg&name=medium",
        url: "https://pastellab.theurban.studio",
        siteName: "Pastel Lab by The Urban Studio",
    },

    keywords: [
        "Pastel Lab",
        "Clone",
        "Pastel Lab by The Urban Studio",
        "The Urban Studio",
        "David Chikabadu Ogwu-Nelson",
        "David Chika",
        "The Urban Dev",
    ],
    applicationName: "Pastel Lab by The Urban Studio",
};

export const viewport: Viewport = {
    themeColor: "#000000",
    initialScale: 1,
    width: "device-width",
    maximumScale: 1,
};

const inter = Inter({
    subsets: ["latin"], // Specify subsets you need
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
