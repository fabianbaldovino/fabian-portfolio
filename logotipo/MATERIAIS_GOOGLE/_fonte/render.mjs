import { chromium } from 'playwright';
const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
const p = await b.newPage();
for (const [f,w,h,out] of [['capa.html',2048,1152,'capa.png'],['logo.html',1080,1080,'logo.png']]) {
  await p.setViewportSize({width:w,height:h});
  await p.goto('file://'+process.cwd()+'/'+f); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(400);
  await p.screenshot({path:out});
}
await b.close();
