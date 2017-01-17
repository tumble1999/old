---
title: 
layout: empty
---
<!-- Square card -->
<style>
.demo-card-square.mdl-card {
  width: 100%;
  height: 100%;
}

</style>

<div class="demo-card-square mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title mdl-card--expand">
    <h2 class="mdl-card__title-text cardTitle">Update</h2>
  </div>
  <div class="mdl-card__supporting-text cardText">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
  </div>
  <div class="mdl-card__actions mdl-card--border cardOptions">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      View Updates
    </a>
  </div>
</div>
<script>
$(function() {
$("cardTitle").text(getQueryVariable("title"));
$("cardText").text(getQueryVariable("text"));
});

function getQueryVariable(variable) {
     var query = window.location.search.substring(1);
     var vars = query.split('&');
 
     for (var i = 0; i < vars.length; i++) {
       var pair = vars[i].split('=');
 
       if (pair[0] === variable) {
         return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
       }
     }
   }
</script>