const sharp = require('sharp');
const path = require('path');

const srcFile = path.join('public', 'FOTOS', 'fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp');
const tempFile = path.join('public', 'FOTOS', 'temp.webp');

async function fix() {
  await sharp(srcFile).rotate(180).webp({ quality: 82, effort: 6 }).toFile(tempFile);
  const fs = require('fs');
  fs.renameSync(tempFile, srcFile);
  console.log('Rotated 180');
}
fix();
