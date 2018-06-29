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

var precacheConfig = [["README.md","de78c4d07304efe2533870fd29271663"],["image/face.png","6a99f0cf42899f4624ae6bd274f91be7"],["image/inception.jpg","2f367b15507f6938a57765991bc33949"],["image/intouchables.jpg","c78fbd7eddd7428cf60e1cb4f9d1c417"],["image/lesdeuxtours.jpg","fc4d72c7e6377caf4613146e6f17beda"],["image/new.png","a924c42194500833a8249c3e103b8514"],["image/shutterisland-.jpg","c42c8cfe4b25e36be9745d34c320ceab"],["image/thefall.jpg","bdab8a7161d64d9014516dada4b242c2"],["image/tou.png","3abdb6837082a5624269faa9342bef50"],["image/toutube.png","dfdd156007270bbd88f77b03b240acaa"],["image/twit.png","652da9871abbe752537c0a1983309b38"],["images/300-banner.jpg","777fd2a1c07cdc6e45c006a04c79d118"],["images/300-horiz.jpg","c7d5160e0f2d72a9c8bd7e07d0feb0a3"],["images/300.jpg","cb1d48226f2cd29c0126cce00701a54b"],["images/Survivestyle5-2004-comedie.jpg","a408fa2fa0f846cc1fdc2b4ea5382c27"],["images/WhatWeDoInTheShadows-2014-comedie.jpg","491828d6354a41540bbb6ca86b241f4d"],["images/back-future.jpg","be5809cfd6042459c0b6623d30eab2a8"],["images/batmanmovie-2017-comedie.jpg","9c78e3f4430beaa61de5b60745c0daa1"],["images/dark knight rises.jpg","96950fb32854fb12f26e2e1ab6c09a77"],["images/dark-knight-rises-banner.jpg","591fd684710f21970d26a45a1bbae393"],["images/deadpool-banner.jpg","dd036b5e016115296f58ba76db0aa49e"],["images/deadpool.jpg","988edfdc524628d55eca8f137d61150e"],["images/django.jpg","111d65d691ca77862932ff5a8cbda097"],["images/finding-forrester-banner.jpg","e84cc05866c92d30381a74ce80cf8e82"],["images/finding-forrester-horiz.jpg","1c3046a1ce6745c5de574125e5222990"],["images/finding-forrester.jpg","5499143dff6e2477d6ff85cf1d7f9651"],["images/ghostbusters.jpg","4252edcd4cdf380a87db61cbf0ca3489"],["images/hostel-2005-thriller.jpg","14d6664907f24e7e4f653b0df9bf9913"],["images/inception-2010-scifi.jpg","2f367b15507f6938a57765991bc33949"],["images/inception-banner.jpg","80d20c21ac35308d1780a0e3df862640"],["images/inglorious-bastards.jpg","b6dce3226340db9b2ecb6facc02ecc2e"],["images/intouchables-2011-comedie.jpg","c78fbd7eddd7428cf60e1cb4f9d1c417"],["images/ironman.jpg","6a47f2feac397563f6b268e440842edf"],["images/kill-bill.jpg","6cec4a0933fc6fdc5670f258a431b282"],["images/lepatientanglais-1996-dramatique.jpg","bc924b6eb59f1fba8689c28781a37a0d"],["images/lesdeuxtours-2002-aventure.jpg","fc4d72c7e6377caf4613146e6f17beda"],["images/map-marker.png","abb1056238408f2d6676bf437921c9a1"],["images/neon-demon.jpg","ecf2f0305f9a78d7b08ac1e56818b5bf"],["images/pulp-fiction.jpg","a3054150a05ff339b88b0291651f5561"],["images/seven-1995-thriller.jpg","74ef9c0e9fb5a2acdef1069511800c66"],["images/shutterisland-2010-thriller.jpg","c42c8cfe4b25e36be9745d34c320ceab"],["images/skyfall.jpg","3353ebad4e66a4438ed2596b953dd9a4"],["images/starwarsempire-1980-scifi.jpg","bf9de158b8de06b1ce388ae878fd0c67"],["images/storks.jpg","21f6b5666bb18b9aaee4e3f0715aad47"],["images/swissarmyman-2016-comedie.jpg","47b11318fd017f3c35b62a5f9d41b306"],["images/the-martian-banner.png","293768f95ae4b4c73c7a8269cdcab632"],["images/the-martian.jpg","bd27717957312c7662309eccfec0149a"],["images/the-perks-horiz.jpg","227f513625c5ac7356b6c0692d2adb2e"],["images/the-town.jpg","24d28da49d1148b5f66b3269342a0cba"],["images/thefall-2006-dramatique.jpg","bdab8a7161d64d9014516dada4b242c2"],["images/troy-horiz.jpg","3e31704ace4bf98cb7ec3ce9345b67c7"],["images/zoolander-2001-comedie.jpg","171a174d77ac70f48860ef40f5be9944"],["index.html","62f78bf0ad178e309c4c937559b3954c"],["java.js","050b30c3d85919b3dcbe1519e062dbea"],["manifest.json","e2d9c78b8ccbaf279d8ffb16ac58623b"],["movies.json","a60bda5b7b98eeb66b1ca87b4fc438a6"],["newsletter.html","355f8211386d28f89404a0f7f9a5c87c"],["style.css","6ef93021e657b11bdb9415398dacd600"]];
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







