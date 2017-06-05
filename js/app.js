particlesJS.load('particles-js', 'js/vendor/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

