// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "TamoNaModa",
  description: "Loja de moda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex min-h-screen">
          {/* ASIDE fixo */}
          <aside className="w-40 bg-blue-700 text-white py-6">
            <ul className="space-y-3 p-2">
              <li>Menu</li>
              <p>Eletrônicos</p>
              <p>Acessórios</p>
              <p>Masculino</p>
              <p>Feminino</p>
            </ul>
          </aside>

          {/* Área principal */}
          <div className="flex flex-col flex-1">
            {/* HEADER fixo */}
            <header className="flex items-center justify-center p-6 bg-black text-white text-3xl">
              <h1>TamoNaModa</h1>
            </header>

            {/* MAIN dinâmico */}
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
