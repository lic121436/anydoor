const path = require('path');

const mimeTypes = {
  css: "text/css",
  gif: "image/gif",
  html: "text/html",
  xml: "text/xml",
  ico: "image/x-icon",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  tiff: "image/tiff",
  js: "text/javascript",
  json: "application/json",
  pdf: "application/pdf",
  swf: "application/x-shockwave-flsh",
  txt: "text/palin",
  wav: "audio/x-wav",
  wma: "audio/x-ms-wma",
  wmv: "video/x-ms-wmv"
};

module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();

    if(!ext){
      ext = filePath;
    }

    return mimeTypes[ext] || mimeTypes['txt'];
};