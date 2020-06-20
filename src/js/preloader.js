const preloader = document.querySelector('#preloader'),
  percDisplay = document.querySelector('#load-perc');

let images = document.images,
  imagesTotalCount = images.length,
  imagesLoadedCount = 0;

for (let i = 0; i < imagesTotalCount; i++) {
  let imageClone = new Image();
  imageClone.onload = imageLoaded;
  imageClone.onerror = imageLoaded;
  imageClone.src = images[i].src;
}

function imageLoaded() {
  imagesLoadedCount++;
  percDisplay.innerHTML =
    (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';

  if (imagesLoadedCount >= imagesTotalCount) {
    setTimeout(function () {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 1000);
  }
}
