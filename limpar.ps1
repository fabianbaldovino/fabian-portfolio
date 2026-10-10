# ============================================================
#  Faxina do repositorio fabian.art.br
#  Move arquivos orfaos para _LIXEIRA/ (nao apaga direto).
#
#  COMO USAR:
#    1. Abrir PowerShell em E:\SITES\Fabian_melhor
#    2. .\limpar.ps1
#    3. pnpm build   (confirmar que passa)
#    4. Remove-Item _LIXEIRA -Recurse -Force
#
#  Nenhum destes arquivos e referenciado pelo codigo.
#  Verificado cruzando todo o src/ contra todo o public/.
# ============================================================

$ErrorActionPreference = "Stop"
$raiz = $PSScriptRoot
$lixo = Join-Path $raiz "_LIXEIRA"

$alvos = @(
  # ---- Sobras do template original (nunca foram do Fabian) ----
  "public\person2.jpg"                      # foto de banco de imagens de OUTRA pessoa
  "public\projects\work-1.jpg"
  "public\projects\work-2.jpg"
  "public\projects\work-3.jpg"
  "public\projects\work-4.jpg"
  "public\svgs\Vector.svg"
  "public\svgs\Vector2.svg"

  # ---- Pasta duplicada: clientes/clientes e copia exata de clientes/ ----
  # ---- e clientes/ inteira foi superseded por marcas/ ----
  "public\clientes"

  # ---- Camera roll / brutos nao usados ----
  "public\FOTOS\IMG_0831.png"               # 20,8 MB
  "public\FOTOS\IMG_0831.webp"
  "public\FOTOS\DJI_0561.png"               # 13,5 MB
  "public\FOTOS\2.jpg"
  "public\FOTOS\3.jpg"
  "public\FOTOS\_MG_0806.jpg"
  "public\FOTOS\DSC00053.jpg.jpeg"
  "public\FOTOS\20260503_093522.jpg"
  "public\FOTOS\20260517_103203.jpg"
  "public\FOTOS\20260517_121306(0).jpg"
  "public\FOTOS\20260522_093422.jpg"
  "public\FOTOS\20260522_120207.jpg"
  "public\FOTOS\20260522_120207.webp"
  "public\FOTOS\20260606_092002.jpg"
  "public\FOTOS\Referencia_capa.png"

  # ---- Duplicatas exatas ----
  "public\FOTOS\trabalhos\capa_ok.png"      # identico a CAPA_OFICIAL.png
  "public\marcas\correio_do_povo.png"       # identico a correio_do_povo_novo.png
  "public\FOTOS\og-image.jpg"               # substituido por public\og-image.jpg (1200x630)

  # ---- Imagens que serviam a galeria "bastidores", agora descontinuada ----
  "public\FOTOS\fabian_baldovino_casa_de_cultura_mario_quintana_producao_audiovisual_porto_alegre_rs.webp"
  "public\FOTOS\fabian_baldovino_feir_ecologia_bom_fim_porto_alegre_rio_grande_do_sul.webp"
  "public\FOTOS\fabian_baldovino_montevideo_uruguay_pilotando_drone.webp"

  # ---- OG antigo quadrado (1024x1024) e modal removido ----
  "public\FOTOS\fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp"
  "public\FOTOS\fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento.webp"
  "public\FOTOS\fabian_baldovino_prodcao_audiovisual_porto_alegre_rs.jpg"
)

Write-Host ""
Write-Host "=== FAXINA fabian.art.br ===" -ForegroundColor Cyan
Write-Host ""

$movidos = 0
$bytes = 0

foreach ($rel in $alvos) {
  $origem = Join-Path $raiz $rel
  if (-not (Test-Path $origem)) {
    Write-Host ("  - ja ausente: {0}" -f $rel) -ForegroundColor DarkGray
    continue
  }

  $item = Get-Item $origem
  if ($item.PSIsContainer) {
    $tam = (Get-ChildItem $origem -Recurse -File | Measure-Object Length -Sum).Sum
  } else {
    $tam = $item.Length
  }

  $destino = Join-Path $lixo $rel
  $pai = Split-Path $destino -Parent
  if (-not (Test-Path $pai)) { New-Item -ItemType Directory -Path $pai -Force | Out-Null }

  Move-Item -LiteralPath $origem -Destination $destino -Force
  $movidos++
  $bytes += $tam
  Write-Host ("  OK {0,8:N0} KB  {1}" -f ($tam/1KB), $rel) -ForegroundColor Green
}

Write-Host ""
Write-Host ("{0} itens movidos para _LIXEIRA  ({1:N1} MB liberados)" -f $movidos, ($bytes/1MB)) -ForegroundColor Yellow
Write-Host ""
Write-Host "PROXIMO PASSO:" -ForegroundColor Cyan
Write-Host "  pnpm build"
Write-Host "  se passar:  Remove-Item _LIXEIRA -Recurse -Force"
Write-Host ""
Write-Host "NAO foram tocados (podem ter uso futuro):" -ForegroundColor DarkYellow
Write-Host "  public\artigos\materia_camara_municipal_2011.pdf   <- clipping de imprensa, vale para E-E-A-T"
Write-Host "  public\marcas\logo_*.png                           <- logos individuais dos clientes"
Write-Host "  public\FOTOS\capa_o_codigo_brasil_*                <- capas do livro"
Write-Host "  public\FOTOS\trabalhos\hospital.png"
Write-Host "  public\FOTOS\CAPA_REEL_KALWYN.png"
Write-Host ""
