'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2de80b7c9c59e6380483a46eb2c65483",
"index.html": "8a5b34cc7ddffdc4afda55be1eeca473",
"/": "8a5b34cc7ddffdc4afda55be1eeca473",
"main.dart.js": "5a999b6e0fde42ea3297a229d5b9d921",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "78e07108b4c6d3df865049c846dd349a",
".git/config": "ac53ad3c3f56722ef2c0f32e118bc6bc",
".git/objects/03/054beb0f8e95732c2400e90cb7cf897af222a2": "87322e3c4ad5a2eddeb4d0d1f3f56b32",
".git/objects/9b/aa32472fc58189013b23b8e0a9394342d9d11b": "5c8a171e31dcc867326c3485f3c44e0b",
".git/objects/9e/85e934831bfda403d11b593f1c12b810dbf91f": "74bd49a0b6863d56d77ca8c82c0c7295",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/93/07570a1e6e9bff5fa6cc13ca43525172f78ffa": "aa22b76c7021c2870507b8bba4f026b5",
".git/objects/93/51e0dc0c2482d93c20511fa583e91c9cc20827": "6932ca687b9392d76c1dc6d14d16fbd9",
".git/objects/5a/2d4a559745769533852d079088afedf7452e46": "888bcdad3c4be1e39ca2d88ba9d3a40f",
".git/objects/a4/2ce31eaceb0655e1b5efc1e3d4d343fb788de9": "8451790c3179bbbb3df6a9821de3fecd",
".git/objects/d9/e5827344baeca14ba3acb9129f02fd9565492f": "407223e605076a338981f5c7eba56e84",
".git/objects/ac/7c12608bbb2604a61a7a92a363a70d14b69fc4": "3682585a23ac22cc9dc790c8fc27efb6",
".git/objects/ad/f6576f3a7770c4ff4cb80e8b5ea9572b6bfaae": "bcfc1771d29cc2aa5b11607d1ed5e73d",
".git/objects/be/22464e56459f15800283fca394661839636412": "ba7abe586878ce14265ff3df924770e3",
".git/objects/a2/559bf77e2b79c74d6a43337d4cc1fc28db1bf6": "911c0f38f4b22309aee81b7bac56cd5e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b4932a947b7da0fe22d4b12162af6027ed5969": "cee7bd2cf1f56410feb7f717f92da74c",
".git/objects/f5/97b214e845cd3abab3444443e68a31e66f8e71": "8ae4a276be07b28b214eccebde3de71d",
".git/objects/f5/b38cf237abbdabbbd92765e2638b46ae60330e": "40b541506ed5e2a8732b0abb1458348a",
".git/objects/ec/cc5bf3ebb57bd00d128fe611f86142820ef420": "1093a84862f85a23d48fc6d519335fd5",
".git/objects/4e/ccef918b1ddece629b4b10ff6f61381b1c5bfa": "e680a7b42fcd19a9def8130378c83d27",
".git/objects/18/c202bd5c52f7147d7a96834615cfe109150995": "fdd6c9bde706c72d0d1cca4adfbc8ef9",
".git/objects/27/8aa7303dd9fb6e4ef2ce3ee99c3cf9585d303f": "5c41f5367c3028a4d0dd49ed75020efb",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/29/68e85114f7c42c1c1a13f3319b361370897d9b": "84bcd2d1d415dca3215d97be9f5f37ce",
".git/objects/42/dc953c9a2b3530a06e43b6eebe28c6b23f0f9d": "8915ef52bc70921eb3d74e30167cf66e",
".git/objects/89/73ec4fd1c2dd53a1d2264c2912023372029d30": "6212ed3c71d36ecfc9e80440659d53c0",
".git/objects/45/2c05c392b08a0308fb533d239d4247a1ed2f66": "f9288e2cdd59ce0f122e20494d2ec2af",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/1a/dcbaf345158abe8e2ac75467a52d0396f6cfd3": "f5ed08c8f4d59b9f90b2508fc2968df7",
".git/objects/28/911d920d7a03edb6a6c543039e870821d10c69": "67af0a9a2219812938fc00ce3067711a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/30/561215b50cb48bcd8b8434f896a527572616af": "53c4e943fd1075db0abfe045dab8d8c8",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/29e26c817df2beeebe2bb4733625cf0c8d5e5c": "1098ab8b2518a018c583fe5e2a08d925",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/0690d4e76d808740e33bd7f6c1d14865421e96": "9b1fb2ca71c2f891b1240b3d219853a3",
".git/objects/0f/bab22773b9e89e1eeb8ea5c473e5fcac3ff8f0": "3a1d6ab64920f2802c67164a91c5a8c3",
".git/objects/dc/f2712b56ad5aae55f75506dca09191207868f2": "cfe93a2e0fc198c9226a3000248a4f84",
".git/objects/d2/b8a79ef76c8315e96313274f7888945c285bbe": "2676b1ef458a609481ab8a95f479446d",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/b6fdce1b56f0725b55b3aa8b246b8c1bc96ca6": "7f821ad3517d38f41d33487d5c7304b7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/2b5639a34a386cd785a40e790f99f791da3e86": "21fdb7d49c5295c5e06f8c33747fe1b4",
".git/objects/cc/b96032a1eb47bd0831dea2b4528144425305a2": "f6041e7c5bc2385850424334107e68da",
".git/objects/f0/2bdabd6b9509ed6f4c934dc585137dcc3fd860": "db60e131636f58d34d9b5a7d00187a9b",
".git/objects/fa/a34c26cdcfd075e1512fff4374884ceaab7f00": "dd9de998184f49f5ea89d386897264f2",
".git/objects/e9/eb234455def1b725ddb49e444e73628e942963": "ccdd0b799dd36517cadf5c82bc1f6c4e",
".git/objects/cb/636008a778c86b8368ee605b8dea4805e2e345": "ff0a67ef695de1b4aa1c947198e4ab0e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/8019b39d8127505384a5ee4c390558ecd1620a": "a283f96e663adc82cfccfb6044eff01e",
".git/objects/1e/f6a66fc7d142f658469df382ae764979bbf046": "05828123d3ff744f4cea6315bbe5e2bc",
".git/objects/84/0048db14e591b10eb20f548444704aec64b390": "1e5fc3aa9f7d96569655ea1e5ccaea0d",
".git/objects/4f/01123491eb4b470ec44bd551ea11137233de34": "1644baeb2d8044de56826c75333f38f7",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/9568c4d51154f1a075d982a9421913dbef084f": "f4da4bf6e3ef92cdf9691139d168f3b2",
".git/objects/8c/479f511e0c1e7a1c3e404b592b35f7ce97f161": "1ea4b77e630cb7879c6ef5068231a9ea",
".git/objects/1d/729985161c62e710b0f342a073274da8648c3f": "456d316ce48326cf3b4dcb346caddb5b",
".git/objects/2b/d0ba3eed932f3d1415270c33bc2aee186d9890": "e86a4ceaacb7e368d67bc263df01dc82",
".git/objects/8b/3e9b5a28970271e30fa62d2589cc11b9e59251": "716bd00298473c25107b7c9c4c2b8c5c",
".git/objects/14/dfa87a52edb9248b3a9c685c067dd619ba99f1": "2b4c8f5aa2056506438d866a529243ef",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4adb577e214062ea6eafc2d2eb0d9b43",
".git/logs/refs/heads/main": "add6912bc5634bfb80038cd0d21ceacb",
".git/logs/refs/remotes/origin/main": "892ba368b86ecdd29c043895d363bcb3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ca0fc10c392a98f5f4a52643313cf3b0",
".git/refs/remotes/origin/main": "ca0fc10c392a98f5f4a52643313cf3b0",
".git/index": "46f4ed2934a7ac49aa3fa59a28b4784d",
".git/COMMIT_EDITMSG": "ddf60c70759895c17add0c7c33a2865f",
"assets/AssetManifest.json": "5f6f183d713b810c82cae20e87f8ec4e",
"assets/NOTICES": "ded34dfe27ad6f0af1c61f0672ca9d77",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/musicwave.png": "25c8c71ef01b79163f3b6ca1619d1790",
"assets/assets/sounds/bliss.mp3": "72a4b3e83578c662bc87c522b583a4c4",
"assets/assets/sounds/puddle.mp3": "0f43270187c9c1555c68721e28c8ca07",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
