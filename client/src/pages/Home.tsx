/**
 * Direção visual: reprodução fiel da referência Lana/Farmasi — gradiente rosa-coral,
 * cartão branco de chat, tipografia Poppins, atalhos em cápsulas e interação compacta.
 */
import { useEffect, useRef, useState } from "react";
import { Mic, Send, Sparkles } from "lucide-react";

type Option = { id: number; label: string; text: string; link?: string };
type Message = { id: number; text: string; from: "lana" | "user"; link?: string; suggestion?: Option };

const options: Option[] = [
  { id: 1, label: "🧭 Sou iniciante na Farmasi", text: "Está começando agora? Eu te explico como funciona a Farmasi, como lucrar e o que fazer nos primeiros dias.", link: "https://www.youtube.com/watch?v=y1sFjbazQfA&t=336s" },
  { id: 2, label: "📝 Link de cadastro", text: "Como pegar o seu link de Cadastro no seu Escritório Virtual.", link: "https://www.youtube.com/shorts/qKq5yXqalgg" },
  { id: 3, label: "🛍️ Sua loja virtual", text: "Aqui você encontra sua loja online Farmasi. Compartilhe o link e comece a vender agora mesmo!", link: "https://www.youtube.com/shorts/qKq5yXqalgg" },
  { id: 4, label: "📦 Primeiro pedido", text: "Chegou a hora do seu primeiro pedido! Eu te mostro como fazer tudo direitinho para garantir seus produtos e bônus.", link: "https://www.youtube.com/watch?v=9IuRnaC1Ru8" },
  { id: 5, label: "💳 Comprar na loja virtual", text: "Quer comprar produtos Farmasi com desconto direto da sua loja? Eu te mostro como fazer!" },
  { id: 6, label: "🧾 Abrir um chamado", text: "Precisa de ajuda com algum pedido ou problema? Eu te ensino como abrir um chamado direto no suporte da Farmasi.", link: "https://www.youtube.com/shorts/sMRj086JtGU?si=139fS7i7fK546rgc" },
  { id: 7, label: "📚 Materiais Farmasi", text: "Aqui estão todos os materiais oficiais: catálogos, treinamentos, vídeos e guias para você estudar e crescer no negócio.", link: "https://drive.google.com/drive/folders/17NYgiK-8r2gOTwiOznrkHaFYjcUYLAMH" },
  { id: 8, label: "💬 Conversar com um atendente", text: "Precisa falar com o atendimento Farmasi? Clique abaixo e envie sua mensagem pelo WhatsApp.", link: "https://api.whatsapp.com/send?phone=551151086957" },
  { id: 9, label: "🚚 Acompanhar o seu pedido", text: "Quer saber onde está sua encomenda? Eu te ensino como rastrear seu pedido em poucos segundos.", link: "https://www.youtube.com/shorts/d1ZvZ6jPFJ0" },
  { id: 10, label: "🧾 Como fazer o cadastro", text: "Dúvidas no processo de cadastro? Veja o passo a passo completo neste vídeo tutorial.", link: "https://youtu.be/FWZX8vkcBbc" },
  { id: 11, label: "🔄 Reativar cadastro", text: "Ficou um tempo sem usar sua conta Farmasi? Eu te ensino como reativar e voltar a vender normalmente!", link: "https://www.youtube.com/shorts/z2slLiKS1d4" },
  { id: 12, label: "🚀 Mudar cadastro de Cliente P. F. Influencer", text: "É cliente e quer virar Influencer? Eu te mostro como alterar seu cadastro e aproveitar todos os benefícios.", link: "https://www.youtube.com/watch?v=yUv1DdFsfhM" },
];

const initialMessages: Message[] = [{ id: 0, from: "lana", text: "Olá! 👋 Eu sou a Lana, sua assistente virtual Farmasi.\n\nComo posso te ajudar hoje? ✨" }];

