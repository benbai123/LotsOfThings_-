
const fs = require('fs');
const path = require('path');
const PNG = require("pngjs").PNG;

async function test () {
  let imgPath = path.join(__dirname, 'src.png');
  let destPath = path.join(__dirname, 'dest.png');

  await fs.createReadStream(imgPath)
    .pipe(
      new PNG({
        filterType: 4,
      })
    ).on("parsed", async function () {
      // 這裡 this 是 parse 後的 PNG object
      // 為了較能突顯語意, 使用另外的 helper object
      let pngHelper = getPNGHelper().wrap(this);
      let height = this.height;
      let width = this.width;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          // 若是很接近白色的 pixel 就改成透明
          let pixel = pngHelper.getPixel(x, y);
          if (pixel.r > 245 && pixel.g > 245 && pixel.b > 245) {
            pixel.a = 0;
            pngHelper.setPixel(x, y, pixel);
          }
        }
      }
      let writeStream = fs.createWriteStream(destPath);
      this.pack().pipe(writeStream);
      
      console.log('已將白色區塊轉為透明');
    });
}
function getPNGHelper () {
  return {
    png: null,
    getPixel(x, y) {
      let idx = (this.png.width * y + x) << 2;
      return {
        r: this.png.data[idx],
        g: this.png.data[idx+1],
        b: this.png.data[idx+2],
        a: this.png.data[idx+3]
      };
    },
    setPixel (x, y, pixel) {
      let idx = (this.png.width * y + x) << 2;
      this.png.data[idx] = pixel.r;
      this.png.data[idx+1] = pixel.g;
      this.png.data[idx+2] = pixel.b;
      this.png.data[idx+3] = pixel.a;
    },
    wrap(png) {
      this.png = png;
      return this;
    }
  };
}
test();