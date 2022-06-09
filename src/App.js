import "./App.css";
import NavComponent from "./Components/NavComponent";
import ProgressBarComponent from "./Components/ProgressBarComponent";
import ContactMePage from "./Pages/ContactMePage";
import LandingPage from "./Pages/LandingPage";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage";

function App() {
	return (
		<>
			<ProgressBarComponent />
			<NavComponent />
			<>
				<LandingPage />
				<SkillsPage />
				<ProjectsPage />
				<ContactMePage />
			</>
		</>
	);
}

export default App;
