import React, { Component } from "react";
import "./HomePageStyles.css";
import airport from "./airport.png";
import tajmahal from "./TajMahal.jpg";
import thecolosseum from "./TheColosseum.jpg";
import machupicchu from "./MachuPicchu.jpg";
import petra from "./Petra.jpg";
import ctrs from "./ChristtheRedeemerStatue.jpg";
import gwoc from "./GreatWallofChina.jpg";
import ci from "./ChichénItzá.jpg";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <div className={"justify-content-center mt-5 mb-5"}>
          <h1 className="rr">
            <img src={airport}></img>&nbsp;World Wide Explorers
          </h1>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Travel is the only thing you buy that makes you Richer</h2>
          <br></br>
          <br></br>
          <h3>Seven Wonders of the World</h3>
          <p>
          The world is full of beautiful buildings, some of which are so exceptional that they have been designated as the new Seven Wonders of the World. Here is a list of some of the world’s most impressive buildings, including the Taj Mahal in Agra, India, The Great Wall of China in Beijing, The Christ the Redeemer Statue in Rio de Janeiro, Machu Picchu in Peru, Chichen Itza in Mexico’s Yucatan Peninsula, The Roman Colosseum in Rome, and Petra (Jordan). The campaign to select the new seven wonders was started in 2000 by the Swiss foundation 7 Wonders. In 2007, these seven were announced as the winners, and the whole list was made public. Since Philo of Byzantium categorized the first “Seven Wonders of the World” in 250 B.C., simply referring to the “Seven Wonders” is no longer explicit enough for an audience to comprehend the framework.
          </p>
          <h5>1.Taj Mahal</h5>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={tajmahal} width={800} height={480}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <p>
          Agra, India’s Taj Mahal is a marble mausoleum complex and one of the best examples of Mughal architecture. Shah Jahan (reigned 1628–58) built it in memory of his wife Mumtz Maal, known as “Chosen One of the Palace,” who passed away in 1631 while giving birth to their 14th child. It is thought that 20,000 artisans worked on the Taj Mahal project under the direction of a board of architects who were knowledgeable at the time.
          </p>
          <br></br>
          <h5>2.The Colosseum</h5>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={thecolosseum} width={800} height={480}></img>
        </div>
        <br></br>

        <div className="container text-left">
          <p>The Flavian Amphitheatre usually referred to as the Colosseum or Coliseum, is a spectacular amphitheatre that was constructed in Rome and inaugurated in AD. 80 by Titus, the son of Vespasian, for a hundred days of games that included gladiatorial battles and animal contests. Despite the fact that two-thirds of the original structure has been damaged over time, it is one of the most well-known tourist locations.</p>
          <br></br>
          <h5>3.Machu Picchu</h5>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={machupicchu} width={800} height={480}></img>
        </div>
        <br></br>

        <div className="container text-left">
          <p>An Incan site in Peru called Machu Picchu was “found” by Hiram Bingham in 1911. It is close to the city of Cuzco. Vilcabamba, a covert Incan bastion used during the 16th-century revolt against Spanish domination, was what he thought it to be. It is one of the few recognized big pre-Columbian ruins that have been found almost intact.</p>
          <br></br>
          <h5>4.Petra</h5>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={petra} width={800} height={480}></img>
        </div>
        <br></br>

        <div className="container text-left">
          <p>
          Petra is a remarkable historical and archaeological city in southern Jordan. It is also known as Raqmu or Rose City due to its colour. The Nabataean, a Bedouin Arab tribe that were native to the area in what is now southwest Jordan, are thought to have founded the city of Petra as a trade centre. Petra is situated around 150 miles south of Jerusalem and Amman, the capital of Jordan, and roughly halfway between Damascus, Syria, and the Red Sea, making it a centre of commerce in the region at the time.
          </p>
          <br></br>
          <h5>5.Cristo Redentor (OR) Christ the Redeemer Statue</h5>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={ctrs} width={800} height={480}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <p>
          On Mount Corcovado in Rio de Janeiro, the Christ the Redeemer Statue, also known as Cristo Redentor, is a statue of Jesus in the Art Deco style. Heitor da Silva Costa designed the 130-foot statue, which is made of reinforced concrete and soapstone. Its construction cost about $250,000, the majority of which was obtained through contributions. It is 635 tonnes in weight and is situated on the Peak of Corcovado Mountain in the Tijuca Forest National Park, which provides views of Rio de Janeiro.
          </p>
          <br></br>
          <h5>6.Great Wall of China</h5>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={gwoc} width={800} height={480}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <p>
          The Great Wall of China is a work of engineering that is believed to be roughly 5,500 miles (8,850 km) long, however the Chinese claim it is actually 13,170 kilometres long (21,200 km). The Great Wall of China was built over the course of two millennia, starting in the 7th century BCE. The goals of this spectacular organisation at the time included management of trade and emigration, border control, imposition of tariffs on Silk Road trade, and defence.
          </p>
          <br></br>
          <h5>7.Chichén Itzá</h5>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={ci} width={800} height={480}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <p>
          A Mayan metropolis in Mexico is called Chichen Itza. It is located on the Yucatán Peninsula, which had great prosperity in the ninth and tenth centuries A.D. The mythological great cities, or Tollans, that are mentioned in later Mesoamerican literature are also thought to include Chichen Itza. The city’s ruins contain religious structures from the Maya Civilization, like as the Temple of Kukulkán, which has 365 steps, one for each day of the Haab solar calendar.
          </p>
          <br></br>
        </div>

        <br></br>
      </div>
    );
  }
}

export default HomePage;
