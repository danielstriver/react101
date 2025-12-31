import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <div>
      <Navbar />

      <main style={{ padding: "2rem" }}>
        <h2>My Recent Work</h2>
        {/*This is where the magic happens! We reuse the same component with different data*/}
        <ProjectCard
          title="Personal Portfolio"
          description="A sleek site built with React and Vite."
          tags={["React", "Typescript", "CSS"]}
        />

        <ProjectCard
          title="Task Manager"
          description="A productivity app to track daily goals."
          tags={["Hooks", "Local Storage"]}
        />

        <ProjectCard
          title="Weather App"
          description="Fetching real-time data from an API."
          tags={["API", "JSON"]}
        />
      </main>
    </div>
  );
}
