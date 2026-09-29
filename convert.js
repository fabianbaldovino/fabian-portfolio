const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, 'FOTOS', 'novas');
const destDir = path.join(srcDir, 'webp');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

async function convertAll() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, path.basename(file, ext) + '.webp');
      console.log(`Converting ${file}...`);
      try {
        await sharp(srcPath).rotate().webp({ quality: 82, effort: 6 }).toFile(destPath);
        console.log(`Successfully converted ${file}`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
      }
    }
  }
}

convertAll();
