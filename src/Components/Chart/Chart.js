import React from 'react';
import './Chart.css'
import {   Area, AreaChart, CartesianGrid, Legend,  RadialBar,  RadialBarChart,  Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = 
    [
      {
        "id": 1,
        "img": "",
        
        "name": "Anis Tutul",
        "description":"Not for a reason. but for the fine art to create a story who seems be more than fiction and who use a script, a cast and location for a puzzle who becomes part of precious memories. its themes, the tension, the moral questions, the meeting between Morgan Freeman and Tim Robbins and the result of dialogs who are truth axis of movie and wise adaptation, are bones of a splendid film. a film who reminds more than presents. values, roots of justice, beauty of original source, the end who is expression of a deep expectation of the viewer are elements who transforms The Shawshank Redemption in an experience for the viewer. short - a film who must see !",
        "rating": 4/5,
        "fill": "#8884d8"
        
        
      },
      {
        "id": 2,
        "img": "",
        
        "name": "Shuva Chakraborty",
        "description":"It is no wonder that the film has such a high rating, it is quite literally breathtaking. What can I say that hasn't said before? Not much, it's the story, the acting, the premise, but most of all, this movie is about how it makes you feel. Sometimes you watch a film, and can't remember it days later, this film loves with you, once you've seen it, you don't forget.",
        "rating": 5/5,
        "fill": "#83a6ed"
        
        
      },
      {
        "id": 3,
        "img": "",
        
        "name": "Nishan Chakraborty",
        "description":"The Shawshank Redemption should have won Best Picture for 1994. A story of banker Andy Dufresne (Tim Robbins) getting falsely convicted of murder and sent to the hellish Shawshank prison, the movie is beyond amazing. In prison, Andy meets Ellis Boyd Red Redding (Morgan Freeman), who was imprisoned many years earlier. Red gets Andy a poster of Rita Hayworth. Over the next twenty years, Andy experiences all the horrors that one would expect in jail: beatings by the guards, rapes by other inmates, and so on. But he never gives up hope.",
        "rating": 4.5/5,
        "fill": "#8dd1e1"
        
        
      },
      {
        "id": 4,
        "img": "",
        
        "name": "Hridoy Rahman",
        "description":"This film is probably the best life-in-prison film ever made. It depicts one man's time in the big house for something he (supposedly) didn't do. This man is Andy Dusfresne (pronounced Duframe) played in his best ever, Tim Robbins. But he isn't alone; he is joined by fellow inmate (who is the only guilty person in Shawshank) Red played also very well by Morgan Freeman. Freeman narrates the life in The Shawshank prison all the way up until the end (not to mention some very memorable escape scenes). Very memorable, showing what movies are made of. Based on Stephen King's novel (one of his best) and adapted for the screen and directed by Frank Darabont, who 5 years later would write and direct the Green Mile, another good (but can't be matched to this one) prison movie. A++",
        "rating": 5/5,
        "fill": "#82ca9d"
        
        
      },
      {
        "id": 5,
        "img": "",
        
        "name": "Tapos Pal",
        "description":"Quite deserving of such acclaim, the acting is superb, the storyline captivating, and the cinematography quite beautiful. The storyline itself was unexpected and I quite enjoyed watching it unfold. Tim Robbins is really incredible in that his character comes off so subtly. And let's be honest, how can any movie narrated by Morgan freeman be bad?",
        "rating": 4.7/5,
        "fill": "#a4de6c"
        
        
      },
      {
        "id": 6,
        "img": "",
        
        "name": "Ronaldo",
        "description":"THE SHAWSHANK REDEMPTION is a kind of morality tale that is definitely one of Stephen King's more restrained kind of stories, dealing mostly with a character study of two individuals sharing imprisonment and the consequences that await them when the tale ends.",
        "rating": 4/5,
        "fill": "#d0ed57"
        
        
      }
      
      
    ]
    
      
      
    return (
      <div className="mt-15 " >
        <h4 className='mt-10 mb-10 font-bold text-indigo-800 text-2xl'>Movie Recommendations using chart </h4>

      <div className="flex ...">
  
  <div className="flex-auto w-50 ...">
  <AreaChart width={600} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="id" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="rating" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    <p className='mt-5 font-bold'>Area Chart</p>
  </div>
  <div className="flex-auto w-50 ...">
  <RadialBarChart
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='id' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
<p className='mt-3 font-bold'>RadialBar Chart</p>
 
  </div>
</div>
</div>
      
      
     
      
    
    );
};

export default Chart;