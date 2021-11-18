import './App.css';
import logo from './logos/notflix-img.jpg';

function App() {
  return (
    <div>
      <head>
        <title>Notflix Carousel Intro</title>
      </head>

      <body>
        
        <div>
          <img src = {logo} class = "logo"/>
          <h1 class = "introduction-reminder">Friendly Reminder to have fun</h1>
        </div>

        <div class="carouselbox">
          <div class="carousel">

          </div>

          
          <a class= "switch-left">left switch</a>
          <a class= "switch-right">right switch</a>

        </div>


      </body>

      <foot>

      </foot>
      
    </div>
  );
}

export default App;
