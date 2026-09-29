const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const originalSrc = path.join('FOTOS', 'novas', 'fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.jpg');
const dest = path.join('public', 'FOTOS', 'fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp');

async function fix() {
  try {
    // Calling rotate() without arguments auto-rotates the image based on its EXIF Orientation tag
    await sharp(originalSrc).rotate().webp({ quality: 82, effort: 6 }).toFile(dest);
    console.log('Fixed Seival Sul from original EXIF');
  } catch(err) {
    console.error(err);
  }
}
fix();
