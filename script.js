// ---- mock de dados ----
const unidades = [
    { id: 1, nome: "Raízes do Nordeste - Recife", cidade: "Pernambuco", endereco: "Rua da Aurora, 123", imagem: "imagens/fachadarecife.jpg" },
    { id: 3, nome: "Raízes do Nordeste - João Pessoa", cidade: "Paraíba", endereco: "Av. Epitácio Pessoa, 1000", imagem: "imagens/fachadajoaopessoa.jpg" },
    { id: 2, nome: "Raízes do Nordeste - Olinda", cidade: "Pernambuco", endereco: "Ladeira da Sé, 45", imagem: "imagens/fachadaolinda.jpg" }
];

const cardapioPorUnidade = {
    1: {
        nome: "Raízes - Recife",
        categorias: {
            "Pratos Principais": [
                { id: 101, nome: "Tapioca de Carne Seca", descricao: "Tapioca recheada com carne seca e queijo coalho", preco: 12.90, imagem: "imagens/tapioca-carne-seca.jpg" },
                { id: 102, nome: "Cuscuz Recheado", descricao: "Cuscuz com frango, queijo e catupiry", preco: 15.90, imagem: "imagens/cuscuz-recheado.jpg" },
                { id: 106, nome: "Baião de Dois", descricao: "Arroz, feijão-de-corda, queijo coalho e carne seca", preco: 24.90, imagem: "imagens/baiao-de-dois.jpg" },
                { id: 107, nome: "Acarajé", descricao: "Bolinho de feijão-fradinho com vatapá, camarão e salada", preco: 18.90, imagem: "imagens/acaraje.jpg" },
                { id: 108, nome: "Carne de Sol", descricao: "Carne salgada com mandioca, arroz ou macaxeira frita", preco: 32.90, imagem: "imagens/carne-de-sol.jpg" },
                { id: 109, nome: "Escondidinho", descricao: "Purê de mandioca recheado com carne seca, gratinado", preco: 26.90, imagem: "imagens/escondidinho.jpg" },
                { id: 110, nome: "Vatapá", descricao: "Creme de pão, leite de coco, amendoim, camarão e dendê", preco: 22.90, imagem: "imagens/vatapa.jpg" },
                { id: 111, nome: "Moqueca Baiana", descricao: "Peixe com leite de coco, pimentões e dendê", preco: 45.90, imagem: "imagens/moqueca-baiana.jpg" },
                { id: 112, nome: "Cuscuz Nordestino", descricao: "Flocos de milho cozidos no vapor, com manteiga", preco: 9.90, imagem: "imagens/cuscuz-nordestino.jpg" },
                { id: 113, nome: "Sarapatel", descricao: "Ensopado de miúdos e sangue suíno", preco: 19.90, imagem: "imagens/sarapatel.jpg" },
                { id: 114, nome: "Dobradinha", descricao: "Bucho bovino com feijão branco", preco: 21.90, imagem: "imagens/dobradinha.jpg" }
            ],
            "Sobremesas": [
                { id: 103, nome: "Bolo de Macaxeira", descricao: "Fatia com coco", preco: 6.90, imagem: "imagens/bolo-macaxeira.jpg" },
                { id: 115, nome: "Cartola", descricao: "Banana frita com queijo coalho, açúcar e canela", preco: 14.90, imagem: "imagens/cartola.jpg" },
                { id: 116, nome: "Bolo de Rolo", descricao: "Massa enrolada com goiabada", preco: 8.90, imagem: "imagens/bolo-de-rolo.jpg" },
                { id: 117, nome: "Cocada", descricao: "Doce de coco (branca ou queimada)", preco: 5.90, imagem: "imagens/cocada.jpg" },
                { id: 118, nome: "Canjica", descricao: "Milho branco com leite, açúcar e canela", preco: 7.90, imagem: "imagens/canjica.jpg" }
            ],
            "Bebidas": [
                { id: 104, nome: "Suco de Caju", descricao: "Natural (500ml)", preco: 7.90, imagem: "imagens/suco-caju.jpg" },
                { id: 119, nome: "Caldo de Cana", descricao: "Bebida extraída da cana (500ml)", preco: 6.90, imagem: "imagens/caldo-cana.jpg" },
                { id: 120, nome: "Cajuína São Geraldo", descricao: "Refrigerante de caju (lata)", preco: 5.90, imagem: "imagens/cajuina-sao-geraldo.jpg" }
            ]
        }
    },
    2: {
        nome: "Raízes - Olinda",
        categorias: {
            "Pratos Principais": [
                { id: 101, nome: "Tapioca de Carne Seca", descricao: "Tapioca recheada com carne seca", preco: 12.90, imagem: "imagens/tapioca-carne-seca.jpg" },
                { id: 102, nome: "Cuscuz Recheado", descricao: "Cuscuz com frango", preco: 15.90, imagem: "imagens/cuscuz-recheado.jpg" },
                { id: 105, nome: "Pastel de Vento", descricao: "Pastel frito com queijo e goiabada", preco: 8.90, imagem: "imagens/pastel-de-vento.jpg" },
                { id: 106, nome: "Baião de Dois", descricao: "Arroz, feijão-de-corda, queijo coalho e carne seca", preco: 23.90, imagem: "imagens/baiao-de-dois.jpg" },
                { id: 108, nome: "Carne de Sol", descricao: "Carne salgada com mandioca", preco: 31.90, imagem: "imagens/carne-de-sol.jpg" },
                { id: 110, nome: "Vatapá", descricao: "Creme com camarão e dendê", preco: 21.90, imagem: "imagens/vatapa.jpg" },
                { id: 112, nome: "Cuscuz Nordestino", descricao: "Flocos de milho com manteiga", preco: 8.90, imagem: "imagens/cuscuz-nordestino.jpg" }
            ],
            "Sobremesas": [
                { id: 115, nome: "Cartola", descricao: "Banana frita com queijo coalho", preco: 13.90, imagem: "imagens/cartola.jpg" },
                { id: 116, nome: "Bolo de Rolo", descricao: "Massa enrolada com goiabada", preco: 8.90, imagem: "imagens/bolo-de-rolo.jpg" },
                { id: 117, nome: "Cocada", descricao: "Doce de coco", preco: 5.90, imagem: "imagens/cocada.jpg" }
            ],
            "Bebidas": [
                { id: 104, nome: "Suco de Caju", descricao: "Natural (500ml)", preco: 7.90, imagem: "imagens/suco-caju.jpg" },
                { id: 119, nome: "Caldo de Cana", descricao: "Caldo de cana (500ml)", preco: 6.90, imagem: "imagens/caldo-cana.jpg" },
                { id: 120, nome: "Cajuína São Geraldo", descricao: "Refrigerante de caju (lata)", preco: 5.90, imagem: "imagens/cajuina-sao-geraldo.jpg" }
            ]
        }
    },
    3: {
        nome: "Raízes - João Pessoa",
        categorias: {
            "Pratos Principais": [
                { id: 101, nome: "Tapioca de Carne Seca", descricao: "Tapioca recheada", preco: 13.90, imagem: "imagens/tapioca-carne-seca.jpg" },
                { id: 103, nome: "Bolo de Macaxeira", descricao: "Fatia com coco", preco: 6.90, imagem: "imagens/bolo-macaxeira.jpg" },
                { id: 106, nome: "Baião de Dois", descricao: "Arroz, feijão-de-corda, queijo coalho e carne seca", preco: 24.90, imagem: "imagens/baiao-de-dois.jpg" },
                { id: 109, nome: "Escondidinho", descricao: "Purê de mandioca recheado com carne seca", preco: 25.90, imagem: "imagens/escondidinho.jpg" },
                { id: 112, nome: "Cuscuz Nordestino", descricao: "Flocos de milho com manteiga", preco: 8.90, imagem: "imagens/cuscuz-nordestino.jpg" }
            ],
            "Sobremesas": [
                { id: 115, nome: "Cartola", descricao: "Banana frita com queijo coalho", preco: 14.90, imagem: "imagens/cartola.jpg" },
                { id: 118, nome: "Canjica", descricao: "Milho branco com canela", preco: 7.90, imagem: "imagens/canjica.jpg" }
            ],
            "Bebidas": [
                { id: 104, nome: "Suco de Caju", descricao: "Natural (500ml)", preco: 8.90, imagem: "imagens/suco-caju.jpg" },
                { id: 120, nome: "Cajuína São Geraldo", descricao: "Refrigerante de caju (lata)", preco: 5.90, imagem: "imagens/cajuina-sao-geraldo.jpg" }
            ]
        }
    }
};

