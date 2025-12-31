// We define an 'interface' to tell TypeScript exactly what data to expect
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard(props: ProjectProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        margin: "1rem 0",
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "10px" }}>
        {props.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "#eee",
              padding: "2px 8px",
              fontSize: "0.8rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
