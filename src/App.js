import { useMemo, useState, useEffect } from "react";
import "./App.css";
import NavComponent from "./Components/NavComponent";
import { NavContext } from "./Components/NavContext";
import ProgressBarComponent from "./Components/ProgressBarComponent";
import ContactMePage from "./Pages/ContactMePage";
import FooterPage from "./Pages/FooterPage";
import LandingPage from "./Pages/LandingPage";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage";
import ContainerLayout from "./Layouts/ContainerLayout";

function App() {
	const [activeLink, setActiveLink] = useState("home");

	const providerValue = useMemo(
		() => ({ activeLink, setActiveLink }),
		[activeLink, setActiveLink]
	);

	useEffect(() => {
		document
			.querySelector(":root")
			.style.setProperty("--screen-height", `${window.innerHeight}px`);
	}, []);

	return (
		<>
			<ProgressBarComponent />
			<NavContext.Provider value={providerValue}>
				<NavComponent />
				<>
					<ContainerLayout idName={"home"} isTop={true}>
						<LandingPage />
					</ContainerLayout>
					<ContainerLayout idName={"skills"} isDarkTheme={false}>
						<SkillsPage />
					</ContainerLayout>
					<ContainerLayout idName={"projects"} isDarkTheme={true} onlyStyle>
						<ProjectsPage />
					</ContainerLayout>
					<ContainerLayout idName={"contact"} isDarkTheme={false}>
						<ContactMePage />
					</ContainerLayout>
					<FooterPage />
				</>
			</NavContext.Provider>
		</>
	);
}

export default App;
