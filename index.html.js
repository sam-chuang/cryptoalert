import { dirname, resolve } from "path"
import { fileURLToPath } from "url"
import fs from "fs-extra"

const rootDirectory = process.cwd()
const buildDirectory = resolve("./dist")
console.log("rootDirectory", rootDirectory, "buildDirectory", buildDirectory)

const serviceWorkerPath = resolve("./src/service-worker.js")
console.log("serviceWorkerPath", serviceWorkerPath)

//TODO: get version from package.json
const document = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Cryptoalert Me</title>
    <link rel="manifest" href="./manifest.json">
    <script>
        if('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
        }
    </script>
  </head>

  <body>
    <div id="app"></div>

    <script type="module">
      import app from './index.js'
      app(document.getElementById("app"))
    </script>
  </body>
</html>
`

fs.outputFileSync(`${buildDirectory}/index.html`, document)
