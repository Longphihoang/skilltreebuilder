import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardActionArea,
  CardActions,
  Slider,
  IconButton,
  Typography,
  CardActionArea,
  Button
} from "@material-ui/core";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

let embermage = [
  {
    desc:
      "You fire a channeled barrage of magma, piecing foes and setting them aflame. Range is 16 meters.",
    img:
      "https://raw.githubusercontent.com/Longphihoang/skilltreebuilder/master/img/skillicon_magmaspear.png",
    name: "Magma Spear",
    rank: 0,
    mana: [9, 10, 11, 12, 13, 14, 16, 18, 20, 22, 25, 28, 31, 34, 38],
    damageType: "weapon dps",
    damage: [
      "35%",
      "34%",
      "35%",
      "36%",
      "37%",
      "38%",
      "39%",
      "40%",
      "41%",
      "42%",
      "43%",
      "44%",
      "45%",
      "50%",
      "51%"
    ],
    additional: [
      "35% chance to burn",
      "40% chance to burn",
      "45% chance to burn",
      "50% chance to burn",
      "55% chance to burn",
      "60% chance to burn",
      "65% chance to burn",
      "70% chance to burn",
      "80% chance to burn",
      "85% chance to burn",
      "90% chance to burn",
      "95% chance to burn",
      "100% chance to burn",
      "100% chance to burn",
      "100% chance to burn"
    ],
    tier: [
      "range extended to 24 meters",
      "burn time increased to 6 seconds",
      "magma psears ricochet"
    ]
  },
  {
    desc:
      "You summon an enormous mace of fire that channels the energy of your weapons, stunning foes in a 5 meter arc and setting them ablaze. Magma Mace does not build Charge.",
    img:
      "https://raw.githubusercontent.com/Longphihoang/skilltreebuilder/master/img/skillicon_magmamace.png",
    name: "Magma Mace",
    rank: 0,
    mana: [12, 13, 14, 15, 16, 17, 19, 22, 24, 27, 30, 32, 36, 40, 45],
    damageType: "weapon dps",
    damage: [
      "50%",
      "53%",
      "56%",
      "59%",
      "62%",
      "65%",
      "68%",
      "71%",
      "74%",
      "77%",
      "80%",
      "83%",
      "86%",
      "89%",
      "92%"
    ],
    additional: [],
    tier: [
      "range extended to 24 meters",
      "burn time increased to 6 seconds",
      "magma psears ricochet"
    ]
  },
  {
    desc:
      "You fire a channeled barrage of magma, piecing foes and setting them aflame. Range is 16 meters.",
    img:
      "https://raw.githubusercontent.com/Longphihoang/skilltreebuilder/master/img/skillicon_magmaspear.png",
    name: "Magma Spear",
    rank: 0,
    mana: [9, 10, 11, 12, 13, 14, 16, 18, 20, 22, 25, 28, 31, 34, 38],
    damageType: "weapon dps",
    damage: [
      "35%",
      "34%",
      "35%",
      "36%",
      "37%",
      "38%",
      "39%",
      "40%",
      "41%",
      "42%",
      "43%",
      "44%",
      "45%",
      "50%",
      "51%"
    ],
    additional: [
      "35% chance to burn",
      "40% chance to burn",
      "45% chance to burn",
      "50% chance to burn",
      "55% chance to burn",
      "60% chance to burn",
      "65% chance to burn",
      "70% chance to burn",
      "80% chance to burn",
      "85% chance to burn",
      "90% chance to burn",
      "95% chance to burn",
      "100% chance to burn",
      "100% chance to burn",
      "100% chance to burn"
    ],
    tier: [
      "range extended to 24 meters",
      "burn time increased to 6 seconds",
      "magma psears ricochet"
    ]
  }
];
export default function App() {
  const [skills, setSkills] = useState(embermage);

  let SkillList = skills.map((skill, index) => {
    let updateskill = count => {
      let arr = [...skills];
      arr[index].rank = Math.min(15, Math.max(0, (arr[index].rank = count)));
      setSkills(arr);
    };
    return <Skill skill={skill} onchange={updateskill} />;
  });

  return <div class="skill-list">{SkillList}</div>;
}

function Skill({ skill, onchange }) {
  return (
    <Card>
      <CardHeader
        avatar={<img class=".responsive-img" src={skill.img} />}
        style={{ backgroundColor: "darkred", color: "white" }}
        title={skill.name}
        subheader={<div>{skill.rank}/15</div>}
      />
      <CardContent>
        <Typography color="blue" align="right">
          {skill.mana[skill.rank - 1 < 0 ? 0 : skill.rank - 1]} mp
        </Typography>
        <Typography>{skill.desc}</Typography>
        <div>
          <Typography>
            <p>
              {skill.damage[rankBounds(skill.rank)]} {skill.damageType}.{" "}
              {skill.additional[rankBounds(skill.rank)]}
            </p>
          </Typography>
        </div>
        <div class="card-footer">
          <Slider
            value={skill.rank}
            onChange={e => onchange(e.target.value)}
            defaultValue={skill.rank}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={15}
            valueLabelDisplay="auto"
          />
          <IconButton
            style={{ float: "right" }}
            onClick={() => onchange(skill.rank + 1)}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            style={{ float: "right" }}
            onClick={() => onchange(skill.rank - 1)}
          >
            <RemoveIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

function rankBounds(num) {
  return Math.min(14, Math.max(0, num));
}
