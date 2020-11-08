import React, {useState, useEffect} from "react";
import "./style.css";
import {Card, IconButton, Button} from "@material-ui/core";


import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

let embermage = [
  {
    name: 'Magma Spear',
    rank: 0,
    mana: [9,10,11,12,13,14,16,18,20,22,25,28,31,34,38],
    damage: ['35%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%', '44%', '45%', '50%', '51%'],
    additional: ['35% chance to burn', '40% chance to burn', '45% chance to burn', '50% chance to burn', '55% chance to burn', '60% chance to burn', '65% chance to burn', '70% chance to burn', '80% chance to burn', '85% chance to burn','90% chance to burn', '95% chance to burn', '100% chance to burn', '100% chance to burn'],
    tier: ['range extended to 24 meters', 'burn time increased to 6 seconds', 'magma psears ricochet']
  },
  {
    name: 'Magma Spear',
    rank: 0,
    mana: [9,10,11,12,13,14,16,18,20,22,25,28,31,34,38],
    damage: ['35%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%', '44%', '45%', '50%', '51%'],
    additional: ['35% chance to burn', '40% chance to burn', '45% chance to burn', '50% chance to burn', '55% chance to burn', '60% chance to burn', '65% chance to burn', '70% chance to burn', '80% chance to burn', '85% chance to burn','90% chance to burn', '95% chance to burn', '100% chance to burn', '100% chance to burn'],
    tier: ['range extended to 24 meters', 'burn time increased to 6 seconds', 'magma psears ricochet']
  },
    {
    name: 'Magma Spear',
    rank: 0,
    mana: [9,10,11,12,13,14,16,18,20,22,25,28,31,34,38],
    damage: ['35%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%', '44%', '45%', '50%', '51%'],
    additional: ['35% chance to burn', '40% chance to burn', '45% chance to burn', '50% chance to burn', '55% chance to burn', '60% chance to burn', '65% chance to burn', '70% chance to burn', '80% chance to burn', '85% chance to burn','90% chance to burn', '95% chance to burn', '100% chance to burn', '100% chance to burn'],
    tier: ['range extended to 24 meters', 'burn time increased to 6 seconds', 'magma psears ricochet']
  }
]
export default function App() {
  const [skills, setSkills] = useState(embermage);

  let SkillList = skills.map((skill, index) => {
    let updateskill = (count) => {
      let arr = [...skills];
      arr[index].rank = Math.min(15, Math.max(0, arr[index].rank+=count ));
      setSkills(arr);
    };
    return <Skill skill={skill} onchange={updateskill}/>
  })

  return (
    <div>
      {SkillList}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}


function Skill ({skill, onchange}) {
  return <div>
  {skill.rank}
    <IconButton onClick={()=>onchange(1)}>
      <AddIcon/>
    </IconButton>
    <IconButton onClick={()=>onchange(-1)}>
      <RemoveIcon/>
    </IconButton>
  </div>;
}