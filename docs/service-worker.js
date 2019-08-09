importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const workboxSW = new self.WorkboxSW();

workboxSW.precacheAndRoute([
  {
    "url": "golf-web.f4af378b40529b56df94d137399dbb18caf80c93a0a638ccee9f5f3a6dca1f10.js",
    "revision": "5411181077abf4684dc7980d35642605"
  },
  {
    "url": "golf-web.f4af378b40529b56df94d137399dbb18caf80c93a0a638ccee9f5f3a6dca1f10.js.map",
    "revision": "38085e37e4dfc03716337bb20614bdf3"
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
    "url": "images/Old-Course-mobile.png",
    "revision": "a155a47337a97448af58eb95314cbb77"
  },
  {
    "url": "images/Old-Course-mobile.webp",
    "revision": "7a88d2fc7ce30c0698f380455be92c5e"
  },
  {
    "url": "images/Old-Course-St-Andrews-Links-Trust-min.png",
    "revision": "3accc35a8c2ab00d9da9949ee4cb6ddf"
  },
  {
    "url": "index.html",
    "revision": "4f82d07944e48042fc8fd493f14bba7b"
  },
  {
    "url": "manifest.json",
    "revision": "dff686a3a2559d08d0cc4884e3e4b636"
  },
  {
    "url": "workbox-sw.prod.v2.1.0.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  },
  {
    "url": "workbox-sw.prod.v2.1.0.js.map",
    "revision": "6fc68cbf40e4e2f38d2889fdaf5bc58a"
  }
]);
