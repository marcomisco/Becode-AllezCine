/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","de78c4d07304efe2533870fd29271663"],["image/face.png","aeef18600e4e36bbc5b64348d606dfc6"],["image/inception.jpg","2f367b15507f6938a57765991bc33949"],["image/intouchables.jpg","ef1bd465346d1aa2e3be999720d15226"],["image/lesdeuxtours.jpg","70a93fadd64024cc19823202186dc3b1"],["image/new.png","fa7c97f6d9a2e12c0f1109e86b52c991"],["image/shutterisland-.jpg","0cf8822af62289cc261e2d37fa4ac857"],["image/thefall.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["image/tou.png","58caf19a60e80b0ac3a10bfb640cd53b"],["image/toutube.png","8272a7292c9fcea339729f7e2241da75"],["image/twit.png","8487887782153ba4b9fc499d402f988f"],["images/300.jpg","c7d5160e0f2d72a9c8bd7e07d0feb0a3"],["images/Survivestyle5-2004-comedie.jpg","0577b93654886419df9ca9aa3e5eb5f3"],["images/WhatWeDoInTheShadows-2014-comedie.jpg","1bd64d0f8c424193a9d5dbc687d2dea4"],["images/back-future.jpg","76955633086ec463f6d75cce84c97ebc"],["images/batmanmovie-2017-comedie.jpg","f500614ad3574ea531c9e8a20f5523e2"],["images/dark knight rises.jpg","89209033988519b6b8888d6cd4fd577a"],["images/dark-knight-rises-banner.jpg","3d60fcb2fc21e19f7c41ff28935ecdd7"],["images/deadpool-banner.jpg","f388a3e3e4d3f13f2aa664b5868d2e76"],["images/deadpool.jpg","aacee0aa28418e0daae624942f2663ae"],["images/django.jpg","111d65d691ca77862932ff5a8cbda097"],["images/finding-forrester-1.jpg","f78279da8ece156f19ac8b342162a021"],["images/ghostbusters.jpg","012f8c625af8ba408e3d50e918bb1a75"],["images/hostel-2005-thriller.jpg","fe2d26fd855a3fc64352ce5c4d35bf06"],["images/inception-2010-scifi.jpg","2f367b15507f6938a57765991bc33949"],["images/inception-banner.jpg","7cba7dc5f300686d087bff487ce0cf46"],["images/inglorious-bastards.jpg","ae2c218443d90d83f2c9d8fa52886109"],["images/intouchables-2011-comedie.jpg","ef1bd465346d1aa2e3be999720d15226"],["images/ironman.jpg","0f431ae790a70348036f847e06c08b7d"],["images/kill-bill.jpg","324074c4c13bf1683c61216ba8570c8f"],["images/lepatientanglais-1996-dramatique.jpg","388096519d756894eeff4853ee36d5a4"],["images/lesdeuxtours-2002-aventure.jpg","70a93fadd64024cc19823202186dc3b1"],["images/map-marker.png","7543cf3229cf0fb2c316f53c0acbb862"],["images/neon-demon.jpg","3b9aeaf3ee961cc4e5e02e22df8b4339"],["images/pulp-fiction.jpg","f2885b7b7035871c7976050472307062"],["images/seven-1995-thriller.jpg","c327ade356c3dda4bca1eb653b84d682"],["images/shutterisland-2010-thriller.jpg","0cf8822af62289cc261e2d37fa4ac857"],["images/skyfall.jpg","3043285708cb4ec22cabb281f9579263"],["images/starwarsempire-1980-scifi.jpg","6a6c65cfdf4d6b42258840e7fbd7b211"],["images/storks.jpg","21f6b5666bb18b9aaee4e3f0715aad47"],["images/swissarmyman-2016-comedie.jpg","5f8224d8d43b36a66c197eeb4bd4864f"],["images/the-martian.jpg","bd27717957312c7662309eccfec0149a"],["images/the-town.jpg","24d28da49d1148b5f66b3269342a0cba"],["images/thefall-2006-dramatique.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["images/theperks.jpg","227f513625c5ac7356b6c0692d2adb2e"],["images/troy.jpg","3e31704ace4bf98cb7ec3ce9345b67c7"],["images/zoolander-2001-comedie.jpg","14fdef0e95ee53aeaad0d8d38b0f99c4"],["index.html","6ae52d49eb214ee594ef86c6138eba58"],["java.js","050b30c3d85919b3dcbe1519e062dbea"],["manifest.json","e2d9c78b8ccbaf279d8ffb16ac58623b"],["movies.json","aa6d219eea7e0f9ef179d338960092f9"],["newsletter.html","355f8211386d28f89404a0f7f9a5c87c"],["style.css","b6364917d5cbf8e125f7f2a843502644"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







