module.exports = {
  release: {
    branches: ['main'],
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist',
      },
    ],
  ],
};