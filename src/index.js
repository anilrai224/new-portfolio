import ReactDom from 'react-dom/client'
import App from './App'

const app = ReactDom.createRoot(document.querySelector('#root'));
app.render(<App/>);