import { render } from "preact";
import "./styles/app.css";

// Hot-reloading
new EventSource('/esbuild')
    .addEventListener('change', () => location.reload());

function App() {
    return (
        <div id="root">
            Hello, World
        </div>
    );
}

render(<App/>, document.body);