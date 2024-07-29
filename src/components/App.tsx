import { Desktop, ModalsView, ProzillaOS, Taskbar, WindowsView } from "prozilla-os";
import { appsConfig } from "../config/appsConfig";
import { desktopConfig } from "../config/desktopConfig";

export function App() {
	return (
		<ProzillaOS
			systemName="KumarOS"
			// tagLine=""
			config={{
				apps: appsConfig,
				desktop: desktopConfig,
			}}
		>
			<Taskbar/>
			<WindowsView/>
			<ModalsView/>
			<Desktop/>
		</ProzillaOS>
	);
}
