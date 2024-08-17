---
sidebar_position: 2
---

# First Component
start with one component then we will create another.

## Create HelloWorld Component
Press F to respect, Hello World

### locate App.tsx
Everything in React (mostly) start here.

Open `App.tsx` file in `src\App.tsx`
it look like
```jsx
function App() {
  return <p>
    Mycos React Workshop at CMU
  </p>;
}

export default App;
```

### type to create a component
we type the code below to create a hello world component

```jsx
// start here
const HelloWorld = () => {
  return <p>Hello World</p>
}

// this is existing code
function App() {
  return <p>
    Mycos React Workshop at CMU
  </p>;
}

export default App;
```
<!-- <iframe src="https://stackblitz.com/edit/mycos-component?embed=1&file=src%2FApp.tsx&embed=1" style={{width: "100%", height: "400px", border: 0}}></iframe> -->
