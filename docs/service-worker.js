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
    "url": "images/icons/icon-256x256.png",
    "revision": "0d1f0991fc8bb32cd84ef69d21558831"
  },
  {
    "url": "images/icons/icons-128.png",
    "revision": "622e4eb49019bddd8ae8662741423e36"
  },
  {
    "url": "images/icons/icons-16.png",
    "revision": "2eeb6889f692adf5caf9cef33935b902"
  },
  {
    "url": "images/icons/icons-22.png",
    "revision": "ea28102f563ddf01c499c2c9a1b7d95f"
  },
  {
    "url": "images/icons/icons-256.png",
    "revision": "3b4ad34fb4cdbb4e9ce4bab545d26db1"
  },
  {
    "url": "images/icons/icons-32.png",
    "revision": "dc81b73c43b5ecdcde4571b1f5b0ec21"
  },
  {
    "url": "images/icons/icons-48.png",
    "revision": "bacf38563b7ace0576728639f0e30562"
  },
  {
    "url": "images/icons/icons-512.png",
    "revision": "12d20219a9a001a81a69e11ae1dfb11f"
  },
  {
    "url": "images/icons/icons-64.png",
    "revision": "2174caf4a5350e57e03c44a7271b5026"
  },
  {
    "url": "index.html",
    "revision": "a83670335aabd7512c3221db82ee7551"
  },
  {
    "url": "manifest.json",
    "revision": "dff686a3a2559d08d0cc4884e3e4b636"
  },
  {
    "url": "service-worker.js",
    "revision": "216fdf20b00ebc5e755c9b7f77a3c330"
  }
]);
