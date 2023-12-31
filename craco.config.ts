import path from "path";

export const resolvePath = (p: string) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@": resolvePath("./src/"),
    },
  },
};
