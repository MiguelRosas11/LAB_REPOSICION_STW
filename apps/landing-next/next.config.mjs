import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/LAB_REPOSICION_STW' : undefined,
  assetPrefix: isGithubPages ? '/LAB_REPOSICION_STW/' : undefined,
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
