import { Code2, PenTool, Wrench } from "lucide-react";

const technicalSkillGroups = [
  {
    label: "DESIGN & UX",
    Icon: PenTool,
    accent: "purple",
    items: [
      "UI Design",
      "UX Research",
      "Arquitetura da Informação",
      "Wireframing",
      "Prototipação",
      "Design Systems",
      "Acessibilidade",
    ],
    title: "Projetar com clareza.",
    description: "Entender problemas e projetar experiências claras e funcionais.",
  },
  {
    label: "FRONT-END",
    Icon: Code2,
    accent: "acid",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Responsive Design",
      "Componentização",
    ],
    title: "Construir com propósito.",
    description:
      "Transformar decisões de design em interfaces responsivas e bem estruturadas.",
  },
  {
    label: "FERRAMENTAS",
    Icon: Wrench,
    accent: "neutral",
    items: ["Figma", "VS Code", "Git", "GitHub", "Adobe Creative Suite", "DevTools"],
    title: "Dar forma ao processo.",
    description: "Ferramentas para criar, desenvolver e colaborar com fluidez.",
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
            <h3>{title}</h3>
            <p>{description}</p>
          </header>
          <ul className="skill-list">
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
