import card from './Character_Eula_Card.png'
import thumb from './Character_Eula_Thumb.png'
import c1 from './Constellation_Tidal_illusion.png'
import c2 from './Constellation_Lady_of_Seafoam.png'
import c3 from './Constellation_Lawrence_Pedigree.png'
import c4 from './Constellation_The_obstinacy_of_One\'s_inferiors.png'
import c5 from './Constellation_Chivalric_Quality.png'
import c6 from './Constellation_Noble_Obligation.png'
import normal from './Talent_Favonius_Bladework_-_Edel.png'
import skill from './Talent_Icetide_Vortex.png'
import burst from './Talent_Glacial_Illumination.png'
import passive1 from './Talent_Roiling_Rime.png'
import passive2 from './Talent_Wellspring_of_War-lust.png'
import passive3 from './Talent_Aristocratic_Introspection.png'
import ElementalData from '../../ElementalData'
import Stat from '../../../Stat'
import formula, { data } from './data'
import { getTalentStatKey, getTalentStatKeyVariant } from "../../../Build/Build"
import { IConditionals } from '../../../Types/IConditional'
import { ICharacterSheet } from '../../../Types/character'
const conditionals: IConditionals = {
  e: {
    name: <span><b>Grimheart stack</b> consumed.</span>,
    stats: stats => ({
      physical_enemyRes_ : -data.skill.physical_res_decrease[stats.tlvl.skill],
      cryo_enemyRes_ :  -data.skill.cryo_res_decrease[stats.tlvl.skill]
    }),
    fields: [{
      text: "RES Decrease Duration",
      value: "7s",
    }]
  },
  c1: { // Tidal Illusion
    canShow: stats => stats.constellation >= 1,
    name: "Eula consume Icetide Vortex's Grimheart stacks.",
    stats: { physical_dmg_: 30 },
    fields: [{
      text: "Duration",
      value: "6s",
    }, {
      text: "Max Duration",
      value: "18s",
    }]
  },
  c4: { // The obstinacy of One's inferiors
    canShow: stats => stats.constellation >= 4,
    name: "Enemy with less than 50% HP.",
    stats: { physical_burst_dmg_: 25 },
  }
}
const char: ICharacterSheet = {
  name: "Eula",
  cardImg: card,
  thumbImg: thumb,
  star: 5,
  elementKey: "cryo",
  weaponTypeKey: "claymore",
  gender: "F",
  constellationName: "Aphros Delos",
  titles: ["Spindrift knight", "Dance of the Shimmering Wave"],
  baseStat: data.baseStat,
  specializeStat: data.specializeStat,
  formula,
  conditionals,
  talent: {
    auto: {
      name: "Favonius Bladework - Edel",
      img: normal,
      document: [{
        text: <span><strong>Normal Attack</strong> Perform up to 6 consecutive strikes. <small><i>Note: the 3rd and 5th attack hits twice.</i></small></span>,
        fields: data.normal.hitArr.map((percentArr, i) =>
        ({
          text: `${i + 1}-Hit DMG${i === 2 || i === 4 ? " (2 Hits)" : ""}`,
          formulaText: stats => <span>{percentArr[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
          formula: formula.normal[i],
          variant: stats => getTalentStatKeyVariant("normal", stats),
        }))
      },  {
        text: <span><strong>Charged Attack</strong> Drains Stamina over time to perform continuous slashes. At the end of the sequence, perform a more powerful slash.</span>,
        fields: [{
          text: `Spinning DMG`,
          formulaText: stats => <span>{data.charged.spinning[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
          formula: formula.charged.spinning,
          variant: stats => getTalentStatKeyVariant("charged", stats)
        }, {
          text: `Spinning Final DMG`,
          formulaText: stats => <span>{data.charged.final[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
          formula: formula.charged.final,
          variant: stats => getTalentStatKeyVariant("charged", stats)
        }, {
          text: `Stamina Cost`,
          value: stats => "40/s" + (stats.ascension >= 1 ? " - 20/s" : ""),
        }, {
          text: `Max Duration`,
          value: stats => "5s" + (stats.ascension >= 1 ? " + 3s" : ""),
        }]
      }, {
        text: <span><strong>Plunging Attack</strong> Plunges from mid-air to strike the ground, damaging enemies along the path and dealing AoE DMG upon impact.</span>,
        fields: [{
          text: `Plunge DMG`,
          formulaText: stats => <span>{data.plunging.dmg[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
          formula: formula.plunging.dmg,
          variant: stats => getTalentStatKeyVariant("plunging", stats),
        }, {
          text: `Low Plunge DMG`,
          formulaText: stats => <span>{data.plunging.low[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
          formula: formula.plunging.low,
          variant: stats => getTalentStatKeyVariant("plunging", stats),
        }, {
          text: `High Plunge DMG`,
          formulaText: stats => <span>{data.plunging.high[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
          formula: formula.plunging.high,
          variant: stats => getTalentStatKeyVariant("plunging", stats),
        }]
      }],
    },
    skill: {
      name: "Icetide Vortex",
      img: skill,
      document: [{
        text: <span>
          <p className="mb-2">Sharp frost, swift blade.</p>
          <p className="mb-2"><strong>Press:</strong> Slashes swiftly, dealing Cryo DMG.</p>
          <p className="mb-2">When it hits an opponent, Eula gains a stack of Grimheart that stacks up to 2 times. These stacks can only be gained once every 0.3s.</p>
          <p className="mb-2"><strong>Grimheart:</strong> Increases Eula's resistance to interruption and DEF.</p>
          <p className="mb-2"><strong>Hold:</strong>  Wielding her sword, Eula consumes all the stacks of Grimheart and lashes forward, dealing AoE Cryo DMG to opponents in front of her.</p>
          <p className="mb-2">If Grimheart stacks are consumed, surrounding opponents will have their Physical RES and Cryo RES decreased.</p>
          <p className="mb-0">Each consumed stack of Grimheart will be converted into an Icewhirl Brand that deals Cryo DMG to nearby opponents.</p>
        </span>,
        fields: [{
          text: "Press DMG",
          formulaText: stats => <span>{data.skill.press[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.press,
          variant: stats => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "Press CD",
          value: "4s",
        }, {
          text: "Hold DMG",
          formulaText: stats => <span>{data.skill.hold[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.hold,
          variant: stats => getTalentStatKeyVariant("skill", stats),
        }, {
          canShow: stats => stats.constellation >= 2,
          text: "Hold CD",
          value: "4s",
        }, {
          canShow: stats => stats.constellation < 2,
          text: "Hold CD",
          value: "10s",
        }, {
          text: "Icewhirl Brand DMG",
          formulaText: stats => <span>{data.skill.hold[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.icewhirl_brand,
          variant: stats => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "DEF bonus",
          value: "30% per stack",
        }, {
          text: "Grimheart stacks duration",
          value: "18s",
        }],
        conditional: conditionals.e
      }],
    },
    burst: {
      name: "Glacial Illumination",
      img: burst,
      document: [{
        text: <span>
          <p className="mb-2">Brandishes her greatsword, dealing Cryo DMG to nearby opponents and creating a Lightfall Sword that follows her around for a duration of up to 7s.</p>
          <p className="mb-2">While present, the Lightfall Sword increases Eula's resistance to interruption. When Eula's own Normal Attack, Elemental Skill, and Elemental Burst deal DMG to opponents, they will charge the Lightfall Sword, which can gain an energy stack once every 0.1s.</p>
          <p className="mb-2">Once its duration ends, the Lightfall Sword will descend and explode violently, dealing Physical DMG to nearby opponents.</p>
          <p className="mb-2">This DMG scales on the number of energy stacks the Lightfall Sword has accumulated.</p>
          <p className="mb-2">If Eula leaves the field, the Lightfall Sword will explode immediately.</p>
        </span>,
        fields: [{
          text: "Initial DMG",
          formulaText: stats => <span>{data.burst.burst_dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
          formula: formula.burst.burst_dmg,
          variant: stats => getTalentStatKeyVariant("burst", stats),
        }, {
          text: "Lightfall Sword Base DMG",
          formulaText: stats =>
            <span>{data.burst.lightfall_sword_base_dmg[stats.tlvl.burst]}% {Stat.printStat(`physical_burst_${stats.hitMode}`, stats)}</span>,
          formula: formula.burst.lightfall_sword_base_dmg,
          variant: stats => getTalentStatKey("physical burst", stats),
        }, {
          text: "DMG Per Stack",
          formulaText: stats =>
            <span>{data.burst.dmg_per_stack[stats.tlvl.burst]} {Stat.printStat(`physical_burst_${stats.hitMode}`, stats)}</span>,
          formula: formula.burst.dmg_per_stack,
          variant: stats => getTalentStatKey("physical burst", stats),
        }, {
          text: "Maximum Stacks",
          value: "30",
        }, {
          text: "Duration",
          value: "7s",
        }, {
          text: "CD",
          value: "20s",
        }, {
          text: "Energy Cost",
          value: 80,
        }],
        conditional: conditionals.q
      }],
    },
    passive1: {
      name: "Roiling Rime",
      img: passive1,
      document: [{ text: <span>If <b>2 stacks of Grimheart</b> are consumed upon unleashing the Holding Mode of <b>Icetide Vortex</b>, a Shattered Lightfall Sword will be created that will explode immediately, dealing 50% of the basic <span className="text-physical">Physical DMG</span> dealt by a <b>Lightfall Sword</b> created by <b>Glacial Illumination</b>.</span>,
        fields: [{
          canShow: stats => stats.ascension >= 4,
          text: "Summoned Sword DMG",
          formulaText: stats => <span>{data.burst.lightfall_sword_base_dmg[stats.tlvl.burst]/2}% {Stat.printStat(`physical_burst_${stats.hitMode}`, stats)}</span>,
          formula: formula.passive1.dmg,
          variant: "physical",
        }]
      }],
    },
    passive2: {
      name: "Wellspring of War-Lust",
      img: passive2,
      document: [{ text: <span>When <b>Glacial Illumination</b> is cast, the CD of <b>Icetide Vortex</b> is reset and Eula gains <b>1 stack of Grimheart</b>.</span> }],
    },
    passive3: {
      name: "Aristocratic Introspection",
      img: passive3,
      document: [{
        text: <span>
          When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.
      </span>
      }]
    },
    constellation1: {
      name: "Tidal Illusion",
      img: c1,
      document: [{ 
        text: <span>Every time <b>Icetide Vortex</b>'s' <b>Grimheart stacks</b> are consumed, Eula's <span className="text-physical">Physical DMG</span> is increased by 30% for 6s. Each stack consumed will increase the duration of this effect by 6s up to a maximum of 18s.</span>,
        conditional: conditionals.c1 
      }],
    },
    constellation2: {
      name: "Lady of Seafoam",
      img: c2,
      document: [{ text: <span>Decrease the CD of <b>Icetide Vortex</b>'s Holding mode, rendering it identical to Press mode.</span> }],
    },
    constellation3: {
      name: "Lawrence Pedigree",
      img: c3,
      document: [{ text: <span>Increases the level of <b>Glacial Illumination</b> by 3. Maximum upgrade level is 15.</span> }],
      stats: { burstBoost: 3 }
    },
    constellation4: {
      name: "The Obstinacy of One's Inferiors",
      img: c4,
      document: [{
        text: <span><b>Lightfall Swords</b> deal 25% increased DMG against opponents with less than 50% HP.</span>,
        conditional: conditionals.c4
      }],
    },
    constellation5: {
      name: "Chivalric Quality",
      img: c5,
      document: [{ text: <span>Increases the level of <b>Icetide Vortex</b> by 3. Maximum upgrade level is 15.</span> }],
      stats: { skillBoost: 3 }
    },
    constellation6: {
      name: "Noble Obligation",
      img: c6,
      document: [{ 
        text: <span><b>Lightfall Swords</b> created by <b>Glacial Illumination</b> start with 5 stacks of energy. <b>Normal Attacks</b>, <b>Elemental Skills</b>, and <b>Elemental Bursts</b> have a 50% chance to grant the <b>Lightfall Sword</b> an additional <b>stack of energy</b>.</span>,
        conditional: conditionals.c6
      }],
    }
  },
};
export default char;
