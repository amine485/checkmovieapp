import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard'
import  './components/Modal.css'
import './App.css';


const Movies = [
  /*6*/{Name:'JUMANJI' , Rate:'⭐⭐⭐⭐⭐⭐' ,Description:'The fates of four high school students in detention are turned when they are sucked into the world of Jumanji. After discovering an old console containing a video game they had never heard of, the four young people find themselves mysteriously propelled into the heart of the Jumanji jungle, into the bodies of their avatars. They will quickly find out that you don’t play Jumanji, it’s the game to play with you… To return to the real world, they will have to face the worst dangers and triumph in the ultimate adventure. Otherwise, they will remain prisoners of Jumanji forever ...'},
   /*10*/{Name:'AVENGERS:ENDGAME' , Rate:'⭐⭐⭐⭐⭐⭐⭐⭐⭐' ,Description:'Thanos having wiped out half the universe, the remaining Avengers close ranks in this 22nd Marvel Studios film, a grand conclusion to one of the chapters in the Marvel Cinematic Universe.'},
   /*7*/{Name:'JOHN WICK PARABELLUM' , Rate:'⭐⭐⭐⭐⭐⭐⭐ ' ,Description:'John Wick broke a fundamental rule: he killed inside the Continental Hotel itself. Excommunicated, all services related to the Continental are closed to him and his head put a price. John finds himself helpless, hunted down by all of the worlds most dangerous killers.'},
   /*7*/{Name:'SPIDER-MAN: HOMECOMING' , Rate:'⭐⭐⭐⭐⭐⭐⭐ ' ,Description:'After his spectacular debut in Captain America: Civil War, the young Peter Parker gradually discovers his new identity, that of Spider-Man, the web-throwing superhero. Galvanized by his experience with the Avengers, Peter returns home to his Aunt May, under the watchful eye of his new mentor, Tony Stark. He struggles to get back to his old life, but deep down, Peter dreams of proving to himself that he is more than the friendly neighborhood superhero. The appearance of a new enemy, the Vulture, will endanger everything that matters to him ...'},
   /*9*/{Name:'THE REVENANT' , Rate:'⭐⭐⭐⭐⭐⭐⭐⭐⭐ ' ,Description:'In a deeply wild America, Hugh Glass, a trapper, is attacked by a bear and seriously injured. Abandoned by his teammates, he is left for dead. But Glass refuses to die. Alone, armed with his will and carried by the love he has for his wife and their son, Glass sets out on a journey of more than 300 km in a hostile environment, on the trail of the man who betrayed him. . His thirst for revenge will turn into a heroic struggle to brave all obstacles, return home and find redemption.'},
   /*7*/{Name:'IP MAN 4' , Rate:'⭐⭐⭐⭐⭐⭐⭐' ,Description:'In the last opus of the legendary saga, Ip Man goes to the United States at the request of Bruce Lee in order to calm the tensions between the local masters of Kung fu and his protégé. He soon found himself embroiled in a racist dispute between the local armed forces and a Chinese martial arts school established in the Chinatown neighborhood of San Francisco. In an apotheosis of ultra-mastered combat, with the grace and serenity that characterize him, Donnie Yen brings to life, for the first time on the big screen in France, the legendary Chinese master of Wing Chun.'},
   /*8*/{Name:'THE GENTLEMEN' ,Rate:'⭐⭐⭐⭐⭐⭐⭐⭐ ', Description:'When Mickey Pearson, drug lord in London, suggests that he could withdraw from the market, he unleashes an explosive war: the English capital becomes the scene of all blackmail, plots, betrayals, corruption and kidnappings ... In this jungle where you can no longer distinguish your allies from your enemies, there is only room for one king!'},
   /*9*/{Name:'GET OUT' , Rate:'⭐⭐⭐⭐⭐⭐⭐⭐⭐',Description:'Mixed couple, Chris and his girlfriend Rose have the perfect love. So now is the time to meet the beautiful family, Missy and Dean over a weekend getaway on their estate in the upstate. Chris initially thinks that the tense atmosphere is related to their difference in skin color, but soon a series of increasingly disturbing incidents reveals the unimaginable.'},
   /*6*/{Name:'FAST & FURIOUS ' ,Rate:'⭐⭐⭐⭐⭐⭐' , Description:"Ever since Hobbs, a loyal security guard in the combative but upright United States diplomatic service, and Shaw, a lawless man and former member of the British military elite, clashed in 2015 in Fast & Furious 7; the two men are doing everything they can to harm each other.But when Brixton, a genetically engineered anarchist, gets his hands on a weapon of mass destruction after defeating the best MI6 agent who happens to be Shaw's sister. The two longtime enemies will then have to team up to bring down the only opponent capable of destroying them."},
   /*8*/{Name:'FANTASTIC BEASTS' , Rate:'⭐⭐⭐⭐⭐⭐⭐⭐ ',Description:'Norbert Dragonneau has just returned from a journey through the world where he has listed an extraordinary bestiary of fantastic creatures. He thinks of making a short stopover in New York, but a series of unexpected events and encounters may prolong his stay. Now the world of magic is threatened.'},
   /*8*/{Name:'BIRD BOX' , Rate:'⭐⭐⭐⭐⭐⭐⭐⭐ ',Description:"As a mysterious force decimates the world's population, only one thing is certain: those who kept their eyes open lost their lives. Despite the situation, Malorie finds love, hope and a new beginning before seeing it all fly away. Now, she must flee with her two children, following a perilous river to the only place where they can still take refuge. To survive, they will have to undertake this difficult journey blindfolded."},
  /*6*/ {Name:'INVISIBLE MAN' , Rate:'⭐⭐⭐⭐⭐⭐⭐⭐⭐ ' ,Description:"Cecilia Kass is in a relationship with a brilliant and rich scientist. No longer tolerating his violent and tyrannical behavior, she fled one night and took refuge with her sister, their childhood friend and her teenage daughter.But when the man commits suicide by accepting an important part of his immense fortune from Cecilia, she begins to wonder if he is really dead. As a series of disturbing coincidences threaten the lives of those she loves, Cecilia desperately seeks to prove that she is being stalked by a man no one can see. Little by little, she has the feeling that her reason is wavering ..."},
      ] 
      
