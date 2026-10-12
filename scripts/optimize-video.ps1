param([Parameter(Mandatory=$true)][string]$InputVideo,[Parameter(Mandatory=$true)][string]$OutputVideo,[string]$Ffmpeg='ffmpeg')
$ErrorActionPreference='Stop'
if([IO.Path]::GetFullPath($InputVideo) -eq [IO.Path]::GetFullPath($OutputVideo)){throw 'Use um arquivo de saída diferente para preservar o original.'}
if(Test-Path -LiteralPath $OutputVideo){throw 'A saída já existe; escolha outro caminho.'}
# CRF 18 mantém alta qualidade visual, mas não é compressão matematicamente sem perda.
# Remove áudio porque este vídeo de fundo é reproduzido sem som.
& $Ffmpeg -hide_banner -i $InputVideo -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -an -movflags +faststart $OutputVideo
if($LASTEXITCODE -ne 0){throw 'Falha na compressão.'}
$originalSize=(Get-Item -LiteralPath $InputVideo).Length
$compressedSize=(Get-Item -LiteralPath $OutputVideo).Length
if($compressedSize -ge $originalSize){throw 'O resultado não é menor. Preserve o original e não publique a saída.'}
[pscustomobject]@{OriginalBytes=$originalSize;CompressedBytes=$compressedSize;ReductionPercent=[math]::Round(100*(1-$compressedSize/$originalSize),1)}
