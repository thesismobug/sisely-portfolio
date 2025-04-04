/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // The repository name
  const repoName = 'sisely-portfolio'
  assetPrefix = `/${repoName}/`
  basePath = `/${repoName}`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Don't specify distDir here, let Next.js use the default 'out'
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
}

module.exports = nextConfig