// cardapio global (só para exibicao)
let cardapioGlobal = { "Pratos Principais": [], "Sobremesas": [], "Bebidas": [] };
const produtosMap = new Map();
for (const unidade of Object.values(cardapioPorUnidade)) {
    for (const [categoria, produtos] of Object.entries(unidade.categorias)) {
        for (const prod of produtos) {
            if (!produtosMap.has(prod.id)) {
                produtosMap.set(prod.id, { ...prod });
                cardapioGlobal[categoria].push(produtosMap.get(prod.id));
            }
        }
    }
}

// ---- dados de usuario, carrinho, historico ----
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || null;
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let historicoPedidos = JSON.parse(localStorage.getItem("historicoPedidos")) || [];
let aplicarDesconto = false;

function salvarEstado() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("historicoPedidos", JSON.stringify(historicoPedidos));
}

function carregarEstado() {
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || null;
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    historicoPedidos = JSON.parse(localStorage.getItem("historicoPedidos")) || [];

    // para todos os itens do carrinho terem a imagem correta
    carrinho = carrinho.map(item => {
        if (!item.imagem || !item.imagem.startsWith("imagens/")) {
            const produtoOriginal = produtosMap.get(item.id);
            if (produtoOriginal && produtoOriginal.imagem) {
                item.imagem = produtoOriginal.imagem;
            } else {
                const nomeSlug = item.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-');
                item.imagem = `imagens/${nomeSlug}.jpg`;
            }
        }
        return item;
    });
    salvarEstado();
}

let telaAtual = "home";
let metodoPagamento = null;
let unidadeSelecionadaPedido = null;
let filtroPesquisa = "";

function salvarPedidoHistorico(numeroPedido, itens, total, descontoAplicado, pontosUsados) {
    if (!usuarioLogado) return;
    const now = new Date();
    const dataHora = now.toLocaleString("pt-BR");
    const pedido = {
        id: Date.now(),
        usuarioId: usuarioLogado.id,
        numero: numeroPedido,
        dataHora: dataHora,
        itens: itens.map(item => ({ nome: item.nome, preco: item.preco, qtd: item.qtd, imagem: item.imagem })),
        total: total,
        desconto: descontoAplicado,
        pontosUsados: pontosUsados
    };
    historicoPedidos.unshift(pedido);
    if (historicoPedidos.length > 20) historicoPedidos.pop();
    salvarEstado();
}

function getUltimosPedidosDoUsuario() {
    if (!usuarioLogado) return [];
    return historicoPedidos.filter(p => p.usuarioId === usuarioLogado.id);
}

function gerarDataValidadePontos() {
    const hoje = new Date();
    const meses = Math.floor(Math.random() * (12 - 6 + 1) + 6);
    hoje.setMonth(hoje.getMonth() + meses);
    return hoje.toLocaleDateString("pt-BR");
}

function atualizarMenuSair() {
    const linkSair = document.getElementById("linkSair");
    if (linkSair) linkSair.style.display = usuarioLogado ? "block" : "none";
}

