import {loadConfig} from 'unconfig'



export async function hello() {
  const {config, sources} = await loadConfig({
    sources: [
      {
        files: 'my.config',
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
      },
    ],
    merge: false,
  })
  console.log(config)
}
