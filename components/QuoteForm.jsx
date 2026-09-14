"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { Input, Select, Textarea } from "./fields/Field";
import { WHATSAPP_URL } from "@/lib/site";
import { EMPTY_LEAD, MAX, validateLead } from "@/lib/lead-validation";

export const USOS = [
  "Jardim ou área de lazer",
  "Condomínio",
  "Escola ou creche",
  "Playground",
  "Quadra poliesportiva",
  "Campo de futebol",
  "Evento ou vitrine",
  "Outro",
];

export default function QuoteForm({ origem = "site" }) {
  const [values, setValues] = useState(EMPTY_LEAD);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const honeypot = useRef("");

  function update(field) {
    return (event) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      // Limpar o erro assim que a pessoa corrige evita o campo ficar vermelho
      // enquanto ela ainda está digitando a correção.
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    const found = validateLead(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus("idle");
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, origem, website: honeypot.current }),
      });
      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (payload.errors) {
          setErrors(payload.errors);
          setStatus("idle");
          document.getElementById(Object.keys(payload.errors)[0])?.focus();
          return;
        }
        throw new Error(payload.message || "Falha no envio.");
      }

      setValues(EMPTY_LEAD);
      setStatus("success");
    } catch (error) {
      setMessage(error.message || "Não foi possível enviar o pedido.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-blade)",
          padding: "var(--space-10)",
          display: "grid",
          gap: "var(--space-4)",
          justifyItems: "start",
          alignContent: "center",
          minHeight: 420,
        }}
      >
        <span
          style={{
            display: "grid",
            placeItems: "center",
            width: 52,
            height: 52,
            borderRadius: "var(--radius-pill)",
            background: "var(--surface-brand-soft)",
            color: "var(--green-700)",
          }}
        >
          <Icon name="shield-check" size={26} />
        </span>
        <h3 style={{ fontSize: "var(--text-heading-2)", margin: 0, fontWeight: "var(--fw-bold)" }}>Pedido enviado.</h3>
        <p style={{ fontSize: "var(--text-base)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)", margin: 0 }}>
          Recebemos seu pedido e entramos em contato dentro de poucas horas. Se preferir falar agora, o WhatsApp é o
          canal mais rápido.
        </p>
        <a
          href={WHATSAPP_URL}
          style={{
            border: 0,
            display: "flex",
            alignItems: "center",
            gap: 10,
            height: "var(--control-h-md)",
            padding: "0 var(--space-6)",
            borderRadius: "var(--radius-pill)",
            background: "var(--whatsapp)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--fw-semibold)",
          }}
        >
          <Image src="/assets/whatsapp-icon-white.png" alt="" width={18} height={18} />
          Falar no WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          style={{
            border: 0,
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--green-700)",
          }}
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-blade)",
        padding: "var(--space-8)",
        display: "grid",
        gap: "var(--space-5)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div style={{ display: "grid", gap: "var(--space-1)" }}>
        <span className="pg-eyebrow">Pedido de orçamento</span>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          Leva menos de um minuto. Sem compromisso.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "var(--space-5)" }}>
        <Input
          label="Nome *"
          name="nome"
          placeholder="Seu nome completo"
          maxLength={MAX.nome}
          value={values.nome}
          onChange={update("nome")}
          error={errors.nome}
          autoComplete="name"
        />
        <Input
          label="Telefone / WhatsApp *"
          name="telefone"
          type="tel"
          placeholder="(11) 90000-0000"
          maxLength={MAX.telefone}
          value={values.telefone}
          onChange={update("telefone")}
          error={errors.telefone}
          autoComplete="tel"
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "var(--space-5)" }}>
        <Select
          label="Finalidade *"
          name="finalidade"
          placeholder="Selecione o uso"
          options={USOS}
          value={values.finalidade}
          onChange={update("finalidade")}
          error={errors.finalidade}
        />
        <Input
          label="Cidade / UF *"
          name="cidade"
          placeholder="São Paulo — SP"
          maxLength={MAX.cidade}
          value={values.cidade}
          onChange={update("cidade")}
          error={errors.cidade}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "var(--space-5)" }}>
        <Input
          label="E-mail"
          name="email"
          type="email"
          placeholder="nome@empresa.com.br"
          maxLength={MAX.email}
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          autoComplete="email"
        />
        <Input
          label="Metragem aproximada"
          name="metragem"
          placeholder="120"
          suffix="m²"
          inputMode="numeric"
          maxLength={MAX.metragem}
          value={values.metragem}
          onChange={update("metragem")}
          hint="Se não souber, informamos na visita técnica."
        />
      </div>

      <Textarea
        label="Sobre o espaço"
        name="detalhes"
        placeholder="Instalação nova ou troca, condição do piso (concreto, brita, terra), prazo desejado."
        rows={3}
        maxLength={MAX.detalhes}
        value={values.detalhes}
        onChange={update("detalhes")}
      />

      {/* Isca para bots: escondido de quem vê a página, mas preenchido por scripts. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        onChange={(e) => {
          honeypot.current = e.target.value;
        }}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      {status === "error" && (
        <div
          role="alert"
          style={{
            background: "var(--danger-surface)",
            border: "1px solid var(--danger)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-4)",
            display: "grid",
            gap: "var(--space-2)",
          }}
        >
          <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--danger)" }}>{message}</span>
          <a href={WHATSAPP_URL} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--green-700)", border: 0 }}>
            Enviar pelo WhatsApp →
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          height: "var(--control-h-lg)",
          border: 0,
          borderRadius: "var(--radius-pill)",
          background: "var(--green-500)",
          color: "#fff",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--fw-semibold)",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
          boxShadow: "var(--shadow-brand)",
        }}
      >
        {status === "sending" ? "Enviando..." : "Solicitar orçamento gratuito"}
      </button>

      <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
        Proposta com validade de 7 dias. Não compartilhamos seus dados.
      </p>
    </form>
  );
}
