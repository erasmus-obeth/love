import type { Metadata } from "next";
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deborah",
  description: "Happy Birthday Deborah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className} bg-[#07070a] text-white`}>
        
        {children}
      </body>
    </html>
  )
}




// import "./globals.css";



// export const metadata: Metadata = {
//   title: "Love",
//   description: "Love expression app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`$ antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
