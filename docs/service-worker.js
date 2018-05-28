importScripts('workbox-sw.prod.v2.1.0.js');

const workboxSW = new self.WorkboxSW();

workboxSW.precache([
  {
    "url": "golf-web.c364f696bebc191c09b0da581a50eea0861414c438ed12a097a786b0251774bc.js",
    "revision": "9673d4c62571d721f48910daf7bbc00f"
  },
  {
    "url": "golf-web.c364f696bebc191c09b0da581a50eea0861414c438ed12a097a786b0251774bc.js.map",
    "revision": "633828cbd02c72021dd1a199a94c2e24"
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
    "revision": "aa7a43bd4b9af81ebc6ece7a3e7358e9"
  },
  {
    "url": "manifest.json",
    "revision": "dff686a3a2559d08d0cc4884e3e4b636"
  },
  {
    "url": "service-worker.js",
    "revision": "211cfa8811d366758d5ef0a65ba1ec77"
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
