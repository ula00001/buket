import ProgressCircular from "./components/custom/ProgressCircular";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components"));

function App() {
	return (
		<Router>
			<main>
				<Suspense fallback={<ProgressCircular />}>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}

export default App;