function Assemble() {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');

  const addMovie = (name,description) => {
    setNewMovies([...newMovies, { 
      name, id: Math.random(),
      rate, id: Math.random(),
      description, id: Math.random(),
     
        }])
} 

const handleSubmitName = (e) => {
    e.preventDefault();
    addMovie(name,description,rate);
    setName('');
    setDescription('');
    setRate('');
}

useEffect(() => {
const result = 
Movies.filter((movie) =>
      movie.Name.toLowerCase().includes(search.toLowerCase().trim())
    )
  ;
  setFilteredMovies(result)
}
,[search]
); 

  return (
    <div>
    <h1 className ="title">MOVIE APP</h1>
         <input className='inp' value = {search} placeholder=" Search Your Movie .."  onChange={(e) => setSearch(e.target.value)}/>
         <br/>      <br/>     <br/>     <br/> 
         <div class="container">
    <div class="interior">
      <a class="btn" href="#open-modal"> ADD MOVIE</a>
    </div>
  </div>
 
  <div id="open-modal" class="modal-window">
    <div >
      <a href="#" title="Close" class="modal-close">Close</a>
    
      <h1>insert Your movie info :</h1>
      <h3>Name :</h3>
      <from onSubmit={handleSubmitName} > <input className='input' placeholder='enter the movie name ..' value={name} required onChange={(props)=> setName(props.target.value)}></input>
      <h3>Rate :</h3>
      <input className='input'  placeholder='rate this movie by stars ..' value={rate} required onChange={(props)=> setRate(props.target.value)}></input>
      <h3>Description :</h3>
      <input className='input'  placeholder='enter the movie description ..' value={description} required onChange={(props)=> setDescription(props.target.value)}></input>
      <br/>   <br/>     <br/>     
      <input className='input' type="submit"></input>
      </from>
     </div>
      </div>
  
         <br/>     <br/>     <br/>     <br/>     
      <div className='grid-container'>
     
      {filteredMovies.map (mov =>  (
             <MovieCard name={mov.Name}  rate={mov.Rate}  description={mov.Description}/>
    )         
          )  }
</div>
{newMovies.map(newMovie => {
                  return (
                    <div>
<MovieCard name={newMovie.name}  description={newMovie.description}  
rate={newMovie.rate} keyExtractor={item => item.id}
                    /></div>)})}
                   
                    
</div>
  )
    }


export default Assemble
