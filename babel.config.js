module.exports = {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: 'Last 2 Chrome versions, Firefox ESR',
            node: '8.9',
          },
        },
      ],
    ],
    env: {
      build: {
        ignore: ['__snapshots__', '__tests__'],
      },
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    ignore: ['node_modules'],
};
