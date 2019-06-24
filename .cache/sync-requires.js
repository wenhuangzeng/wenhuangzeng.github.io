const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/wenhuangzeng/Desktop/wenhuangzeng/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/wenhuangzeng/Desktop/wenhuangzeng/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/wenhuangzeng/Desktop/wenhuangzeng/src/pages/projects.js")))
}

