# 🌊 Guia de Enchentes — Site Informativo

Site estático com orientações sobre enchentes: áreas de risco, sinais de alerta, o que fazer antes, durante e depois, contatos de emergência e um quiz para testar o que a pessoa aprendeu.

Projeto da **Global Solution 2025 (FIAP)**, disciplina de Front-end Design, orientado pelo Prof. Caio Oliveira.

---

## O problema

Em enchentes, muita gente é pega de surpresa: não sabe se mora numa área de risco, não reconhece os sinais de que a água vai subir e não sabe o que fazer com documentos, energia elétrica e alimentos. A proposta do site é reunir essas orientações num lugar só, com linguagem simples.

## O que o site tem

| Página | Conteúdo |
|---|---|
| `index.html` | Apresentação do problema, da solução e dos benefícios, com galeria de fotos |
| `areas_de_risco.html` | Locais mais vulneráveis e o que os torna perigosos |
| `sinais_de_alerta.html` | Sinais ambientais e visuais de que o risco está aumentando |
| `acoes_de_emergencia.html` | O que fazer antes, durante e depois de uma enchente |
| `contatos_de_emergencia.html` | Telefones e serviços de emergência |
| `quiz.html` | Quiz de 10 perguntas com pontuação no final |

## Como foi feito

- **HTML** com uma página por tema e menu de navegação comum a todas
- **CSS** em `style.css`, com layout responsivo (ajuste abaixo de 768px de largura)
- **JavaScript** em `script.js`:
  - menu hambúrguer no celular
  - galeria de fotos com botões de anterior e próxima
  - quiz que mostra uma pergunta por vez, marca a resposta certa e a errada, soma os acertos e permite recomeçar

### Paleta de cores (regra 60-30-10)

| Uso | Cor |
|---|---|
| Dominante (60%): fundo da página | `#E0F2F7` azul muito claro |
| Secundária (30%): blocos de conteúdo | `#FFFFFF` branco |
| Destaque (10%): links e subtítulos | `#FFA07A` salmão |

## Como rodar

Não precisa de instalação: baixe o repositório e abra o `index.html` no navegador.

```bash
git clone https://github.com/Neres73/gs-front-end.git
```

---

Projeto acadêmico, desenvolvido por [Gustavo Neres](https://github.com/Neres73).
