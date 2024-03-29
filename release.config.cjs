module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        presetConfig: {},
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        pkgRoot: 'dist',
      },
    ],
    '@semantic-release/github',

    // NOTE: this plugin must be last to ensure all updated files are committed
    '@semantic-release/git',
  ],
};
