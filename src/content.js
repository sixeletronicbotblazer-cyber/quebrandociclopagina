/* ============================================================
   COPY DA LANDING PAGE — Método Quebrando o Ciclo
   Todo texto visível mora aqui. O JSX apenas renderiza.
   Regras: sem travessão (— –), sem emoji, sem caracteres de
   ícone unicode; ícones são SVG Phosphor; no máximo um "·" por linha.
   ============================================================ */

import { SHOW_FAQ_ACCESS, SHOW_FAQ_DEVICES, SHOW_FAQ_CONTACT } from "./comercial";


export const HERO = {
  brand: "QUEBRANDO O CICLO",
  brandBy: "por Natália Cavalcante",
  title: "Pare de recomeçar.",
  titleAccent: "Aprenda a continuar.",
  lead: "14 aulas curtas e missões rápidas no app para você retomar no dia seguinte, sem precisar acertar tudo.",
  cta: "Ver o método por dentro",
};

export const PAIN = {
  eyebrow: "Se isso soa familiar",
  title: "Cuidar da alimentação não precisa ser",
  titleAccent: "uma luta toda semana.",
  intro: "O problema muitas vezes aparece no intervalo entre saber o que fazer e conseguir repetir isso na vida real.",
  chips: [
    { icon: "trend-down", label: "Começa bem e para em poucos dias" },
    { icon: "brain", label: "Come em resposta ao estresse" },
    { icon: "smiley-sad", label: "Sente culpa depois de comer" },
    { icon: "compass", label: "Não sabe por onde retomar" },
    { icon: "scissors", label: "Corta tudo e depois desanda" },
    { icon: "calendar-blank", label: "Espera a próxima segunda-feira" },
  ],
  quote:
    "Eu sei que você já tentou. Cortou o carbo, fez a dieta da lua, usou aplicativo de caloria, comprou shake, recomeçou mais vezes do que consegue contar. E ainda assim está aqui, sentindo que falta alguma coisa.",
  quoteAuthor: "Natália Cavalcante, nutricionista",
  bridge: "Quem mantém a constância não é quem acerta tudo. É quem sabe o que fazer no dia seguinte.",
};

export const APP = {
  title: "O app que mostra",
  titleAccent: "o que fazer hoje.",
  intro: "Missões, jornada e receitas em um só lugar.",
  slides: [
    {
      image: "/assets/app-inicio.webp",
      alt: "Aplicativo Quebrando o Ciclo mostrando progresso do dia, registro de água e ações rápidas",
      caption: "Seu dia organizado",
      note: "Água, refeições e um próximo passo sempre à vista.",
    },
    {
      image: "/assets/app-jornada.webp",
      alt: "Aplicativo mostrando as fases da jornada de mentalidade, alimentação e hidratação",
      caption: "Uma jornada clara",
      note: "Veja as fases e retome de onde parou.",
    },
    {
      image: "/assets/app-receitas.webp",
      alt: "Aplicativo mostrando a área de receitas saudáveis",
      caption: "Receitas à mão",
      note: "Encontre ideias para diferentes momentos da rotina.",
    },
  ],
};

export const METHOD = {
  eyebrow: "O método",
  title: "Como o método quebra o ciclo do recomeço.",
  intro:
    "O ciclo sempre segue a mesma sequência: começo animado, deslize, culpa e uma nova segunda-feira. O método mostra o que fazer no meio dessa sequência.",
  steps: [
    {
      n: 1,
      ciclo: "Começa bem e para em poucos dias",
      metodo: "Perceba o gatilho",
      texto: "Reconheça situações em que emoções e rotina influenciam sua alimentação.",
    },
    {
      n: 2,
      ciclo: "Um deslize vira uma semana fora do trilho",
      metodo: "Escolha uma ação possível",
      texto: "Use as aulas, o plano e as substituições como apoio para planejar.",
    },
    {
      n: 3,
      ciclo: "A culpa chega e você corta tudo",
      metodo: "Pratique com missões curtas",
      texto: "Registre água, avance na jornada e acompanhe suas ações diárias.",
    },
    {
      n: 4,
      ciclo: "Espera a próxima segunda-feira",
      metodo: "Continue no dia seguinte",
      texto: "Consulte seu progresso e retome a próxima ação sem começar do zero.",
    },
  ],
  loopLegend: "O ciclo para aqui.",
  cta: "Quero quebrar o ciclo",
};

