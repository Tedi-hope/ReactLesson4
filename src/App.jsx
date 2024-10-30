import CardList from "./CardList";

import img1 from './assets/images/img1.png';
import img2 from './assets/images/img2.jpeg';
import img3 from './assets/images/img3.png';



function App() {
//Data Array

const data=[
  {
    imgurl:img1,
    title:'What are React Components?',
    description:'Components are independent, reusable pieces of UI \
    that represent parts of the interface (like buttons, forms, or menus).\
    Components can be either functional (simple JavaScript functions) or\
    class-based (using ES6 classes).',
 },

 {
  imgurl: img2,
  title: 'What is a Prop?',
  description: 'Inputs passed from parent to child components to configure or customize them.\
  Props are read-only and cannot be modified within the child component.',
 },

 {
 imgurl: img2,
 title: 'What is a state?',
 description: 'A component\'s internal data that can change over time, usually \
 triggered by user actions or events.State is local to the component and can be updated \
 using setState (in class components) or the useState hook (in functional components). \
 Example: A counter component maintains its value in state and updates it when the user clicks a button.',
},

 {
  imgurl: img3,
  title: 'React and Dynamic content',
  description: 'React allows rendering content that changes based on user actions, inputs, \
     or external data (e.g., fetching API data).Components can display different \
     content based on conditions using JavaScript expressions (if, ternary operators) inside JSX.\
      Example: {isLoggedIn ? <Dashboard /> : <Login />}.',
 },

 {
  imgurl:'' ,
  title: '',
  description: '',
 },

];
  return (
    <CardList arraydata={data} />
  );
  
}

export default App
