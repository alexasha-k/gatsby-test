// You can delete this file if you're not using it
// exports.onClientEntry = async () => {
//     console.log(IntersectionObserver)
//     if (typeof IntersectionObserver === 'undefined') {
//         await import('intersection-observer')
//     }
// }

exports.onClientEntry = async () => {
  // This is Native intersection observer
  console.log("Browser Intersection observer: ", IntersectionObserver);

  // To test require, import polyfill in modern browser we delete
  // native code
  delete window.IntersectionObserver;
  delete window.URLSearchParams;
  delete window.AbortController;

  // then we che
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer");
  }
  if (typeof URLSearchParams === "undefined") {
    require("url-search-params-polyfill");
  }
  if (typeof AbortController === "undefined") {
    await require("abortcontroller-polyfill");
  }

  console.log("After await import: ", IntersectionObserver);
  console.log("After require: ", URLSearchParams);
  console.log("After await require: ", AbortController);

  if (typeof IntersectionObserver === "undefined") {
    console.log("no intersection observer param");
  }
  if (typeof URLSearchParams === "undefined") {
    console.log("no search param");
  }
  if (typeof AbortController === "undefined") {
    console.log("no abort controller");
  }
};
