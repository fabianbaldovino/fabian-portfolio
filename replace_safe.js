const fs = require('fs');
const path = require('path');

const replacements = {
  '/FOTOS/20260522_120207.jpg': '/FOTOS/fabian_baldovino_parque_moinhos_de_vento_porto_alegre_rs.webp',
  '/FOTOS/20260522_120207.webp': '/FOTOS/fabian_baldovino_parque_moinhos_de_vento_porto_alegre_rs.webp',
  '/FOTOS/IMG_0831.webp': '/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rs.webp',
  '/FOTOS/IMG_0831.png': '/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rs.webp',
  '/FOTOS/20260517_121306(0).jpg': '/FOTOS/fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp',
  '/FOTOS/DSC00053.jpg.jpeg': '/FOTOS/fabian_baldovino_montevideo_uruguay_pilotando_drone.webp',
  '/FOTOS/DSC00053.jpg': '/FOTOS/fabian_baldovino_montevideo_uruguay_pilotando_drone.webp',
  '/FOTOS/20260517_103203.jpg': '/FOTOS/fabian_baldovino_casa_de_cultura_mario_quintana_producao_audiovisual_porto_alegre_rs.webp',
  '/FOTOS/2.jpg': '/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rio_grande_do_sul.webp',
  '/FOTOS/20260503_093522.jpg': '/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rio_grande_do_sul_cinema.webp',
  '/FOTOS/20260606_092002.jpg': '/FOTOS/fabian_baldovino_feir_ecologia_bom_fim_porto_alegre_rio_grande_do_sul.webp',
  '/FOTOS/3.jpg': '/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento.webp',
  '/FOTOS/20260522_093422.jpg': '/FOTOS/fabian_baldovino_moinhos_de_vento_porto_alegre_Rio_grande_do_sul.webp',
  '/FOTOS/Referencia_capa.png': '/FOTOS/capa_o_codigo_brasil_fabian_baldovino.webp',
  '/FOTOS/CAPA_REEL_KALWYN.png': '/FOTOS/capa_kalwyn_producao_audiovisual_fabian_baldovino.webp',
  '/FOTOS/og-image.jpg': '/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp',
  'fabian.art.br/FOTOS/og-image.jpg': 'fabian.art.br/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp',
  'fabian.art.br/FOTOS/20260522_093422.jpg': 'fabian.art.br/FOTOS/fabian_baldovino_moinhos_de_vento_porto_alegre_Rio_grande_do_sul.webp'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  for (const [oldPath, newPath] of Object.entries(replacements)) {
    newContent = newContent.split(oldPath).join(newPath);
  }
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
