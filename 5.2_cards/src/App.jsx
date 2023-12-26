
import './App.css'
import Card from './assets/components/Card';

function App() {
  const cardsData = [
    {
      image: 'https://placekitten.com/300/150',
      title: 'Cat Lossy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, consequatur.',
      link:{text: 'EXPLORE', url: 'https://placekitten.com/300/150 '},
    },
    {
      image: 'https://placekitten.com/301/150',
      title: 'Cat Lour',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, consequatur.',
      link: { text: 'EXPLORE', url: 'https://placekitten.com/301/150' },
    },
    {
      image: 'https://placekitten.com/302/150',
      title: 'Cat Nono',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, consequatur.',
      link: { text: 'EXPLORE', url: 'https://placekitten.com/302/150' },
    },
  
  ];

  return (
    <>
      <div className='cards' >
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </>
  )
}

export default App

// const App = () => {
//   // Card data for rendering
//   const cardsData = [
//     {
//       image: 'https://placekitten.com/300/150',
//       title: 'Card 1',
//       description: 'Description for Card 1.',
//       links: [{ text: 'Link 1', url: 'https://example.com/link1' }],
//     },
//     {
//       image: 'https://placekitten.com/301/150',
//       title: 'Card 2',
//       description: 'Description for Card 2.',
//       links: [{ text: 'Link 2', url: 'https://example.com/link2' }],
//     },
//     {
//       image: 'https://placekitten.com/302/150',
//       title: 'Card 3',
//       description: 'Description for Card 3.',
//       links: [{ text: 'Link 3', url: 'https://example.com/link3' }],
//     },
//   ];

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//       {/* Render the Card component multiple times with different props */}
//       {cardsData.map((card, index) => (
//         <Card key={index} {...card} />
//       ))}
//     </div>
//   );
// };