import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 80, 90, 100],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536, 1920],
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        // thumbnails de video usados nos cards do Journal
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    // /especialidades deixou de hospedar cases de cliente e passou a hospedar
    // as especialidades de serviço. Os slugs antigos de cliente consolidam
    // em /projetos/{slug}, que é onde a narrativa do case passou a viver.
    const casosMigrados = [
      "termolar",
      "seival-sul-mineradora",
      "quick-house",
      "copelmi",
      "ristorante-fontana",
      "wedy-nutrition",
    ];

    return [
      ...casosMigrados.map((slug) => ({
        source: `/especialidades/${slug}`,
        destination: `/projetos/${slug}`,
        permanent: true,
      })),
      {
        // Galeria de bastidores foi descontinuada — manda para o hub.
        source: "/especialidades/bastidores",
        destination: "/projetos",
        permanent: true,
      },
      {
        // Artigo renomeado: "O Código Cultural" é o livro do Clotaire Rapaille.
        // O método autoral é "O Código Brasil".
        source: "/conteudo/codigo-cultural-forca-brand-filmmaking-wedy",
        destination: "/conteudo/codigo-brasil-forca-brand-filmmaking-wedy",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://images.unsplash.com https://img.youtube.com; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com; frame-src 'self' https://www.youtube.com https://www.instagram.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
