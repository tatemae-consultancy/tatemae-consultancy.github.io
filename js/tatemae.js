function reposition() {
  console.log('Ran!');
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  aspectRatio = 16 / 9;
  windowAspectRatio = windowWidth / windowHeight;
  const backgroundSize = (windowAspectRatio > aspectRatio) ? windowWidth + 'px auto' : 'auto ' + windowHeight + 'px';
  const containers = document.getElementsByClassName('container');
  for (const container of containers) {
    container.style.backgroundSize = backgroundSize;
  }
  const tmps = document.getElementsByClassName('tmp');
  for (const tmp of tmps) {
    tmp.classList.add('faded');
  }
}

window.addEventListener("load", reposition);
window.addEventListener("resize", reposition);
