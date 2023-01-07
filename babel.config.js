module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/app/config',
        '@models': './src/app/models',
        '@controllers': './src/app/controllers',
        '@daos': './src/app/daos',
        '@routes': './src/app/routes',
        '@services': './src/app/services',
        "@errors/*": ["./src/app/errors/*"]
      }
    }]
  ],
  ignore: [
    '**/*.test.ts'
  ]
}
