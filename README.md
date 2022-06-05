# LearningReactJS
A playground of ReactJS Learning

```powershell
npx create-react-app my-app
cd my-app
npm start
```

To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():

```JSX
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);
```
OR

```JSX
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```