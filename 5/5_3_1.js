function preloadImages(sources, callback) {

  Promise.all( sources.map(item => {
      const img = document.createElement("img");
      document.body.append(img);
      img.src = item;

      return new Promise(((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
      }))
  })).then(() => {
      callback();
  })
}