import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // Sem isto o lint não tinha regra nenhuma: import morto, variável não usada
  // e <img> sem otimização passavam direto.
  ...coreWebVitals,
  ...typescript,
];

export default eslintConfig;
