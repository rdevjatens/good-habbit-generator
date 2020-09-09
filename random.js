jQuery(document).ready(function(){
  var randomNumber = Math.random();

 jQuery("#randomize").click(function(){
   jQuery("#random-number").text(randomNumber);
 });
});
