import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
const p = await b.newPage();
await p.setViewportSize({width:2560,height:1440});
await p.goto('file://'+process.cwd()+'/capa.html'); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(400);
await p.screenshot({path:'capa.png'});
await p.evaluate(()=>document.body.classList.add('debug'));
await p.screenshot({path:'capa_guias.png'});
await b.close();