export const SHIFT = {
  title: "O que muda quando você",
  titleAccent: "quebra o ciclo.",
  intro: "Não é sobre o corpo. É sobre o que você faz depois de um deslize.",
  colBefore: "Antes",
  colAfter: "Depois",
  rows: [
    { antes: "Recomeça toda segunda-feira", depois: "Mantém os hábitos sem esforço extremo" },
    { antes: "Sente culpa depois de comer", depois: "Come sem culpa e com consciência" },
    { antes: "Come por ansiedade sem perceber", depois: "Reconhece os gatilhos antes de agir" },
    { antes: "Corta tudo e depois desanda", depois: "Equilíbrio sem restrição extrema" },
    { antes: "Sem acompanhamento no dia a dia", depois: "O app te acompanha todo dia" },
  ],
};

export const NATALIA = {
  photo: "/assets/expert-portrait.webp",
  photoAlt: "Natália Cavalcante, nutricionista criadora do método",
  title: "Feito por uma nutricionista,",
  titleAccent: "para quem cansou de recomeçar.",
  intro:
    "Natália Cavalcante é nutricionista. Ela criou o Método Quebrando o Ciclo para acompanhar mulheres que já sabiam o que comer, mas não conseguiam manter na prática. As aulas traduzem esse acompanhamento em um caminho simples de seguir.",
  points: [
    "Consulte as aulas quando precisar.",
    "Use missões e checklist para praticar.",
    "Veja sua evolução no próprio app.",
  ],
  cta: "Quero quebrar o ciclo",
};

export const AUDIENCE = {
  eyebrow: "Para quem faz sentido",
  title: "Para quem quer sair do",
  titleAccent: "\u201Ctudo ou nada\u201D.",
  items: [
    { title: "Já tentou várias dietas", desc: "Quer observar seus hábitos antes de mudar tudo de uma vez." },
    { title: "Come por emoção", desc: "Deseja perceber os gatilhos e fazer uma pausa antes da escolha." },
    { title: "Tem uma rotina corrida", desc: "Precisa de conteúdo para consultar e retomar quando puder." },
    { title: "Perde o ritmo facilmente", desc: "Quer usar missões e checklist como apoio cotidiano." },
    { title: "Quer organizar refeições", desc: "Busca plano, substituições e ferramentas de planejamento." },
    { title: "Quer ver o progresso", desc: "Prefere acompanhar pequenas ações sem exigir perfeição." },
  ],
  note: "Este método é um programa de educação alimentar. Não substitui diagnóstico nem acompanhamento individual. Se você tem alguma condição de saúde, converse com seu médico ou nutricionista antes de começar.",
};

export const RECEIVE = {
  badge: "14 AULAS + APLICATIVO + MATERIAIS",
  title: "O que você recebe.",
  cards: [
    {
      label: "PERCEBA",
      title: "7 aulas de comportamento alimentar",
      desc: "Mentalidade, gatilhos emocionais e consciência para reconhecer padrões antes de agir.",
      foot: "Módulo 1 · 7 aulas",
    },
    {
      label: "ESCOLHA",
      title: "7 aulas de alimentação prática",
      desc: "Plano alimentar, substituições e estratégias para lidar com a rotina.",
      foot: "Módulo 2 · 7 aulas",
    },
    {
      label: "CONTINUE",
      title: "Aplicativo incluído",
      desc: "Jornada, missões, água, receitas, checklist e conquistas em um só lugar.",
    },
  ],
  materials: [
    "Diário alimentar e planejamento semanal",
    "Receitas dentro do aplicativo",
    "Fichas de treino organizadas",
    "Materiais complementares para consulta",
    "Controle de água com meta personalizada",
  ],
  /** Lista das aulas (título + módulo). Ativada por SHOW_LESSON_LIST. */
  lessons: /** @type {Array<{ title: string, module: number }>} */ ([]),
};

export const OFFER = {
  title: "Tudo o que será liberado para você hoje",
  mockup: "/assets/app-mockup-premium.webp",
  mockupAlt: "Três telas do aplicativo Quebrando o Ciclo em celulares: início, jornada e receitas",
  productName: "Método Quebrando o Ciclo",
  items: [
    "14 aulas online em dois módulos",
    "Aplicativo com jornada e missões",
    "Controle de água e registro de progresso",
    "Plano alimentar e opções de substituição",
    "Receitas e planejamento semanal",
    "Diário alimentar e fichas de treino",
    "Garantia de 7 dias",
  ],
  strikeLabel: "De",
  payLabel: "pagamento único",
  cta: "Quero quebrar o ciclo por R$ 49,90",
  trust: ["Acesso imediato", "7 dias de garantia", "Pagamento seguro pela Cakto"],
};

