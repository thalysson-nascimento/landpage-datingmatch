# Datingmatch landing page

Site estático servido por Nginx na Railway. O Docker usa a variável PORT (padrão 8080). Não há instalação de dependências nem formulário de cadastro web.

Arquivos: index.html, landing.css, app.js e assets. Páginas mantidas: /privacy/, /datingmatch/terms.html e /delete-account.html. O endereço terms.html contém política de privacidade, não termos de uso. ads.txt e app-ads.txt permanecem na raiz com o ID original do publicador.

Verificação de saúde: /health. Arquivos inexistentes retornam 404; nenhuma pasta Git é publicada. Fontes externas apenas do Google Fonts. Chat da landing page é demonstração local e não envia dados.

Deploy: push na main aciona o serviço Railway já conectado. Ajustes no domínio e reputação de antivírus são externos ao código. O sitemap e as tags canônicas ajudam o rastreamento, sem garantia de posição na busca.
