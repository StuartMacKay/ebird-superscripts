// ==UserScript==
// @name     Recent visits observer blacklist
// @namespace https://github.com/ProjectBabbler/ebird/
// @version  2.0.1
// @grant    none
// @include  https://ebird.org/region/*/activity*
// @include  https://ebird.org/hotspot/*/activity*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js
// @description Hide checklists from selected observers on the recent visits page for a region or hotspot
// @copyright 2018 Stuart MacKay (https://github.com/ProjectBabbler/ebird-superscripts)
// @homepage https://github.com/ProjectBabbler/ebird-superscripts
// @author smackay
// @license MIT
// @updateURL https://openuserjs.org/meta/smackay/recent_visits_blacklist.meta.js
// ==/UserScript==

(function() {
    'use strict';

    function hideObserver(name) {
        $('td[headers="observer"]').each(function () {
            if (name ===  $(this).data('observer')) {
                $(this).closest('tr').addClass('hidden');
            }
        });
    }

    $('td[headers="observer"]').each(function () {
        let name = $(this).contents().text().trim().replace(/\s{2,}/, ' ');
        $(this).prepend('<span style="font-weight: normal;" title="Hide all checklists from ' + name + '">x</span> ');
        $(this).data('observer', name);
        $(this).children(":first").click(function () {
            hideObserver(name);
        });
    });

})();
