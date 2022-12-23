import './App.css';
import { Onevent } from "./Onevent.jsx";
function App() {
  const data = [{
    tag: "Sales made",
    event: "Mr. A bought a silver bracelet",
    time: "4:45am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. c bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Sales made",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  },
  {
    tag: "Green",
    event: "Mr. B bought a green shirt",
    time: "7.00am",
    day: "Tuesday 6 December, 2022"
  }
  ];
  return (
    <div className="App">
      <h1 className='intro'>Detailed Timeline</h1>
      <div className='timeline'>
      <div className='vr'></div>
        {data.map((x, y) => {
             return(
              <Onevent event={x.tag} time={x.time} whathappened={x.event} date={x.day} key={y}  />
             )
            }
         )
        }
      </div> 
    </div>
  );
}

export default App;
