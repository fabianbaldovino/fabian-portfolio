from PIL import Image, ImageDraw, ImageFont
im=Image.open('capa@2x.png').convert('RGB')
im.save('../CAPA_linkedin_3168x792_alta.jpg',quality=95)
s=im.resize((1584,396),Image.LANCZOS); s.save('../CAPA_linkedin_1584x396.jpg',quality=95); s.save('../CAPA_linkedin_1584x396.png')
av=Image.open('../../MATERIAIS_GOOGLE/LOGO_google_meu_negocio_1080x1080.png').convert('RGBA')
B='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'; R='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
def mock(W,bh,avd,avx,avtop,out,fs):
  f=ImageFont.truetype(B,fs); f2=ImageFont.truetype(R,int(fs*.66))
  m=Image.new('RGB',(W,avtop+avd+int(fs*3.2)),(255,255,255)); m.paste(im.resize((W,bh),Image.LANCZOS),(0,0))
  d=ImageDraw.Draw(m); d.ellipse((avx-6,avtop-6,avx+avd+6,avtop+avd+6),fill=(255,255,255))
  a=av.resize((avd,avd),Image.LANCZOS); mk=Image.new('L',(avd,avd),0); ImageDraw.Draw(mk).ellipse((0,0,avd-1,avd-1),fill=255)
  m.paste(a,(avx,avtop),mk); y=avtop+avd+14
  d.text((avx,y),'Fabian Baldovino',fill=(20,20,20),font=f); d.text((avx,y+int(fs*1.4)),'Brand Filmmaker · Porto Alegre, RS',fill=(90,90,90),font=f2)
  m.save(out,quality=92)
mock(804,201,152,24,97,'../previa_desktop.jpg',30)
mock(780,196,208,32,92,'../previa_celular.jpg',44)
