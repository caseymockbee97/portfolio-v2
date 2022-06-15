import { useMemo, useState } from "react";
import "./App.css";
import NavComponent from "./Components/NavComponent";
import { NavContext } from "./Components/NavContext";
import ProgressBarComponent from "./Components/ProgressBarComponent";
import ContactMePage from "./Pages/ContactMePage";
import LandingPage from "./Pages/LandingPage";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage";

function App() {
	const [activeLink, setActiveLink] = useState("home");

	const providerValue = useMemo(
		() => ({ activeLink, setActiveLink }),
		[activeLink, setActiveLink]
	);

	return (
		<>
			<ProgressBarComponent />
			<NavContext.Provider value={providerValue}>
				<NavComponent />
				<>
					<LandingPage />
					<SkillsPage />
					<ProjectsPage />
					<ContactMePage />
				</>
			</NavContext.Provider>
		</>
	);
}

export default App;
