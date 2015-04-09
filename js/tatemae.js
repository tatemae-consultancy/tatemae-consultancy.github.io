var counter = 0;
var services = [
  "Accessibility",
  "Email Marketing",
  "E-commerce",
  "Ruby",
  "Ruby on Rails",
  "API's",
  "Shopify",
  "Internet Consulting",
];

function rotateServices() {
  $(".js-services").text(services[counter++]);
  if (counter >= services.length) {counter = 0};
}

$(document).ready(function() {
  $('main').fadeIn({duration: 3000});
  setInterval(rotateServices, 5000);
});