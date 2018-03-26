// ==UserScript==
// @name     Recent visits observer blacklist
// @namespace https://github.com/ProjectBabbler/ebird/
// @version  1.0.0
// @grant    none
// @include  https://ebird.org/region/*/activity*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js
// @description Hide checklists from certain observers on the recent visits page for a region or hotspot
// @copyright 2018 Stuart MacKay (https://github.com/ProjectBabbler/ebird-superscripts)
// @homepage https://github.com/ProjectBabbler/ebird-superscripts
// @author smackay
// @license MIT
// @updateURL https://openuserjs.org/meta/smackay/recent_visits_blacklist.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Add the names of the observers you want to exclude from the recent
    // visits page for a hotspot or region.

    const blacklist = ['Stuart MacKay']; // just an example ;)

    $('td[headers="observer"]').each(function () {
        let name = $(this).contents().text().trim().replace(/\s{2,}/, ' ');
        if (blacklist.includes(name)) {
            $(this).parent().addClass('hidden');
        }
    });

})();
