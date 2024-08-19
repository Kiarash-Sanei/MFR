import "@/app/ui/global.css";
import Navigation from "./ui/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>M|F|R</title>
        <link
          rel="icon"
          href="https://www.svgrepo.com/show/512317/github-142.svg"
        />
      </head>
      <body>
        <Navigation haveSearch={true} />
        {children}
      </body>
    </html>
  );
}
