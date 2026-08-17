import { Code2, PenTool, Wrench } from "lucide-react";
import { TranslatedText } from "../i18n";

const technicalSkillGroups = [
  {
    label: "DESIGN & UX",
    Icon: PenTool,
    accent: "purple",
    items: [
      "UI Design",
      "UX Design",
      "Arquitetura da Informação",
      "Wireframing",
      "Prototipação",
      "Design Systems",
      "Acessibilidade",
    ],
    title: "Projetar experiências com clareza.",
    description: "Organizar interfaces e fluxos digitais com foco em clareza, consistência e usabilidade.",
  },
  {
    label: "FRONT-END",
    Icon: Code2,
    accent: "acid",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Design Responsivo",
      "React — em aprendizado",
      "TypeScript — em aprendizado",
    ],
    title: "Construir interfaces funcionais.",
    description:
      "Transformar decisões de design em experiências web responsivas, bem estruturadas e em evolução contínua.",
  },
  {
    label: "FERRAMENTAS",
    Icon: Wrench,
    accent: "neutral",
    items: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "VS Code", "IA aplicada ao processo"],
    title: "Dar forma ao processo.",
    description: "Ferramentas para projetar, desenvolver e organizar a entrega com mais fluidez.",
  },
];

export default function TechnicalSkills() {
  return (
    <div className="skills-grid">
      {technicalSkillGroups.map(({ label, title, description, Icon, accent, items }) => (
        <article className="skill-area" key={label}>
          <header className="skill-area-head">
            <div className="skill-category">
              <span className={`skill-icon skill-icon--${accent}`}>
                <Icon aria-hidden="true" size={17} />
              </span>
              <span>{label}</span>
            </div>
            <h3><TranslatedText>{title}</TranslatedText></h3>
            <p><TranslatedText>{description}</TranslatedText></p>
          </header>
          <ul className="skill-list">
            {items.map((item) => {
              const [skill, learningStatus] = item.split(" — ");
              return (
                <li key={item}>
                  <TranslatedText>{skill}</TranslatedText>
                  {learningStatus ? (
                    <span className="skill-learning-status"> — <TranslatedText>{learningStatus}</TranslatedText></span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </article>
      ))}
    </div>
  );
}
