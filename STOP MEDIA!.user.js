// ==UserScript==
// @name         STOP MEDIA!
// @namespace    vamonos.stop.media
// @version      1.0
// @description  Stops media playback when the player leaves the visible screen.
// @author       V4M0N0S
// @license      MIT
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    window.addEventListener('scroll', function() {
        var mediaElements = document.querySelectorAll('video, audio');
        mediaElements.forEach(function(mediaElement) {
            var rect = mediaElement.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                mediaElement.pause();
            }
        });
    });
})();