export const TESTIMONIALS = {
  title: "Relatos de quem usa o método.",
  items: [
    {
      quote:
        "Sempre achei que era falta de força de vontade. Não era. Era falta de método. As aulas de comportamento alimentar mudaram minha cabeça antes de mudar meu prato.",
      author: "Renata Ferreira",
    },
    {
      quote:
        "O app foi o diferencial pra mim. Toda manhã eu abria e marcava minhas missões. Parece simples, mas essa consistência mudou tudo. 14 dias de sequência e continuo!",
      author: "Juliana Santos",
    },
    {
      quote:
        "Finalmente um plano que cabe na minha vida real. Trabalho, filho, rotina corrida e ainda assim consegui seguir. Não é perfeição, é consistência.",
      author: "Mariana Costa",
    },
  ],
};

export const GUARANTEE = {
  title: "Você tem 7 dias de garantia.",
  body: "Conheça as aulas, abra o aplicativo e teste na sua rotina. Se o método não for para você, peça o reembolso dentro de 7 dias e devolvemos o valor pago.",
};

export const ACCESS = {
  eyebrow: "Depois da compra",
  title: "Três passos para",
  titleAccent: "começar.",
  steps: [
    { title: "Finalize a compra", desc: "O pagamento é processado pela Cakto e a confirmação sai na hora." },
    { title: "Receba o e-mail de acesso", desc: "As instruções chegam no e-mail informado na compra, com o link das aulas e do aplicativo." },
    { title: "Abra a primeira aula", desc: "Comece pelo módulo 1 e faça a primeira missão do app no mesmo dia." },
  ],
};

export const FAQ = [
  {
    q: "O método é para quem já tentou várias dietas?",
    a: "Sim. Ele foi feito para quem já começou e parou mais de uma vez. Em vez de outra dieta, você aprende a reconhecer o que dispara o recomeço e o que fazer no dia seguinte.",
    show: true,
  },
  {
    q: "Preciso seguir uma dieta restritiva?",
    a: "Não. O foco é comportamento e escolhas possíveis. Entre os materiais há um plano alimentar de 1500 kcal, mas as necessidades variam: procure orientação profissional individualizada antes de adotá-lo.",
    show: true,
  },
  {
    q: "O que vem no acesso?",
    a: "14 aulas em dois módulos, aplicativo com jornada e missões, plano alimentar, receitas, diário, controle de água e fichas de treino.",
    show: true,
  },
  {
    q: "O pagamento é mensal?",
    a: "Não. É um pagamento único de R$ 49,90. Não há mensalidade nem cobrança adicional.",
    show: true,
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Peça o reembolso dentro desse período e o valor pago é devolvido.",
    show: true,
  },
  {
    q: "Funciona para quem tem rotina corrida?",
    a: "Sim. As aulas são curtas e as missões do app levam poucos minutos. Você consulta quando puder e retoma de onde parou, sem começar do zero.",
    show: true,
  },
  {
    q: "Por quanto tempo posso acessar?",
    a: "[CONFIRMAR prazo de acesso antes de publicar]",
    show: SHOW_FAQ_ACCESS,
  },
  {
    q: "Funciona no iPhone e no Android?",
    a: "[CONFIRMAR plataformas suportadas antes de publicar]",
    show: SHOW_FAQ_DEVICES,
  },
  {
    q: "Posso falar com a Natália?",
    a: "[CONFIRMAR canal de contato antes de publicar]",
    show: SHOW_FAQ_CONTACT,
  },
];

export const CLOSING = {
  title: "Você não precisa esperar a próxima segunda-feira.",
  titleAccent: "Comece hoje e continue amanhã.",
  cta: "Quero quebrar o ciclo por R$ 49,90",
  fine: "14 aulas, aplicativo e 7 dias de garantia.",
};

export const FOOTER = {
  links: ["Política de Privacidade", "Termos de Uso", "Contato"],
  copyright: "Método Quebrando o Ciclo. Todos os direitos reservados.",
  disclaimer: "Programa digital de educação alimentar. Resultados individuais variam. O conteúdo não substitui orientação individualizada.",
  meta: "Este site não faz parte do Facebook nem da Meta e não é endossado por eles.",
};

export const STICKY = {
  label: "R$ 49,90",
  note: "pagamento único",
  cta: "Quero quebrar o ciclo",
};
