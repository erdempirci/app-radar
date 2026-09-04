import "./globals.css";

export const metadata = {
  title: "AppRadar - Uygulama Sürüm ve Özellik Rehberi",
  description: "En popüler uygulamaların yeni özellikleri ve gizli cevherleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-[#09090b] text-[#fafafa] antialiased">{children}</body>
    </html>
  );
}
