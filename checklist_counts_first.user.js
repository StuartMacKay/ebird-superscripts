// ==UserScript==
// @name     Checklist species counts first
// @version  1.0.1
// @description Move species with only presence noted to the end of the checklist
// @include  https://ebird.org/checklist/*
// @include  https://ebird.org/view/checklist/*
// @include  https://ebird.org/*/view/checklist/*
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

  let count;

  $('.Observation-numberObserved').each(function () {
    count = $(this).find('span span:last-child').contents().text().trim();
    if (count === 'X') {
      $(this).closest('li').appendTo('main#list > ol');
    }
  });

})();
