// ==UserScript==
// @name     Checklist Species counts first
// @version  1.0.0
// @description Split the species list and show those species with counts first
// @include  https://ebird.org/view/checklist/*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js
// @namespace https://github.com/ProjectBabbler/ebird/
// @author smackay
// @copyright 2018 Stuart MacKay (https://github.com/ProjectBabbler/ebird-superscripts)
// @license MIT
// @homepage https://github.com/ProjectBabbler/ebird-superscripts
// @grant    none
// ==/UserScript==

(function() {
    'use strict';

    var presence_list;
    var count;

    $('.d-spp-wrap').parent().append('<div class="d-spp-wrap" style="margin-top: 2em;"><table id="spp-presence" class="d-spp"><tbody></tbody></table></div>');

    presence_list = $('#spp-presence tbody');

    $('.se-count').each(function () {
        count = $(this).contents().text().trim();
        if (count === 'X') {
            $(this).closest('.spp-entry').appendTo(presence_list);
        }
    });

})();
