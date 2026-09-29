/* ============================================================
   DADOS COMERCIAIS — Método Quebrando o Ciclo
   Único ponto de verdade para flags e números comerciais.
   A URL do checkout aparece UMA única vez em todo o código,
   aqui. Nenhum outro componente deve repeti-la.
   ============================================================ */

/** URL do checkout (Cakto). Definida uma única vez. */
export const CHECKOUT_URL = "https://pay.cakto.com.br/393mf7k_787587";

/** Preço atual do produto (texto pronto para exibição). */
export const PRICE = "R$ 49,90";

/** Preço âncora riscado. Mostrado apenas se SHOW_STRIKE_PRICE. */
export const STRIKE_PRICE = "R$ 127,00";

/** Seção de prova social (depoimentos). Sem depoimentos aprovados, fica oculta. */
export const SHOW_SOCIAL_PROOF = false;

/** Linha de avaliação no hero ("4.9/5 · 347 mulheres"). Sem fonte verificável, fica oculta. */
export const SHOW_RATING_LINE = false;

/** Preço âncora riscado no card de oferta. */
export const SHOW_STRIKE_PRICE = true;

/** Registro CRN da nutricionista. Só renderiza com o número confirmado. */
export const SHOW_CRN = false;
export const CRN_NUMERO = "";

/** Lista das 14 aulas na seção "O que você recebe". Precisa da lista real. */
export const SHOW_LESSON_LIST = false;

/** 4º slide do carrossel do app (tela das aulas). Precisa da arte da tela. */
export const SHOW_LESSON_SLIDE = false;

/* ---------- FAQ: perguntas que dependem de [CONFIRMAR] ---------- */
/** "Por quanto tempo posso acessar?" — aguarda confirmação do prazo real. */
export const SHOW_FAQ_ACCESS = false;
/** "Funciona no iPhone e no Android?" — aguarda confirmação das plataformas. */
export const SHOW_FAQ_DEVICES = false;
/** "Posso falar com a Natália?" — aguarda definição do canal de contato. */
export const SHOW_FAQ_CONTACT = false;

/* ---------- Rodapé: dados da empresa ---------- */
/** Preencher para exibir. Vazios = linhas não renderizadas. */
export const RAZAO_SOCIAL = "";
export const CNPJ = "";
export const SUPORTE_EMAIL = "";
