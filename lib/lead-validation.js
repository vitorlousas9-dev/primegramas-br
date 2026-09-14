// Regras de validação do pedido de orçamento. Vivem num módulo só para que o
// formulário (cliente) e a API route (servidor) não possam divergir: o cliente
// mostra o erro sem esperar pela rede, o servidor valida na mesma por não poder
// confiar em nada que venha do browser.

export const MAX = {
  nome: 120,
  telefone: 40,
  email: 160,
  cidade: 120,
  finalidade: 80,
  metragem: 20,
  detalhes: 2000,
};

export const EMPTY_LEAD = {
  nome: "",
  telefone: "",
  email: "",
  cidade: "",
  finalidade: "",
  metragem: "",
  detalhes: "",
};

// Aceita os formatos que um cliente brasileiro escreve na prática:
// "(11) 91234-5678", "11912345678", "+55 11 91234-5678", "11 4112-4329".
// DDD de 11 a 99, celular com 9 dígitos começando em 9, fixo com 8 começando em 2-5.
export function isPhone(value) {
  const digits = String(value || "").replace(/[\s().+-]/g, "");
  return /^(?:55)?[1-9][1-9](?:9\d{8}|[2-5]\d{7})$/.test(digits);
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value || ""));
}

export function clean(value, limit) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export function normalizeLead(body) {
  return {
    nome: clean(body.nome, MAX.nome),
    telefone: clean(body.telefone, MAX.telefone),
    email: clean(body.email, MAX.email),
    cidade: clean(body.cidade, MAX.cidade),
    finalidade: clean(body.finalidade, MAX.finalidade),
    metragem: clean(body.metragem, MAX.metragem),
    detalhes: clean(body.detalhes, MAX.detalhes),
  };
}

export function validateLead(values) {
  const errors = {};
  if (clean(values.nome, MAX.nome).length < 2) errors.nome = "Informe seu nome.";
  if (!isPhone(values.telefone)) errors.telefone = "Informe um telefone válido com DDD.";
  if (!clean(values.finalidade, MAX.finalidade)) errors.finalidade = "Escolha a finalidade.";
  if (!clean(values.cidade, MAX.cidade)) errors.cidade = "Informe a cidade e o estado.";
  // O e-mail é opcional, mas se for preenchido tem de estar correto.
  const email = clean(values.email, MAX.email);
  if (email && !isEmail(email)) errors.email = "E-mail inválido.";
  return errors;
}
