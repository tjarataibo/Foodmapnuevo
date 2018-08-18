// funcionalidad para que  "salte" de splah (y loading) a la página principal
(function() {
  var preload = document.getElementById('splash');
  var loading = 0;
  var id = setInterval(frame, 30);
     
  function frame() {
    if (loading === 100) {
      clearInterval(id);
      window.open('principal.html', '_self');
    } else {
      loading = loading + 1;
      if (loading === 90) {
        preload.style.animation = 'fadeout 1s ease';
      }
    }
  }
})();