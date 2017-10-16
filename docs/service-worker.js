importScripts('workbox-sw.prod.v2.0.3.js');

const workboxSW = new self.WorkboxSW();

workboxSW.precache([
  {
    "url": "golf-web.7c7e31ecadd5e3ef39cf7bd8190e9e55ee87934c20165bded8e26c16319cc346.js",
    "revision": "066a50eca4bdac49bbd6be498bfc6404"
  },
  {
    "url": "golf-web.7c7e31ecadd5e3ef39cf7bd8190e9e55ee87934c20165bded8e26c16319cc346.js.map",
    "revision": "d24f0779356de299919b8b45cc7c800f"
  },
  {
    "url": "index.html",
    "revision": "173aacf5a80bf7f0a3a06b2013b51774"
  },
  {
    "url": "manifest.json",
    "revision": "ab2c5cff85f54fa42b80323bde420e4a"
  }
]);
