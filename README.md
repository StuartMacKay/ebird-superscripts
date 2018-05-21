# eBird Superscripts

This is a collection of user scripts that can be used with the 
[greasemonkey](https://www.greasespot.net/)browser addon for Firefox, 
Chrome, etc., to make the web pages on eBird "better". 

## The scripts

The scripts performs various tweaks to a pages displaying the checklist
for a location or the list of visits to a location or region. The goal
is to make it easier to scan through the lists to see what's been seen.

### Recent Visits

For the Recent Visits page for a location or region, e.g.
[Lisboa, Portugal](https://ebird.org/region/PT-11/activity?yr=all&m=) there
are a variety of scripts. Roughly in descending order of usefulness:

**recent_visits_restore_visited.user.js** fixes the stylesheet so links to 
visited checklists show up as a different colour. I went for dark organge
so it clearly stands out from the light blue used by the eBird stylesheet.

![recent_visits_restore_visited.user.js](./screenshots/visited-link.png)

This makes it easy to see what checklists you've read, particularly if you
check the recent visits page regularly.

**recent_visits_blacklist.user.js** is arguably the most fun to use. There
is some guy called Stuart MacKay ;) who loves Feral Pigeons. Every day he 
submits a checklist for every pigeon he sees. This makes the recent visits
page for every site he visits and the entire region completely unusable since
the list is filled with useless checklists.

This script neatly solves the problem. It displays an 'x' next to each observer's 
name. Clicking on it hides every checklist for that person on the page.

![recent_visits_blacklist.user.js](./screenshots/blacklist.png)

Unfortunately the change is not permanent so you will need to repeat the process
every time you visit the page. The upside is that you will get a small kick of
satisfaction each time you nuke all those checklists.

**recent_visits_new_tab.user.js** opens each checklist in a new tab. This means
you avoid having to reload the Recent Visits page which can take a long time to 
load.

**recent_visits_coordinates.user/js** hides checklists which have the latitude
and longitude of a location in the title. These checklists are usually for
one-off visits, typically for a bird seen while driving along a road. Hiding 
these cuts the clutter on the Recent Visits page leaving only the sites you 
can visit.

![recent_visits_coordinates.user.js](./screenshots/coordinates.png)

2ª Circular is the main ring-road in Lisbon, Portugal. Going birding here is 
likely to get you run over.

There is a handy master script, **recent_visits.user.js** that 
contains all the features listed here. That means you only need to install the 
daughter scripts if you want to leave out a given feature.

### Checklists

The scripts for checklists are also intended to make it easy to quikcly read
through the list to see if anything cool has been seen.

**checklist_counts_first.user.js** moves the species where only the presence 
was noted to a new table at the end of the checklist.

![checklist_counts_first.user.js](./screenshots/counts-first.png)

**checklists_hide_age_table.user.js** aims to make it easy to quickly scan the
list of species seen but hiding the table showing species count broken down
by age and sex.

As with recent visits, there is a master script, **checklist.user.js**, that 
contains all the features.

## Repository

All the scripts can be found on [OpenUserJS](https://openuserjs.org/) when you
do a search with the [eBird](https://openuserjs.org/?q=eBird) keyword.

## License

eBird Superscripts is available under the terms of the 
[MIT](https://opensource.org/licenses/MIT) license.
