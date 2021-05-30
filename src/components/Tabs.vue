<template>
<div class="tabs tabs-full">
  <input id="tab1" type="radio" name="tabs" class="tab-input" checked />
  <label for="tab1" class="tab-label"><i class="material-icons">Commute</i> Client Requests</label>
  <input id="tab2" type="radio" name="tabs" class="tab-input" />
  <label for="tab2" class="tab-label"><i class="material-icons">Email</i> Emails</label>
  <input id="tab3" type="radio" name="tabs" class="tab-input" />
  <label for="tab3" class="tab-label"><i class="material-icons">Analytics</i> API Calls</label>
  <div class="tabs-wrap">
    <div class="tab" id="tab1content"><p>Lorem ipsum dolor sit amet, consectetur nisirabitur blandit tempus porttitor. dolor sit adipiscing elit, sed do eiusmod tempor.</p></div>
    <div class="tab" id="tab2content"><p>Morbi at nunc vel diam dictum eleifend et ut est. Sed sed justo rutrum, fringilla est a, iaculis nulla.</p></div>
    <div class="tab" id="tab3content"><p>Quisque pellentesque nibh massa. Integer sollicitudin neque metus</p></div>
  </div>
</div>
</template>

<style scoped>

@import "https://fonts.googleapis.com/icon?family=Material+Icons";

body {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5em;
}

p {
    margin: 0 0 1rem 0;
}

.material-icons {
  vertical-align: middle;
  line-height: 0;
  margin-top: -5px;
}

/*
 * Tabs
 */

.tabs {
    padding: 0;
}

.tabs .tab-input {
    display: none;
}

.tabs .tab-label {
    color: #ddd;
    cursor: pointer;
    float: left;
    padding: 1em;
    text-align: center;
}

.tabs-full .tab-label {
    display: table-cell;
    float: none;
    width: 1%;
}

.tabs .tab-label:hover {
    color: #333;
}

.tabs .tab-input:checked + .tab-label {
    background-color: #fff;
    color: #333;
}

.tabs .tabs-wrap {
    clear: both;
}

.tabs .tab {
    background-color: #fff;
    display: none;
    padding: 1em;
}

.tabs .tab > *:last-child {
    margin-bottom: 0;
}

#tab1:checked ~ .tabs-wrap #tab1content,
#tab2:checked ~ .tabs-wrap #tab2content,
#tab3:checked ~ .tabs-wrap #tab3content {
    display: block;
}
</style>>