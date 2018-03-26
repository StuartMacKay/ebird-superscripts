// ==UserScript==
// @name     Recent visits location coordinates
// @namespace https://github.com/ProjectBabbler/ebird/
// @version  1.0.0
// @grant    none
// @include  https://ebird.org/region/*/activity*
// @include  https://ebird.org/hotspot/*/activity*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js
// @description Hide checklists where the location name contains latitude and longitude
// @copyright 2018 Stuart MacKay (https://github.com/ProjectBabbler/ebird-superscripts)
// @homepage https://github.com/ProjectBabbler/ebird-superscripts
// @author smackay
// @license MIT
// @updateURL https://openuserjs.org/meta/smackay/recent_visits_coordinates.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const coords = /\-?\d{1,2}[.,]\d{1,4}[,x] ?\-?\d{1,2}[.,]\d{1,4}/;

    $('td[headers="location"]').each(function () {
      let name = $(this).contents().text().trim();
      if (coords.test(name)) {
          console.log(name);
          $(this).parent().addClass('hidden');
      }
    });

})();
