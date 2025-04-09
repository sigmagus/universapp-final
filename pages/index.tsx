import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const letterMeanings = {
  A: "Astro aprobado",
  B: "Bendiciones bloqueadas",
  C: "Caos cósmico",
  D: "Dios te observa (y se ríe)",
  E: "Energía enredada",
  F: "Fuerza de florero",
  G: "Guía espiritual dormida",
  H: "Haz lo que quieras (pero con culpa)",
  I: "Iluminación intermitente",
  J: "Juicio sin contexto",
  K: "Karma directo",
  L: "Luz lateral",
  M: "Manifestación mal calibrada",
  N: "Nivel de neblina existencial",
  O: "Oportunidad oculta (probablemente un error)",
  P: "Paz pero con ansiedad",
  Q: "Queja cósmica",
  R: "Reencarnación en modo lento",
  S: "Símbolo de sabiduría dudosa",
  T: "Tragedia transformadora",
  U: "Universo sin Wi-Fi",
  V: "Vibración vacilante",
  W: "Woke pero confundido",
  X: "Xilófono astral (o sea, nada que ver)",
  Y: "Yin-Yang desbalanceado",
  Z: "Zona de sombra espiritual"
};

const numberMeanings = {
  "0": "Inicio del ciclo espiritual. También conocido como 'no saber qué estás haciendo'.",
  "1": "Energía de liderazgo... que nadie te pidió.",
  "2": "Dualidad emocional: paz por fuera, drama por dentro.",
  "3": "Expresión creativa sin presupuesto.",
  "4": "Estabilidad emocional con grietas estéticas.",
  "5": "Cambios inesperados, como tus decisiones de moda.",
  "6": "Responsabilidad emocional... aplazada.",
  "7": "Sabiduría ancestral basada en memes.",
  "8": "Éxito potencial, si te levantas antes del mediodía.",
  "9": "Cierre de ciclos que ni habías abierto."
};

const spiritualCodes = {
  "111": "Estás alineado con algo... probablemente un deseo que cambiaste tres veces hoy.",
  "222": "El universo te dice que confíes. Tú dile que te mande pruebas por correo.",
  "333": "Tus ángeles están comunicativos. Responden más rápido que tu ex.",
  "444": "Protección divina activada. Te cubre como Wi-Fi de cafetería: inestable pero sirve.",
  "555": "Cambios vienen. Asegúrate de que no sean de humor nomás.",
  "666": "No es el diablo, es tu reflejo en un espejo de ansiedad espiritual.",
  "777": "Éxito a la vista. No sabemos qué éxito, pero tú finge seguridad.",
  "888": "Abundancia. O por lo menos, cupón de 10% en algo que no necesitas.",
  "999": "Cierre de ciclo. Otra vez. Llevas como 9 cierres este mes ya."
};

const dailySpiritualMessages = [
  "Tu cuarzo interior necesita que lo limpies. Y con eso me refiero a que dejes de inventarte problemas.",
  "Hoy es un buen día para tomar agua y dejar de stalkear señales en todos lados.",
  "Mercurio no está retrógrado, eres tú. Revísate.",
  "Hoy sentirás una energía... pero es solo hambre. Come primero, medita después.",
  "Una señal te llegará en forma de TikTok. Ignórala. Es puro algoritmo y ansiedad.",
  "La luna te mira. Pero no por ti, sino porque tú la miraste primero.",
  "No es intuición, es paranoia disfrazada. Relájate, vibra menos alto hoy."
];

const horoscopes = [
  "Aries: hoy te peleas con alguien por gusto. Energía 10/10, diplomacia 2/10.",
  "Tauro: el universo te dice que gastes, pero tu cuenta dice que no. Escoge bien.",
  "Géminis: hoy te caes bien. Mañana no sabemos.",
  "Cáncer: emociones en HD. Lloraste viendo un reel. Todo normal.",
  "Leo: brillas aunque nadie te lo haya pedido. Buen día para selfies.",
  "Virgo: organizaste tus ideas. Ahora sólo falta tenerlas.",
  "Libra: estética 10/10, decisiones 0/10. Deja de cambiar de outfit.",
  "Escorpio: alguien pensó en ti... con miedo. Bien hecho.",
  "Sagitario: tienes ganas de huir otra vez. Pero esta vez hazlo con WiFi.",
  "Capricornio: planeas el 2042, pero no has comido. Bájale dos rayitas.",
  "Acuario: alien vibes activadas. Tus ideas no tienen sentido, pero suenan cool.",
  "Piscis: soñaste raro. Probablemente fue real. Probablemente fue la pizza."
];

function interpretPlate(input: string): string {
  const cleaned = input.toUpperCase().replace(/[^A-Z0-9]/g, "");

  if (cleaned in spiritualCodes) {
    return `Código especial: ${cleaned}\n${spiritualCodes[cleaned as keyof typeof spiritualCodes]}`;
  }

  const parts = cleaned.split("");
  const result = parts.map((char) => {
    if (letterMeanings[char as keyof typeof letterMeanings]) {
      return `${char}: ${letterMeanings[char as keyof typeof letterMeanings]}`;
    } else if (numberMeanings[char as keyof typeof numberMeanings]) {
      return `${char}: ${numberMeanings[char as keyof typeof numberMeanings]}`;
    } else {
      return `${char}: Señal ininteligible (pero claramente importante)`;
    }
  });

  return result.join("\n");
}

export default function UniversappMeme(): JSX.Element {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleInterpret = () => {
    const result = interpretPlate(input);
    const bonus = dailySpiritualMessages[Math.floor(Math.random() * dailySpiritualMessages.length)];
    const horoscope = horoscopes[Math.floor(Math.random() * horoscopes.length)];
    setMessage(`${result}\n\n✨ Mensaje espiritual del día: ${bonus}\n\n🔮 Horóscopo místico: ${horoscope}`);
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 19 || hour <= 5) {
      setIsDark(true);
    }
  }, []);

  return (
    <div className={`${isDark ? "bg-gray-900 text-rose-100" : "bg-gradient-to-b from-amber-100 to-rose-100 text-stone-800"} min-h-screen p-6 text-center transition-all`}>
      <h1 className="text-4xl font-bold mb-6">
        Universapp: Señales, placas y otras tonterías sagradas ✨
      </h1>

      <Card className="max-w-lg mx-auto bg-white/80 dark:bg-gray-800 border shadow-xl">
        <CardContent className="p-6 space-y-4">
          <p className="text-sm">
            Escribe una placa, número angelical o lo que viste en el camino:
          </p>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ej. 444, 64H 7KS, mariposa azul"
            className="w-full p-2 border border-rose-300 rounded-xl text-center text-black"
          />
          <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white" onClick={handleInterpret}>
            Interpretar con vibra elevada
          </Button>
          {message && (
            <pre className="whitespace-pre-wrap text-left text-sm bg-rose-50 dark:bg-gray-700 p-3 rounded-xl border">
              {message}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
}