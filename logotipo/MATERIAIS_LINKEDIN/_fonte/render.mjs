import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch();
const p = await b.newPage({viewport:{width:1584,height:396},deviceScaleFactor:2});
await p.goto('file://'+process.cwd()+'/capa.html'); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(400);
await p.screenshot({path:'capa@2x.png'});
await p.evaluate(()=>document.body.classList.add('debug'));
await p.screenshot({path:'capa_guias.png'});
await b.close();