function findSuggestion(text: string) {
  const normalized = text.toLowerCase();
  const keywords: [string[], number][] = [
    [["iniciante", "primeiros passos", "começar"], 1], [["link de cadastro", "cadastrar"], 2], [["loja virtual", "minha loja"], 3],
    [["primeiro pedido", "fazer pedido", "como pedir"], 4], [["comprar", "site da farmasi"], 5], [["chamado", "suporte", "abrir chamado"], 6],
    [["materiais", "catálogos", "guias", "treinamentos"], 7], [["atendente", "whatsapp", "falar com"], 8], [["acompanhar", "rastrear", "entrega"], 9],
    [["passo a passo", "como fazer o cadastro"], 10], [["reativar", "reativação"], 11], [["mudar cadastro", "cliente para influencer"], 12],
  ];
  const match = keywords.find(([words]) => words.some((word) => normalized.includes(word)));
  return match ? options.find((option) => option.id === match[1]) : undefined;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [firstInteraction, setFirstInteraction] = useState(true);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" }); }, [messages]);

  const addOption = (option: Option) => {
    setFirstInteraction(false);
    setMessages((current) => [...current, { id: Date.now(), from: "user", text: option.label }]);
    window.setTimeout(() => setMessages((current) => [...current, { id: Date.now() + 1, from: "lana", text: option.text, link: option.link }]), 420);
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const suggestion = findSuggestion(text);
    setMessages((current) => [...current, { id: Date.now(), from: "user", text }]);
    window.setTimeout(() => setMessages((current) => [...current, suggestion
      ? { id: Date.now() + 1, from: "lana", text: `Encontrei uma opção que pode te ajudar com sua dúvida sobre "${text}".`, suggestion }
      : { id: Date.now() + 1, from: "lana", text: "Obrigada pela sua mensagem! Para te ajudar melhor, por favor escolha uma das opções ou entre em contato com seu patrocinador. 😊" }]), 420);
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="container">
        <header className="hero-heading">
          <div className="brand-line"><img src="/manus-storage/lana-mark_db0c37a6.png" alt="" className="brand-mark" /><h1>Lana - Assistente Virtual Farmasi</h1></div>
          <p><Sparkles size={15} fill="currentColor" /> Sua consultora de beleza virtual está aqui para ajudar! <Sparkles size={15} fill="currentColor" /></p>
        </header>
        <div className="avatar-container"><div className="avatar-wrapper"><img src="/manus-storage/lana_avatar_0b543fc6.jpeg" alt="Avatar da Lana" className="avatar" /><span className="status-indicator" /></div></div>
        <section className="chat-container" aria-label="Conversa com Lana">
          <div className="chat-messages" ref={messagesRef}>
            {messages.map((message) => <div className={`message ${message.from === "lana" ? "lana-message" : "user-message"}`} key={message.id}>
              <div className="message-content">{message.from === "lana" && <strong>Lana: </strong>}{message.text.split("\n").map((part, index) => <span key={index}>{part}{index < message.text.split("\n").length - 1 && <><br /><br /></>}</span>)}
                {message.link && <><br /><br /><a href={message.link} target="_blank" rel="noreferrer" className="link-button">🔗 Clique aqui para acessar</a></>}
                {message.suggestion && <><br /><button className="suggested-button" onClick={() => addOption(message.suggestion!)}>Clique aqui: {message.suggestion.label}</button></>}
              </div>
            </div>)}
          </div>
          <div className="quick-options" aria-label="Opções rápidas">{options.map((option) => <button key={option.id} className="quick-btn" onClick={() => addOption(option)}>{option.label}</button>)}</div>
          <div className="input-area"><label htmlFor="user-input" className="sr-only">Digite sua pergunta sobre Farmasi</label><input id="user-input" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") sendMessage(); }} placeholder="Digite sua pergunta sobre Farmasi..." /><button className="mic-btn" aria-label="Ativar microfone" onClick={() => window.alert("Funcionalidade de reconhecimento de voz em desenvolvimento! 🎤")}><Mic size={18} /></button><button className="send-btn" onClick={sendMessage}><Send size={15} /> Enviar</button></div>
        </section>
        <div className="made-with">✣ Made with Manus</div>
      </div>
    </main>
  );
}