function showToast(message, isSuccess = true) {
    const toast = document.getElementById("toast-notification");
    if (!toast) return;
    toast.textContent = message;
    toast.style.backgroundColor = isSuccess ? "#8B4513" : "#dc3545";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

// ---- modal de imagem ----
function abrirModalImagem(src) {
    const modalExistente = document.getElementById('modalLightbox');
    if (modalExistente) modalExistente.remove();

    const modal = document.createElement('div');
    modal.id = 'modalLightbox';
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="modal-img" src="${src}" alt="Imagem ampliada">
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';

    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ---- renderizacao principal ----
function renderizar() {
    const main = document.querySelector("main");
    if (!main) return;
    atualizarMenuSair();

    if (!localStorage.getItem("lgpd_aceito")) {
        const aceito = confirm("🌵 Raízes do Nordeste - Coletamos dados para pedidos e fidelidade. Você concorda com a LGPD?");
        localStorage.setItem("lgpd_aceito", aceito ? "sim" : "nao");
        if (!aceito) alert("Algumas funcionalidades podem ficar limitadas.");
    }

    // ---- home ----
    if (telaAtual === "home") {
        const imagensGrid = (base, cidade) => {
            const nomes = [`${base}1.jpg`, `${base}2.jpg`, `${base}3.jpg`];
            return `<div class="imagens-grid">
                        ${nomes.map(n => `<div class="imagem-card" data-img="imagens/${n}"><img src="imagens/${n}" alt="${cidade}" loading="lazy"></div>`).join('')}
                    </div>`;
        };

        const html = `
            <div class="hero">
                <h2>🌵 Sabores que abraçam o Nordeste!</h2>
                <p>Cardápio autêntico, atendimento rápido e experiência única.</p>
            </div>

            <div class="card valores">
                <h3>Nossos valores:💎</h3>
                <div class="valores-grid">
                    <p>🤝 Atendimento acolhedor e humanizado</p>
                    <p>🌽 Valorização da cultura e gastronomia nordestina</p>
                    <p>🥘 Qualidade e sabor em cada pedido</p>
                    <p>🔒 Respeito, segurança e transparência com nossos clientes</p>
                    <p>❤️ Amor pela tradição e pela boa comida</p>
                </div>
            </div>

            <div class="card" style="text-align: center;">
                <button id="btnIrLogin">🍽️ Começar a pedir → Faça login</button>
            </div>

            <div class="card">
                <h2>Nossas Unidades</h2>
                <div class="local-grid">
                    ${unidades.map(u => `
                        <div class="local-card">
                            <div class="local-img unidade-card" data-img="${u.imagem}">
                                <img src="${u.imagem}" alt="${u.nome}" style="width:100%; height:100%; object-fit:cover; border-radius:16px;">
                            </div>
                            <div class="local-info">
                                <h3>${u.nome}</h3>
                                <p>${u.endereco}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- recife -->
            <div class="cidade-detalhes">
                <h2 class="cidade-titulo">🌴 Recife – Pernambuco (PE)</h2>
                <div class="cidade-texto">
                    <p>Conhecida como a “Veneza Brasileira”, Recife encanta por seus rios, pontes, praias e forte herança cultural. A capital pernambucana mistura modernidade com história colonial, criando uma atmosfera vibrante e acolhedora.</p>
                </div>
                <h3 class="cidade-subtitulo">🌴 Belezas e características</h3>
                <ul class="cidade-lista">
                    <li>Praias famosas como Boa Viagem</li>
                    <li>Diversas pontes e rios cortando a cidade</li>
                    <li>Centro histórico rico em arquitetura colonial</li>
                    <li>Forte tradição musical, berço do Frevo e do Manguebeat</li>
                </ul>
                <h3 class="cidade-subtitulo">🍴 Curiosidades gastronômicas</h3>
                <ul class="cidade-lista-dois-colunas">
                    <li>Bolo de rolo</li><li>Cartola</li><li>Tapioca</li>
                    <li>Caldinho de frutos do mar</li><li>Queijo coalho assado</li>
                    <li>Pratos à base de peixe e crustáceos</li>
                </ul>
                <p>✨ A cidade também foi reconhecida pela UNESCO como <strong>Cidade Criativa da Música</strong>.</p>
                <h3 class="cidade-subtitulo">📍 Pontos turísticos mais visitados</h3>
                <ul class="cidade-lista-dois-colunas">
                    <li>Marco Zero</li><li>Rua do Bom Jesus</li><li>Praia de Boa Viagem</li>
                    <li>Instituto Ricardo Brennand</li><li>Recife Antigo</li><li>Paço do Frevo</li>
                </ul>
                <h3 class="cidade-subtitulo">📖 Um pouco da história</h3>
                <p>Recife cresceu durante o período colonial graças ao comércio do açúcar e à influência holandesa no Nordeste brasileiro. A cidade preserva até hoje marcas dessa época em sua arquitetura, cultura e gastronomia, tornando-se um dos destinos turísticos mais importantes do Brasil.</p>
                ${imagensGrid('recife', 'Recife')}
            </div>

            <!-- olinda -->
            <div class="cidade-detalhes">
                <h2 class="cidade-titulo">⛪ Olinda – Pernambuco (PE)</h2>
                <div class="cidade-texto">
                    <p>Olinda é uma das cidades históricas mais encantadoras do Brasil. Com suas ladeiras coloridas, igrejas barrocas e clima artístico, a cidade transmite tradição, alegria e cultura em cada esquina.</p>
                </div>
                <h3 class="cidade-subtitulo">🌴 Belezas e características</h3>
                <ul class="cidade-lista">
                    <li>Casarios coloniais preservados</li><li>Ladeiras históricas com vista para o mar</li>
                    <li>Igrejas barrocas centenárias</li><li>Atmosfera artística e cultural única</li>
                </ul>
                <h3 class="cidade-subtitulo">🍴 Curiosidades gastronômicas</h3>
                <ul class="cidade-lista">
                    <li>Tapiocas artesanais</li><li>Bolo Souza Leão</li>
                    <li>Frutos do mar frescos</li><li>Doces típicos nordestinos</li>
                    <li>Comidas regionais servidas em casarões históricos</li>
                </ul>
                <h3 class="cidade-subtitulo">📍 Pontos turísticos mais visitados</h3>
                <ul class="cidade-lista-dois-colunas">
                    <li>Alto da Sé</li><li>Mosteiro de São Bento</li>
                    <li>Centro Histórico de Olinda</li><li>Igreja da Sé</li>
                    <li>Mercado Eufrásio Barbosa</li><li>Ladeiras do Carnaval</li>
                </ul>
                <h3 class="cidade-subtitulo">📖 Um pouco da história</h3>
                <p>Fundada em 1535, Olinda foi uma das primeiras cidades brasileiras e chegou a ser capital de Pernambuco. Durante a invasão holandesa, parte da cidade foi destruída, mas seu patrimônio histórico resistiu ao tempo. Em 1982, Olinda foi declarada Patrimônio Histórico e Cultural da Humanidade pela UNESCO.</p>
                ${imagensGrid('olinda', 'Olinda')}
            </div>

            <!-- joão pessoa -->
            <div class="cidade-detalhes">
                <h2 class="cidade-titulo">🌊 João Pessoa – Paraíba (PB)</h2>
                <div class="cidade-texto">
                    <p>João Pessoa é conhecida por suas praias tranquilas, qualidade de vida e contato com a natureza. É considerada uma das capitais mais verdes do Brasil e encanta visitantes pelo clima acolhedor e pela beleza do litoral paraibano.</p>
                </div>
                <h3 class="cidade-subtitulo">🌴 Belezas e características</h3>
                <ul class="cidade-lista">
                    <li>Praias de águas mornas e cristalinas</li><li>Extensas áreas verdes e Mata Atlântica</li>
                    <li>Orla organizada e preservada</li><li>Pôr do sol famoso na Praia do Jacaré</li>
                </ul>
                <h3 class="cidade-subtitulo">🍴 Curiosidades gastronômicas</h3>
                <ul class="cidade-lista">
                    <li>Carne de sol com macaxeira</li><li>Rubacão</li>
                    <li>Tapioca recheada</li><li>Frutos do mar</li>
                    <li>Cuscuz nordestino</li><li>Sobremesas com frutas tropicais e caju</li>
                </ul>
                <h3 class="cidade-subtitulo">📍 Pontos turísticos mais visitados</h3>
                <ul class="cidade-lista-dois-colunas">
                    <li>Ponta do Seixas</li><li>Praia de Tambaú</li>
                    <li>Cabo Branco</li><li>Praia do Jacaré</li>
                    <li>Centro Histórico</li><li>Estação Cabo Branco</li>
                </ul>
                <h3 class="cidade-subtitulo">📖 Um pouco da história</h3>
                <p>Fundada em 1585, João Pessoa é a terceira cidade mais antiga do Brasil. Ao longo dos séculos, recebeu diferentes nomes e passou por influências portuguesas e holandesas. Hoje, é reconhecida pela tranquilidade, preservação ambiental e forte identidade cultural.</p>
                ${imagensGrid('joaopessoa', 'João Pessoa')}
            </div>

            <div class="card curiosidades">
                <h3>Curiosidades da nossa culinária:</h3>
                <ul>
                    <li>🧉 O cuscuz nordestino é Patrimônio Cultural Imaterial de Pernambuco.</li>
                    <li>🍤 O acarajé foi originalmente uma oferenda aos orixás na Bahia.</li>
                    <li>🥥 A cocada é um dos doces mais antigos do Brasil, trazida pelos portugueses.</li>
                    <li>🍌 A Cartola (banana com queijo) é símbolo do São João pernambucano.</li>
                    <li>🌵 O cacto mandacaru é símbolo de resistência e também usado na culinária.</li>
                </ul>
            </div>

            <div class="card" style="text-align: center;">
                <button id="btnIrLogin">🍽️ Começar a pedir → Faça login</button>
            </div>
        `;
        main.innerHTML = html;

        document.getElementById("btnIrLogin")?.addEventListener("click", () => {
            telaAtual = "login";
            renderizar();
        });

        // eventos para imagens das cidades
        const imagemCards = document.querySelectorAll('.imagem-card');
        imagemCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const imgSrc = card.getAttribute('data-img');
                if (imgSrc) abrirModalImagem(imgSrc);
            });
        });

        // eventos para imagens das unidades
        const unidadeCards = document.querySelectorAll('.unidade-card');
        unidadeCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const imgSrc = card.getAttribute('data-img');
                if (imgSrc) abrirModalImagem(imgSrc);
            });
        });
        return;
    }

    // ---- login ----
    if (telaAtual === "login") {
        main.innerHTML = `
            <div class="card">
                <h2>🌵 Acesse sua conta</h2>
                <input type="email" id="loginEmail" placeholder="E-mail" value="ana@email.com">
                <input type="password" id="loginSenha" placeholder="Senha" value="123456">
                <div style="margin: 15px 0; padding: 12px; background: rgba(0,0,0,0.4); border-radius: 16px; border-left: 3px solid #8B4513;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" id="lgpdLogin" style="width: 16px; height: 16px; margin: 0;">
                        <span style="font-size: 0.7rem; color: rgba(255,255,255,0.9);">Li e concordo com a <strong>Política de Privacidade (em acordo com a LGPD)</strong> e autorizo o processamento dos meus dados para acesso à minha conta.</span>
                    </label>
                </div>
                <button id="btnEntrar">Entrar</button>
                <button id="btnIrCadastro" class="btn-outline">Criar nova conta</button>
                <button id="btnVoltarHome" class="btn-outline">Voltar</button>
            </div>
        `;
        document.getElementById("btnEntrar")?.addEventListener("click", () => {
            const aceite = document.getElementById("lgpdLogin")?.checked;
            if (!aceite) {
                alert("Você precisa concordar com a LGPD para acessar sua conta.");
                return;
            }
            const email = document.getElementById("loginEmail").value.trim();
            const senha = document.getElementById("loginSenha").value.trim();
            if (!email || !senha) {
                alert("Preencha e-mail e senha.");
                return;
            }
            if (!email.includes("@") || !email.includes(".")) {
                alert("Digite um e-mail válido (ex: nome@dominio.com).");
                return;
            }
            let user = usuarios.find(u => u.email === email && u.senha === senha);
            if (user) {
                usuarioLogado = user;
                salvarEstado();
                telaAtual = "principal";
                renderizar();
            } else if (email === "ana@email.com" && senha === "123456") {
                user = { id: Date.now(), nome: "Ana", email, senha, pontos: 50 };
                usuarios.push(user);
                usuarioLogado = user;
                salvarEstado();
                telaAtual = "principal";
                renderizar();
            } else {
                alert("E-mail ou senha incorretos.");
            }
        });
        document.getElementById("btnIrCadastro")?.addEventListener("click", () => {
            telaAtual = "cadastro";
            renderizar();
        });
        document.getElementById("btnVoltarHome")?.addEventListener("click", () => {
            telaAtual = "home";
            renderizar();
        });
        return;
    }

    // ---- cadastro ----
    if (telaAtual === "cadastro") {
        main.innerHTML = `
            <div class="card">
                <h2>🌵 Cadastro</h2>
                <input type="text" id="cadNome" placeholder="Nome completo">
                <input type="email" id="cadEmail" placeholder="E-mail">
                <input type="password" id="cadSenha" placeholder="Senha">
                <div style="margin: 15px 0; padding: 12px; background: rgba(0,0,0,0.4); border-radius: 16px; border-left: 3px solid #8B4513;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" id="lgpdCadastro" style="width: 16px; height: 16px; margin: 0;">
                        <span style="font-size: 0.7rem; color: rgba(255,255,255,0.9);">Li e concordo com a <strong>Política de Privacidade (em acordo com a LGPD)</strong> e autorizo o processamento dos meus dados para criação da minha conta.</span>
                    </label>
                </div>
                <button id="btnCadastrar">Cadastrar</button>
                <button id="btnVoltarLogin" class="btn-outline">Voltar</button>
                <button id="btnVoltarHomeCad" class="btn-outline">Home</button>
            </div>
        `;
        document.getElementById("btnCadastrar")?.addEventListener("click", () => {
            const aceite = document.getElementById("lgpdCadastro")?.checked;
            if (!aceite) {
                alert("Você precisa concordar com a LGPD para se cadastrar.");
                return;
            }
            const nome = document.getElementById("cadNome").value.trim();
            const email = document.getElementById("cadEmail").value.trim();
            const senha = document.getElementById("cadSenha").value.trim();
            if (!nome || !email || !senha) {
                alert("Preencha todos os campos.");
                return;
            }
            if (!email.includes("@") || !email.includes(".")) {
                alert("Digite um e-mail válido (ex: nome@dominio.com).");
                return;
            }
            if (senha.length < 4) {
                alert("A senha deve ter pelo menos 4 caracteres.");
                return;
            }
            if (usuarios.find(u => u.email === email)) {
                alert("E-mail já cadastrado.");
                return;
            }
            const novo = { id: Date.now(), nome, email, senha, pontos: 0 };
            usuarios.push(novo);
            usuarioLogado = novo;
            salvarEstado();
            telaAtual = "principal";
            renderizar();
        });
        document.getElementById("btnVoltarLogin")?.addEventListener("click", () => {
            telaAtual = "login";
            renderizar();
        });
        document.getElementById("btnVoltarHomeCad")?.addEventListener("click", () => {
            telaAtual = "home";
            renderizar();
        });
        return;
    }

    // ---- principal (apos o login) ----
    if (telaAtual === "principal" && usuarioLogado) {
        const ehQuarta = new Date().getDay() === 3;
        const banner = ehQuarta ? `<div class="promo-banner">🎉 QUARTA-FEIRA: PONTOS DOBRADOS! 🎉</div>` : "";
        main.innerHTML = `
            <div class="card">
                ${banner}
                <h2>Bem-vindo, ${usuarioLogado.nome}!</h2>
                <p>⭐ Pontos: ${usuarioLogado.pontos}</p>
                <button id="btnLogout">Sair</button>
            </div>
        `;
        document.getElementById("btnLogout")?.addEventListener("click", () => {
            usuarioLogado = null;
            salvarEstado();
            telaAtual = "home";
            renderizar();
        });
        return;
    }

    // ---- cardapio global (somente p visualizacao) ----
    if (telaAtual === "cardapio") {
        let produtosFiltrados = [];
        for (const categoria of Object.keys(cardapioGlobal)) {
            produtosFiltrados.push(...cardapioGlobal[categoria]);
        }
        if (filtroPesquisa) {
            produtosFiltrados = produtosFiltrados.filter(p => p.nome.toLowerCase().includes(filtroPesquisa.toLowerCase()) || p.descricao.toLowerCase().includes(filtroPesquisa.toLowerCase()));
        }
        let html = `<div class="card"><h2>📋 Cardápio Completo</h2>`;
        html += `<div class="search-box"><input type="text" id="searchCardapio" placeholder="🔍 Buscar prato ou bebida..." value="${filtroPesquisa}"></div>`;
        for (const categoria of Object.keys(cardapioGlobal)) {
            const produtosCat = cardapioGlobal[categoria].filter(p => filtroPesquisa ? p.nome.toLowerCase().includes(filtroPesquisa.toLowerCase()) || p.descricao.toLowerCase().includes(filtroPesquisa.toLowerCase()) : true);
            if (produtosCat.length === 0) continue;
            let icone = categoria === "Pratos Principais" ? "🍛" : (categoria === "Sobremesas" ? "🍰" : "🥤");
            html += `<h3 class="categoria-titulo">${icone} ${categoria}</h3>`;
            html += `<div class="produtos-grid">`;
            produtosCat.forEach(prod => {
                html += `
                    <div class="produto-item">
                        <div class="produto-img"><img src="${prod.imagem}" alt="${prod.nome}" loading="lazy"></div>
                        <div class="produto-info">
                            <h3>${prod.nome}</h3>
                            <p>${prod.descricao}</p>
                            <strong>R$ ${prod.preco.toFixed(2)}</strong>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
        html += `<button id="btnVoltarHomeCardapio" class="btn-outline">Voltar ao Início</button></div>`;
        main.innerHTML = html;
        document.getElementById("btnVoltarHomeCardapio")?.addEventListener("click", () => {
            telaAtual = "home";
            renderizar();
        });
        const searchInput = document.getElementById("searchCardapio");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                filtroPesquisa = e.target.value;
                renderizar();
            });
        }
        return;
    }

    // ---- selecao de unidade para pedido ----
    if (telaAtual === "selecionarUnidadePedido") {
        if (!usuarioLogado) {
            telaAtual = "login";
            renderizar();
            return;
        }
        let html = `
            <div class="card" style="text-align: center;">
                <h2>🍽️ Escolha a unidade para o pedido</h2>
                <div style="display: flex; flex-direction: column; gap: 15px; align-items: center; margin: 20px 0;">
                    ${unidades.map(u => `
                        <button class="btnUnidadePedido" data-id="${u.id}" style="width: 100%; max-width: 300px; margin: 0 auto;">
                            ${u.nome}<br><small>${u.cidade}</small>
                        </button>
                    `).join('')}
                </div>
                <button id="btnVoltarHomeSelecao" class="btn-outline" style="margin-top: 10px;">Voltar ao Início</button>
            </div>
        `;
        main.innerHTML = html;
        unidades.forEach(u => {
            document.querySelector(`.btnUnidadePedido[data-id='${u.id}']`)?.addEventListener("click", () => {
                unidadeSelecionadaPedido = u.id;
                telaAtual = "cardapioPedido";
                renderizar();
            });
        });
        document.getElementById("btnVoltarHomeSelecao")?.addEventListener("click", () => {
            telaAtual = "home";
            renderizar();
        });
        return;
    }

    // ---- cardapio do pedido com pesquisa ----
    if (telaAtual === "cardapioPedido") {
        if (!usuarioLogado || !unidadeSelecionadaPedido) {
            telaAtual = "selecionarUnidadePedido";
            renderizar();
            return;
        }
        const unidade = cardapioPorUnidade[unidadeSelecionadaPedido];
        if (!unidade) return;

        let todosProdutos = [];
        for (const categoria of Object.values(unidade.categorias)) {
            todosProdutos.push(...categoria);
        }
        let produtosFiltrados = todosProdutos;
        if (filtroPesquisa) {
            produtosFiltrados = produtosFiltrados.filter(p => p.nome.toLowerCase().includes(filtroPesquisa.toLowerCase()) || p.descricao.toLowerCase().includes(filtroPesquisa.toLowerCase()));
        }

        const categoriasUnidade = {};
        for (const prod of produtosFiltrados) {
            let cat = "";
            if (unidade.categorias["Pratos Principais"].some(p => p.id === prod.id)) cat = "Pratos Principais";
            else if (unidade.categorias["Sobremesas"].some(p => p.id === prod.id)) cat = "Sobremesas";
            else if (unidade.categorias["Bebidas"].some(p => p.id === prod.id)) cat = "Bebidas";
            if (!categoriasUnidade[cat]) categoriasUnidade[cat] = [];
            categoriasUnidade[cat].push(prod);
        }

        let html = `<div class="card"><h2>🍽️ Faça seu pedido - ${unidade.nome}</h2>`;
        html += `<div class="search-box"><input type="text" id="searchPedido" placeholder="🔍 Buscar neste cardápio..." value="${filtroPesquisa}"></div>`;
        for (const [categoria, produtos] of Object.entries(categoriasUnidade)) {
            let icone = categoria === "Pratos Principais" ? "🍛" : (categoria === "Sobremesas" ? "🍰" : "🥤");
            html += `<h3 class="categoria-titulo">${icone} ${categoria}</h3>`;
            html += `<div class="produtos-grid">`;
            produtos.forEach(prod => {
                const itemNoCarrinho = carrinho.find(item => item.id === prod.id);
                const qtdAtual = itemNoCarrinho ? itemNoCarrinho.qtd : 0;
                html += `
                    <div class="produto-item">
                        <div class="produto-img"><img src="${prod.imagem}" alt="${prod.nome}" loading="lazy"></div>
                        <div class="produto-info">
                            <h3>${prod.nome}</h3>
                            <p>${prod.descricao}</p>
                            <strong>R$ ${prod.preco.toFixed(2)}</strong>
                            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 6px;">
                                <button class="btnAddCarrinhoPedidoUnidade" data-id="${prod.id}" data-nome="${prod.nome}" data-preco="${prod.preco}" data-imagem="${prod.imagem}">➕ Adicionar</button>
                                ${qtdAtual > 0 ? `<button class="btnRemoveCarrinhoPedidoUnidade" data-id="${prod.id}">➖ Remover</button>` : ""}
                                ${qtdAtual > 0 ? `<span style="background: rgba(0,0,0,0.5); padding: 2px 8px; border-radius: 20px; font-size: 0.7rem;">🛒 ${qtdAtual}</span>` : ""}
                            </div>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
        html += `<button id="btnVerCarrinhoPedidoUnidade">🛒 Ver Carrinho (${carrinho.reduce((s,i)=>s+i.qtd,0)})</button>
                 <button id="btnLimparCarrinhoPedidoUnidade" class="btn-outline">Limpar Carrinho</button>
                 <button id="btnTrocarUnidadePedido" class="btn-outline">Trocar Unidade</button>
                 <button id="btnVoltarHomePedido" class="btn-outline">Voltar ao Início</button></div>`;
        main.innerHTML = html;

        const addButtons = document.querySelectorAll('.btnAddCarrinhoPedidoUnidade');
        addButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const id = parseInt(btn.getAttribute("data-id"));
                const nome = btn.getAttribute("data-nome");
                const preco = parseFloat(btn.getAttribute("data-preco"));
                const imagem = btn.getAttribute("data-imagem");
                const existente = carrinho.find(i => i.id === id);
                if (existente) existente.qtd++;
                else carrinho.push({ id, nome, preco, qtd: 1, imagem: imagem });
                salvarEstado();
                showToast(`➕ ${nome} adicionado ao carrinho!`);
                renderizar();
            });
        });

        const removeButtons = document.querySelectorAll('.btnRemoveCarrinhoPedidoUnidade');
        removeButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const id = parseInt(btn.getAttribute("data-id"));
                const existente = carrinho.find(i => i.id === id);
                if (existente) {
                    const nome = existente.nome;
                    if (existente.qtd > 1) existente.qtd--;
                    else {
                        const idx = carrinho.findIndex(i => i.id === id);
                        if (idx !== -1) carrinho.splice(idx, 1);
                    }
                    salvarEstado();
                    showToast(`➖ ${nome} removido do carrinho`);
                    renderizar();
                }
            });
        });

        document.getElementById("btnVerCarrinhoPedidoUnidade")?.addEventListener("click", () => {
            telaAtual = "carrinhoPedidoUnidade";
            renderizar();
        });
        document.getElementById("btnLimparCarrinhoPedidoUnidade")?.addEventListener("click", () => {
            carrinho = [];
            salvarEstado();
            showToast("Carrinho limpo!");
            renderizar();
        });
        document.getElementById("btnTrocarUnidadePedido")?.addEventListener("click", () => {
            unidadeSelecionadaPedido = null;
            telaAtual = "selecionarUnidadePedido";
            renderizar();
        });
        document.getElementById("btnVoltarHomePedido")?.addEventListener("click", () => {
            telaAtual = "home";
            renderizar();
        });
        const searchPedido = document.getElementById("searchPedido");
        if (searchPedido) {
            searchPedido.addEventListener("input", (e) => {
                filtroPesquisa = e.target.value;
                renderizar();
            });
        }
        return;
    }

    // ---- carrinho com desconto por pontos ----
    if (telaAtual === "carrinhoPedidoUnidade") {
        let totalOriginal = 0;
        carrinho.forEach(item => totalOriginal += item.preco * item.qtd);

        let descontoPercentual = 0;
        let pontosUsados = 0;
        let podeAplicarDesconto = false;
        let pontosCliente = usuarioLogado ? usuarioLogado.pontos : 0;

        if (pontosCliente >= 50) {
            podeAplicarDesconto = true;
            const grupos50 = Math.floor(pontosCliente / 50);
            descontoPercentual = grupos50 * 5;
            if (descontoPercentual > 50) descontoPercentual = 50;
            pontosUsados = (descontoPercentual / 5) * 50;
        }

        let valorDesconto = 0;
        let totalComDesconto = totalOriginal;
        let aplicar = aplicarDesconto && podeAplicarDesconto;
        if (aplicar) {
            valorDesconto = (totalOriginal * descontoPercentual) / 100;
            totalComDesconto = totalOriginal - valorDesconto;
        }

        let html = `<div class="card"><h2>🛒 Seu Pedido</h2>`;
        if (carrinho.length === 0) html += `<p>Carrinho vazio.</p>`;
        else {
            carrinho.forEach((item, idx) => {
                let imgSrc = item.imagem;
                if (!imgSrc || !imgSrc.startsWith("imagens/")) {
                    const prod = produtosMap.get(item.id);
                    imgSrc = prod ? prod.imagem : `imagens/placeholder.jpg`;
                    item.imagem = imgSrc;
                    salvarEstado();
                }
                html += `<div class="carrinho-item">
                            <span><img src="${imgSrc}" width="30" style="vertical-align:middle; border-radius:8px;"> ${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.qtd}</span>
                            <button class="btnRemover" data-idx="${idx}">Remover 1</button>
                         </div>`;
            });
            html += `<hr><strong>Subtotal: R$ ${totalOriginal.toFixed(2)}</strong><br>`;

            if (!usuarioLogado) {
                html += `<p style="margin-top:10px;">🔒 Faça login para usar pontos.</p>`;
            } else if (pontosCliente < 50) {
                html += `<p style="margin-top:10px;">⭐ Você tem ${pontosCliente} pontos. <strong>Você não possui pontos suficientes (mínimo 50). Continue comprando para acumular!</strong></p>`;
            } else {
                html += `<div style="margin: 15px 0; padding: 12px; background: rgba(0,0,0,0.4); border-radius: 16px; border-left: 3px solid #8B4513;">
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" id="usarPontosCheckbox" style="width: 16px; height: 16px; margin: 0;" ${aplicar ? 'checked' : ''}>
                                <span>⭐ Usar meus pontos (${pontosCliente} pontos disponíveis)</span>
                            </label>
                            <p style="font-size: 0.7rem; margin: 8px 0 0 24px; color: rgba(255,255,255,0.8);">💰 Cada 50 pontos = 5% de desconto (máximo 50%). Seu desconto seria de ${descontoPercentual}% (equivalente a ${pontosUsados} pontos).</p>
                         </div>`;
            }

            if (aplicar && podeAplicarDesconto) {
                html += `<p><strong>Desconto (${descontoPercentual}%):</strong> - R$ ${valorDesconto.toFixed(2)}</p>`;
                html += `<h3>Total com desconto: <strong style="color: #ffb26b;">R$ ${totalComDesconto.toFixed(2)}</strong></h3>`;
            } else {
                html += `<h3>Total: R$ ${totalOriginal.toFixed(2)}</h3>`;
            }

            html += `<div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px;">
                        <button id="btnFinalizarPedidoUnidade" class="btn-finalizar">↪️ Ir para o pagamento</button>
                        <button id="btnVoltarCardapioPedidoUnidade" class="btn-outline">↩️ Voltar ao Cardápio</button>
                     </div>`;
        }
        html += `</div>`;
        main.innerHTML = html;

        carrinho.forEach((_, idx) => {
            document.querySelector(`.btnRemover[data-idx='${idx}']`)?.addEventListener("click", () => {
                const nome = carrinho[idx].nome;
                if (carrinho[idx].qtd > 1) carrinho[idx].qtd--;
                else carrinho.splice(idx, 1);
                salvarEstado();
                showToast(`➖ ${nome} removido do carrinho`);
                renderizar();
            });
        });

        const checkbox = document.getElementById("usarPontosCheckbox");
        if (checkbox) {
            checkbox.addEventListener("change", (e) => {
                aplicarDesconto = e.target.checked;
                renderizar();
            });
        }

        document.getElementById("btnFinalizarPedidoUnidade")?.addEventListener("click", () => {
            if (carrinho.length === 0) alert("Carrinho vazio");
            else {
                if (aplicarDesconto && podeAplicarDesconto && usuarioLogado) {
                    usuarioLogado.pontos -= pontosUsados;
                    salvarEstado();
                    showToast(`Desconto de ${descontoPercentual}% aplicado! Você usou ${pontosUsados} pontos.`, true);
                }
                metodoPagamento = null;
                telaAtual = "pagamento";
                renderizar();
            }
        });
        document.getElementById("btnVoltarCardapioPedidoUnidade")?.addEventListener("click", () => {
            telaAtual = "cardapioPedido";
            renderizar();
        });
        return;
    }

    // ---- pagamento (cartao ou pix) ----
    if (telaAtual === "pagamento") {
        const total = carrinho.reduce((s,i)=>s+(i.preco*i.qtd),0);
        main.innerHTML = `
            <div class="card">
                <h2>💳 Pagamento</h2>
                <p>Total do pedido: <strong>R$ ${total.toFixed(2)}</strong></p>
                <p>Escolha a forma de pagamento:</p>
                <button id="btnCartao">Cartão de Crédito</button>
                <button id="btnPix">PIX</button>
                <button id="btnVoltarCarrinhoPag" class="btn-outline">Voltar</button>
            </div>
        `;
        document.getElementById("btnCartao")?.addEventListener("click", () => {
            metodoPagamento = "cartao";
            telaAtual = "pagamentoCartao";
            renderizar();
        });
        document.getElementById("btnPix")?.addEventListener("click", () => {
            metodoPagamento = "pix";
            telaAtual = "pagamentoPix";
            renderizar();
        });
        document.getElementById("btnVoltarCarrinhoPag")?.addEventListener("click", () => {
            telaAtual = "carrinhoPedidoUnidade";
            renderizar();
        });
        return;
    }

    // ---- pagamento cartao ----
    if (telaAtual === "pagamentoCartao") {
        const total = carrinho.reduce((s,i)=>s+(i.preco*i.qtd),0);
        main.innerHTML = `
            <div class="card">
                <h2>💳 Pagamento com Cartão</h2>
                <p>Total do pedido: <strong>R$ ${total.toFixed(2)}</strong></p>
                <p><strong>Forma de Pagamento:</strong> Cartão de Crédito</p>
                <div class="form-group"><label>Número do Cartão (16 dígitos):</label><input type="text" id="cardNumber" placeholder="4111 1111 1111 1111" maxlength="19" value="4111111111111111"></div>
                <div class="form-group"><label>Nome Impresso no Cartão:</label><input type="text" id="cardName" placeholder="ANA" value="ANA"></div>
                <div class="form-row" style="display:flex; gap:10px;">
                    <div class="form-group" style="flex:1;"><label>Validade (MM/AA):</label><input type="text" id="cardExpiry" placeholder="MM/AA" value="12/29"></div>
                    <div class="form-group" style="flex:1;"><label>CVV (3 dígitos):</label><input type="text" id="cardCvv" placeholder="123" maxlength="4" value="123"></div>
                </div>
                <div style="margin: 15px 0; padding: 12px; background: rgba(0,0,0,0.4); border-radius: 16px; border-left: 3px solid #8B4513;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" id="lgpdPagamento" style="width: 16px; height: 16px; margin: 0;">
                        <span style="font-size: 0.7rem; color: rgba(255,255,255,0.9);">Li e concordo com a <strong>Política de Privacidade (em acordo com a LGPD)</strong> e autorizo o processamento dos meus dados para a conclusão deste pedido.</span>
                    </label>
                </div>
                <button id="btnConfirmarCartao">Confirmar Pagamento</button>
                <button id="btnVoltarMetodosCartao" class="btn-outline">Voltar</button>
            </div>
        `;
        document.getElementById("btnConfirmarCartao")?.addEventListener("click", () => {
            const aceite = document.getElementById("lgpdPagamento")?.checked;
            if (!aceite) { alert("Concorde com a LGPD."); return; }
            let numero = document.getElementById("cardNumber").value.replace(/\s/g, '');
            const nome = document.getElementById("cardName").value.trim();
            const validade = document.getElementById("cardExpiry").value.trim();
            const cvv = document.getElementById("cardCvv").value.trim();
            if (!numero || !nome || !validade || !cvv) { alert("Preencha todos os dados."); return; }
            if (!/^\d{16}$/.test(numero)) { alert("Número do cartão deve ter 16 dígitos."); return; }
            if (!/^\d{2}\/\d{2}$/.test(validade)) { alert("Validade deve estar no formato MM/AA."); return; }
            if (!/^\d{3}$/.test(cvv)) { alert("CVV deve ter 3 dígitos."); return; }
            simularPagamento(true);
        });
        document.getElementById("btnVoltarMetodosCartao")?.addEventListener("click", () => {
            telaAtual = "pagamento";
            renderizar();
        });
        return;
    }

    // ---- pagamento pix ----
    if (telaAtual === "pagamentoPix") {
        const total = carrinho.reduce((s,i)=>s+(i.preco*i.qtd),0);
        main.innerHTML = `
            <div class="card">
                <h2>📱 Pagamento com PIX</h2>
                <p>Total do pedido: <strong>R$ ${total.toFixed(2)}</strong></p>
                <p><strong>Forma de Pagamento:</strong> PIX (Aprovação imediata)</p>
                <div id="areaPix" style="background: #0c0000; padding: 15px; border-radius: 16px; text-align: center; margin: 15px 0;">
                    <p>🔹 <strong>Opção PIX selecionada</strong> 🔹</p>
                    <p>Ao confirmar, o sistema gerará o QR Code para pagamento.</p>
                    <div id="qrCodeSimulado" style="display: block; margin-top: 10px;"><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=simulacao-pix-raizes" alt="QR Code simulado" style="width:120px;"><p><small>QR Code simulado para demonstração</small></p></div>
                </div>
                <div style="margin: 15px 0; padding: 12px; background: rgba(0,0,0,0.4); border-radius: 16px; border-left: 3px solid #8B4513;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" id="lgpdPix" style="width: 16px; height: 16px; margin: 0;">
                        <span style="font-size: 0.7rem; color: rgba(255,255,255,0.9);">Li e concordo com a <strong>Política de Privacidade (em acordo com a LGPD)</strong> e autorizo o processamento dos meus dados para a conclusão deste pedido.</span>
                    </label>
                </div>
                <button id="btnConfirmarPix">Confirmar Pagamento</button>
                <button id="btnVoltarMetodosPix" class="btn-outline">Voltar</button>
            </div>
        `;
        document.getElementById("btnConfirmarPix")?.addEventListener("click", () => {
            const aceite = document.getElementById("lgpdPix")?.checked;
            if (!aceite) { alert("Concorde com a LGPD."); return; }
            simularPagamento(true);
        });
        document.getElementById("btnVoltarMetodosPix")?.addEventListener("click", () => {
            telaAtual = "pagamento";
            renderizar();
        });
        return;
    }

    // ---- acompanhar o status ----
    if (telaAtual === "acompanharStatus") {
        if (!usuarioLogado) {
            main.innerHTML = `<div class="card"><p>Você precisa estar logado para acompanhar um pedido.</p><button id="btnLoginStatus">Ir para Login</button><button id="btnVoltarHomeStatus" class="btn-outline">Voltar</button></div>`;
            document.getElementById("btnLoginStatus")?.addEventListener("click", () => {
                telaAtual = "login";
                renderizar();
            });
            document.getElementById("btnVoltarHomeStatus")?.addEventListener("click", () => {
                telaAtual = "home";
                renderizar();
            });
            return;
        }
        const statusPedido = localStorage.getItem("statusPedido");
        const numeroPedido = localStorage.getItem("numeroPedido");
        if (!statusPedido || statusPedido === "Retirado") {
            main.innerHTML = `<div class="card"><p>📭 Não existe nenhum pedido em andamento. Gostaria de realizar um pedido?</p><button id="btnFazerPedidoStatus">Fazer Pedido</button><button id="btnVoltarHomeStatus2" class="btn-outline">Voltar</button></div>`;
            document.getElementById("btnFazerPedidoStatus")?.addEventListener("click", () => {
                telaAtual = "selecionarUnidadePedido";
                renderizar();
            });
            document.getElementById("btnVoltarHomeStatus2")?.addEventListener("click", () => {
                telaAtual = "home";
                renderizar();
            });
        } else {
            main.innerHTML = `
                <div class="card">
                    <h2>📦 Acompanhamento do Pedido nº ${numeroPedido || "????"}</h2>
                    <br>
                    <p><strong>Status:</strong> ${statusPedido}</p>
                    <div class="status-bar">
                        <div class="status-step ${statusPedido === 'Preparando' ? 'ativo' : ''}">👩‍🍳 Preparando</div>
                        <div class="status-step ${statusPedido === 'Pronto' ? 'ativo' : ''}">✅ Pronto</div>
                        <div class="status-step ${statusPedido === 'Retirado' ? 'ativo' : ''}">🛍️ Retirado</div>
                    </div>
                    <button id="btnAvancarStatus">🔄 Atualizar status</button>
                    <button id="btnVoltarHomeStatus3" class="btn-outline">Voltar ao Início</button>
                </div>
            `;
            document.getElementById("btnAvancarStatus")?.addEventListener("click", () => {
                let atual = localStorage.getItem("statusPedido");
                if (atual === "Preparando") localStorage.setItem("statusPedido", "Pronto");
                else if (atual === "Pronto") localStorage.setItem("statusPedido", "Retirado");
                else alert("Pedido já finalizado.");
                renderizar();
            });
            document.getElementById("btnVoltarHomeStatus3")?.addEventListener("click", () => {
                telaAtual = "home";
                renderizar();
            });
        }
        return;
    }

    // ---- fidelidade ----
    if (telaAtual === "fidelidade") {
        if (!usuarioLogado) {
            main.innerHTML = `<div class="card"><p>🔒 Faça login para verificar seus pontos de fidelidade.</p><button id="btnLoginFidelidade">Ir para Login</button><button id="btnVoltarHomeFid" class="btn-outline">Voltar</button></div>`;
            document.getElementById("btnLoginFidelidade")?.addEventListener("click", () => {
                telaAtual = "login";
                renderizar();
            });
            document.getElementById("btnVoltarHomeFid")?.addEventListener("click", () => {
                telaAtual = "home";
                renderizar();
            });
            return;
        }
        const validade = localStorage.getItem(`validadePontos_${usuarioLogado.id}`) || gerarDataValidadePontos();
        localStorage.setItem(`validadePontos_${usuarioLogado.id}`, validade);
        main.innerHTML = `
            <div class="card">
                <h2>Programa de Fidelidade ⭐</h2>
                <p><strong>${usuarioLogado.nome}</strong>, você tem <strong>${usuarioLogado.pontos}</strong> pontos.</p>
                <p>Validade dos pontos: 📅 <strong>${validade}</strong></p>
                <p>A cada R$ 1 em compras, você acumula 1 ponto.</p>
                <p>Os pontos podem ser trocados em desconto nos próximos pedidos: <strong>50 pontos = 5% de desconto</strong>. 🤑</p>
                <button id="btnVoltarHomeFid2" class="btn-outline">Voltar ao Início</button>
            </div>
        `;
        document.getElementById("btnVoltarHomeFid2")?.addEventListener("click", () => {
            telaAtual = "home";
            renderizar();
        });
        return;
    }

    // ---- ultimos pedidos ----
    if (telaAtual === "ultimosPedidos") {
        if (!usuarioLogado) {
            main.innerHTML = `<div class="card"><p>🔒 Faça login para verificar seus últimos pedidos.</p><button id="btnLoginHistorico">Ir para Login</button><button id="btnVoltarHomeHist" class="btn-outline">Voltar</button></div>`;
            document.getElementById("btnLoginHistorico")?.addEventListener("click", () => {
                telaAtual = "login";
                renderizar();
            });
            document.getElementById("btnVoltarHomeHist")?.addEventListener("click", () => {
                telaAtual = "home";
                renderizar();
            });
            return;
        }
        const pedidos = getUltimosPedidosDoUsuario();
        if (pedidos.length === 0) {
            main.innerHTML = `<div class="card"><p>Você ainda não realizou nenhum pedido.</p><button id="btnFazerPedidoHist">Fazer Pedido</button><button id="btnVoltarHomeHist2" class="btn-outline">Voltar</button></div>`;
            document.getElementById("btnFazerPedidoHist")?.addEventListener("click", () => {
                telaAtual = "selecionarUnidadePedido";
                renderizar();
            });
            document.getElementById("btnVoltarHomeHist2")?.addEventListener("click", () => {
                telaAtual = "home";
                renderizar();
            });
        } else {
            let html = `<div class="card"><h2>📜 Seus Últimos Pedidos</h2>`;
            pedidos.forEach(p => {
                html += `<div class="historico-item">
                            <strong>Pedido #${p.numero}</strong> <span class="data-pedido">${p.dataHora}</span><br>
                            Total: R$ ${p.total.toFixed(2)}<br>
                            Itens: ${p.itens.map(i => `${i.qtd}x ${i.nome}`).join(', ')}
                         </div>`;
            });
            html += `<button id="btnVoltarHomeHist3" class="btn-outline">Voltar ao Início</button></div>`;
            main.innerHTML = html;
            document.getElementById("btnVoltarHomeHist3")?.addEventListener("click", () => {
                telaAtual = "home";
                renderizar();
            });
        }
        return;
    }
}

function simularPagamento(sucesso) {
    setTimeout(() => {
        if (sucesso) {
            let totalOriginal = carrinho.reduce((s,i)=>s+(i.preco*i.qtd),0);
            let total = totalOriginal;
            let pontosGanhos = Math.floor(totalOriginal);
            if (aplicarDesconto && usuarioLogado && usuarioLogado.pontos >= 50) {
                const grupos50 = Math.floor(usuarioLogado.pontos / 50);
                let descontoPercentual = grupos50 * 5;
                if (descontoPercentual > 50) descontoPercentual = 50;
                total = totalOriginal * (1 - descontoPercentual / 100);
            }
            if (new Date().getDay() === 3) {
                pontosGanhos *= 2;
                alert("🎉 Promoção: pontos dobrados!");
            }
            if (usuarioLogado) {
                usuarioLogado.pontos += pontosGanhos;
                salvarEstado();
            }
            alert(`✅ Pagamento aprovado! Pedido enviado para a cozinha.\nVocê ganhou ${pontosGanhos} pontos. Total: ${usuarioLogado?.pontos || 0} pontos.`);
            const numeroPedido = Math.floor(1000 + Math.random() * 9000);
            salvarPedidoHistorico(numeroPedido, [...carrinho], total, aplicarDesconto, 0);
            carrinho = [];
            aplicarDesconto = false;
            salvarEstado();
            localStorage.setItem("statusPedido", "Preparando");
            localStorage.setItem("numeroPedido", numeroPedido);
            unidadeSelecionadaPedido = null;
            telaAtual = "acompanharStatus";
            renderizar();
        } else {
            alert("❌ Pagamento recusado. Tente novamente.");
        }
    }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
    carregarEstado();
    renderizar();

    const menuLinks = document.querySelectorAll(".menu-nav a");
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const pagina = link.getAttribute("data-page");
            if (pagina === "home") telaAtual = "home";
            else if (pagina === "cardapio") telaAtual = "cardapio";
            else if (pagina === "fazerPedido") {
                if (!usuarioLogado) telaAtual = "login";
                else telaAtual = "selecionarUnidadePedido";
            } else if (pagina === "acompanharStatus") telaAtual = "acompanharStatus";
            else if (pagina === "fidelidade") telaAtual = "fidelidade";
            else if (pagina === "ultimosPedidos") telaAtual = "ultimosPedidos";
            else if (pagina === "sair") {
                usuarioLogado = null;
                salvarEstado();
                telaAtual = "home";
            }
            renderizar();
        });
    });
});