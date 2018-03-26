// ==UserScript==
// @name     Checklist hide age table
// @namespace https://github.com/ProjectBabbler/ebird/
// @version  1.0.1
// @grant    none
// @include  https://ebird.org/*/view/checklist/*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js
// @description Hide the table showing the counts for age and sex
// @copyright 2018 Stuart MacKay (https://github.com/ProjectBabbler/ebird-superscripts)
// @homepage https://github.com/ProjectBabbler/ebird-superscripts
// @author smackay
// @license MIT
// @updateURL https://openuserjs.org/meta/smackay/checklist_hide_age_table.meta.js
// ==/UserScript==

(function() {
    'use strict';

    $('.sd-data-age-sex').each(function () {
        $(this).parent().addClass('hidden');
    });

})();
