const proxyBox = document.getElementById('proxyBoxContainer');
const fullscreenBtn = document.getElementById('fullscreenProxyBox');
const exitFullscreenBtn = document.getElementById('exitFullscreenProxyBox');

fullscreenBtn.addEventListener('click', function() {
  if (proxyBox.requestFullscreen) {
    proxyBox.requestFullscreen();
  } else if (proxyBox.webkitRequestFullscreen) {
    proxyBox.webkitRequestFullscreen();
  } else if (proxyBox.msRequestFullscreen) {
    proxyBox.msRequestFullscreen();
  }
});

exitFullscreenBtn.addEventListener('click', function() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
});

// Show/hide fullscreen/exit buttons based on fullscreen state
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement === proxyBox) {
    fullscreenBtn.style.display = 'none';
    exitFullscreenBtn.style.display = 'block';
  } else {
    fullscreenBtn.style.display = 'block';
    exitFullscreenBtn.style.display = 'none';
  }
});