// ==UserScript==
// @name     Checklists
// @version  1.0.1
// @description Various changes to make checklist pages more readable
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

// This script contains all the fixes and changes needed to make the pages showing
// the checklist for a location more readable so it is easy to see what's been seen.
// It contains the functions from the following scripts:
//
//   checklists_counts_first
//   checklists_hide_age_table


(function() {
  'use strict';

  // Move species where only presence was noted to the end of the checklist.
  // This performs the same function as the checklists_counts_first script.

  let count;

  $('.Observation-numberObserved').each(function () {
    count = $(this).find('span span:last-child').contents().text().trim();
    if (count === 'X') {
      $(this).closest('li').appendTo('main#list > ol');
    }
  });

  // Hide the age & sex table for each species.
  // This performs the same function as the checklists_hide_age_table script.

  $('.Observation-meta-item-label').each(function () {
    count = $(this).contents().text().trim();
    if (count === 'Age & Sex:') {
      $(this).parent().addClass('is-visuallyHidden');
    }
  });

})();
