const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const img1 = path.join('FOTOS', 'novas', 'fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.jpg');
const dest1 = path.join('public', 'FOTOS', 'fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp');

const finalImg2 = path.join('FOTOS', 'novas', 'fabian_baldovino_montevideo_uruguay_pilotando_drone.jpeg');
const dest2 = path.join('public', 'FOTOS', 'fabian_baldovino_montevideo_uruguay_pilotando_drone.webp');

async function fix() {
  try {
    // 270 degrees clockwise is 90 degrees counter-clockwise
    await sharp(img1).rotate(270).webp({ quality: 82, effort: 6 }).toFile(dest1);
    console.log('Fixed img1 (Seival Sul)');
    
    await sharp(finalImg2).rotate(270).webp({ quality: 82, effort: 6 }).toFile(dest2);
    console.log('Fixed img2 (Quick House)');
  } catch(err) {
    console.error(err);
  }
}
fix();
