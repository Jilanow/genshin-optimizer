import card from './Character_Kazuha_Card.png'
import thumb from './Character_Kazuha_Thumb.png'
import c1 from './Constellation_tmp.png'
import c2 from './Constellation_tmp.png'
import c3 from './Constellation_tmp.png'
import c4 from './Constellation_tmp.png'
import c5 from './Constellation_tmp.png'
import c6 from './Constellation_tmp.png'
import normal from './Talent_normal_tmp.png'
import skill from './Talent_tmp.png'
import burst from './Talent_tmp.png'
import passive1 from './Talent_Embrace_of_Winds.png'
import passive2 from './Talent_Stormeye.png'
import passive3 from './Talent_Windrider.png'
import ElementalData from '../../ElementalData'
import Stat from '../../../Stat'
import formula, { data } from './data'
import { getTalentStatKey, getTalentStatKeyVariant } from "../../../Build/Build"
import { IConditionals, IConditionalValue } from '../../../Types/IConditional'
import { ICharacterSheet } from '../../../Types/character'
const conditionals: IConditionals = {
  a1: { // Absorption
    name: "Elemental Absorption",
    states: Object.fromEntries(["hydro", "pyro", "cryo", "electro"].map(eleKey => [eleKey, {
      name: <span className={`text-${eleKey}`}><b>{ElementalData[eleKey].name}</b></span>,
      fields: [{
        canShow: stats => {
          const value = stats.conditionalValues?.character?.kazuha?.a1 as IConditionalValue | undefined
          if (!value) return false
          const [num, condEleKey] = value
          if (!num || condEleKey !== eleKey) return false
          return true
        },
        text: "Absorption Damage",
        formulaText: stats => <span>{200}% {Stat.printStat(`${eleKey}_plunging_${stats.hitMode}`, stats)}</span>,
        formula: formula.passive1[`${eleKey}_hit`],
        variant: eleKey
      }],
    }]))
  }, 
  a4: {
    name: "Swirl",
    canShow: stats => stats.ascension >= 4,
    stats: {
      modifiers: { 
        hydro_dmg_: { eleMas: 4 / 100 },
        cryo_dmg_: { eleMas: 4 / 100 }, 
        pyro_dmg_: { eleMas: 4 / 100 }, 
        electro_dmg_: { eleMas: 4 / 100 }, 
      },
    },
  },
  q: { // Absorption
    name: "Elemental Absorption",
    states: Object.fromEntries(["hydro", "pyro", "cryo", "electro"].map(eleKey => [eleKey, {
      name: <span className={`text-${eleKey}`}><b>{ElementalData[eleKey].name}</b></span>,
      fields: [{
        canShow: stats => {
          const value = stats.conditionalValues?.character?.kazuha?.q as IConditionalValue | undefined
          if (!value) return false
          const [num, condEleKey] = value
          if (!num || condEleKey !== eleKey) return false
          return true
        },
        text: "Absorption Damage",
        formulaText: stats => <span>{data.burst.additionnal_ele_dmg[stats.tlvl.burst]}% {Stat.printStat(`${eleKey}_burst_${stats.hitMode}`, stats)}</span>,
        formula: formula.burst[`${eleKey}_hit`],
        variant: eleKey
      }],
    }]))
  },
  c2: {
    name: "Ruka Akino field",
    canShow: stats => stats.constellation >= 2,
    stats: { eleMas: 200 },
  },
  c6: {
    canShow: stats => stats.constellation >= 6,
    name: "Chihayafuru or Manyou no Ittou used",
    states: {
      anemo_infusion: {
        name: "anemo infusion",
        stats: {
          infusionSelf: "anemo",
          modifiers: { 
            normal_dmg_: { eleMas: 20 / 100 },
            charged_dmg_: { eleMas: 20 / 100 },
            plunging_dmg_: { eleMas: 20 / 100 },
          },
        },
      },
      copium: {
        name: "copium : overridable anemo",
        stats: {
          modifiers: { 
            normal_dmg_: { eleMas: 20 / 100 },
            charged_dmg_: { eleMas: 20 / 100 },
            plunging_dmg_: { eleMas: 20 / 100 },
          },
        },
      }
      
    }
    
  },
}
const char: ICharacterSheet = {
  name: "Kazuha",
  cardImg: card,
  thumbImg: thumb,
  star: 5,
  elementKey: "anemo",
  weaponTypeKey: "sword",
  gender: "M",
  constellationName: "Unknown",
  titles: [],
  baseStat: data.baseStat,
  specializeStat: data.specializeStat,
  formula,
  conditionals,
  talent: {
    auto: {
      name: "Garyu Bladework",
      img: normal,
      document: [{
        text: <span><strong>Normal Attack</strong> Perform up to 5 rapid strikes.</span>,
        fields: data.normal.hitArr.map((percentArr, i) =>
        ({
          text: `${i + (i < 4 ? 1 : 0)}${i === 3 ? ".1" : i === 4 ? ".2" : ""}-Hit DMG`,
          formulaText: stats => <span>{percentArr[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
          formula: formula.normal[i],
          variant: stats => getTalentStatKeyVariant("normal", stats),
        }))
      }, {
        text: <span><strong>Charged Attack</strong> Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</span>,
        fields: [{
          text: `Charged 1-Hit DMG`,
          formulaText: stats => <span>{data.charged.hit1[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
          formula: formula.charged.hit1,
          variant: stats => getTalentStatKeyVariant("charged", stats),
        }, {
          text: `Charged 2-Hit DMG`,
          formulaText: stats => <span>{data.charged.hit2[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
          formula: formula.charged.hit2,
          variant: stats => getTalentStatKeyVariant("charged", stats),
        }, {
          text: `Stamina Cost`,
          value: `25`,
        }]
      }, {
        text: <span><strong>Plunging Attack</strong> Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.</span>,
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
      name: "Chihayafuru",
      img: skill,
      document: [{
        text: <span>
          <p className="mb-2">Unleashes a secret technique as fierce as the rushing wind that pulls objects and opponents towards Kazuha's current position before launching the opponents within the AoE, dealing Anemo DMG and lifting Kazuha into the air on a rushing wind current.</p>
          <p className="mb-2">Within 10s of being in mid-air due to the effects of Chihayafuru and if maintaining a mid-air state, Kazuha can unleash a particularly powerful Plunging Attack known as Ranran Haishi.</p>
          <p className="mb-2"><strong>Press:</strong> Can be used in mid-air.</p>
          <p className="mb-2"><strong>Hold:</strong> Charges up before unleashing greater Anemo DMG over a larger AoE than Press Mode.</p>
          <p className="mb-2"><strong>Plunging Attack: Ranran Haishin:</strong> When a Plunging Attack is performed using the effects of the Elemental Skill Chihayafuru, Plunging Attack DMG is converted to Anemo DMG and will create a miniature wind tunnel via a secret technique that pulls nearby objects and opponents in.</p>
          <p className="mb-2">Ranran Haishin's DMG is considered Plunging Attack DMG.</p>
          <p className="mb-0">Generate x/x elemental particles for press/hold when it hit at least 1 target.</p>
        </span>,
        fields: [{
          text: "Press DMG",
          formulaText: stats => <span>{data.skill.press[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.press,
          variant: stats => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "Press CD",
          value: stats => stats.constellation >= 1 ? "5.4s" : "6s"
        }, {
          text: "Hold DMG",
          formulaText: stats => <span>{data.skill.hold[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.hold,
          variant: stats => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "Hold CD",
          value: stats => stats.constellation >= 1 ? "8.1s" : "9s"
        }, {
          text: "Ranran Haishin : Plunge DMG",
          formulaText: stats => <span>{data.plunging.dmg[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats, "anemo"), stats)}</span>,
          formula: formula.RanranHaishin.dmg,
          variant: stats => getTalentStatKeyVariant("plunging", stats, "anemo"),
        }, {
          text: "Ranran Haishin : Low Plunge DMG",
          formulaText: stats => <span>{data.plunging.low[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats, "anemo"), stats)}</span>,
          formula: formula.RanranHaishin.low,
          variant: stats => getTalentStatKeyVariant("plunging", stats, "anemo"),
        }, {
          text: "Ranran Haishin : High Plunge DMG",
          formulaText: stats => <span>{data.plunging.high[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats, "anemo"), stats)}</span>,
          formula: formula.RanranHaishin.high,
          variant: stats => getTalentStatKeyVariant("plunging", stats, "anemo"),
        }],
      }],
    },
    burst: {
      name: "Manyou no Ittou",
      img: burst,
      document: [{
        text: <span>
          <p className="mb-2">The ultimate Garyu technique — a single slash akin to a coming storm that deals AoE Anemo DMG. The blade's passage will leave behind a field named "Ruka Akino" that deals AoE Anemo DMG at set intervals to opponents within it.</p>
          <p className="mb-2"><strong>Elemental Absorption:</strong> If Ruka Akino comes into contact with <span className="text-hydro">Hydro</span>/<span className="text-pyro">Pyro</span>/<span className="text-cryo">Cryo</span>/<span className="text-electro">Electro</span> elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use.</p>
        </span>,
        fields: [{
          text: "Slashing damage",
          formulaText: stats => <span>{data.burst.slashing_dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
          formula: formula.burst.hit,
          variant: stats => getTalentStatKeyVariant("burst", stats),
        }, {
          text: "DoT",
          formulaText: stats => <span>{data.burst.dot[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
          formula: formula.burst.dot,
          variant: stats => getTalentStatKeyVariant("burst", stats),
        }, {
          text: "Duration",
          value: "8s",
        }, {
          text: "CD",
          value: "15s",
        }, {
          text: "Energy Cost",
          value: 60,
        }, {
          canShow: stats => stats.constellation >= 1,
          text: <span>Reset the CD of <strong>Chihayafuru</strong>.</span>,
        }],
        conditional: conditionals.q
      }, {
        canShow: stats => Boolean(stats.conditionalValues?.character?.venti?.q),
        text: <span>
          <h6>Full Elemental Burst DMG</h6>
          <p className="mb-2">This calculates the total Elemental Burst DMG, including swirl. This calculation assumes:</p>
          <ul>
            <li>20 ticks of Burst DMG</li>
            <li>15 ticks of absorption DMG</li>
            <li>7 ticks of Swirl, for one enemy, OR,</li>
            <li>14 ticks of Swirl, for multiple enemy, that Swirls eachother.</li>
          </ul>
        </span>,
        fields: ["hydro", "pyro", "cryo", "electro"].flatMap(eleKey => ([7, 14].map(swirlTicks => ({
          canShow: stats => {
            const value = stats.conditionalValues?.character?.kazuha?.q
            if (!value) return false
            const [num, condEleKey] = value
            if (!num || condEleKey !== eleKey) return false
            return true
          },
          text: <span>Total DMG(<span className={`text-${eleKey}`}>{swirlTicks} Swirl ticks</span>)</span>,
          formula: formula.burst[`${eleKey}_tot_${swirlTicks}`],
          formulaText: stats => <span>20 * {data.burst.slashing_dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)} + 15 * {(data.burst.slashing_dmg[stats.tlvl.burst] / 2)?.toFixed(2)}% {Stat.printStat(`${eleKey}_burst_${stats.hitMode}`, stats)} + {swirlTicks} * {Stat.printStat(`${eleKey}_swirl_hit`, stats)}</span>
        }))))
      }],
    },
    passive1: {
      name: "Weathering Blade",
      img: passive1,
      document: [{ 
        text: <span>If <b>Chihayafuru </b> comes into contact with Hydro/Pyro/Cryo/Electro while being used, Elemental Absorption will occur during this Chihayafuru and it will deal additional 200% additional DMG of that elemental type, which will be considered Plunging Attack DMG.
        Elemental Absorption may only occur once per use of Chihayafuru.</span>,
        conditional: conditionals.a1
      }],
    },
    passive2: {
      name: "Windsong Poetics",
      img: passive2,
      document: [{ 
        text: <span>Upon triggering a Swirl reaction, Kaedehara Kazuha will grant teammates a 0.03% Elemental DMG Bonus to their corresponding Element for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist.</span>,
        conditional: conditionals.a4
      }],
    },
    passive3: {
      name: "Matsukaze Karyuu",
      img: passive3,
      document: [{
        text: <span>
          Decreases sprinting Stamina consumption for your own party members by 20%.
          Not stackable with Passive Talents that provide the exact same effects.
      </span>
      }],
      stats: {
        staminaDec_: 20,
      }
    },
    constellation1: {
      name: "Senzan Kouhen",
      img: c1,
      document: [{ text: <span>Decreases Chihayafuru's CD by 10%.
      Using Manyou no Ittou resets the CD of Chihayafuru.</span> }],
    },
    constellation2: {
      name: "Yamaarashi Zanshin",
      img: c2,
      document: [{ 
        text: 
          <span>
            <p>The Ruka Akino field created by Manyou no Ittou has the following properties:</p> 
            <p>• Increases Kaedehara Kazuha's own Elemental Mastery by 200.</p>
            <p>• Increases the Elemental Mastery of characters within the field by 200.</p>
            <p>The Elemental Mastery-increasing effects of this Constellation do not stack.</p>
          </span>,
          conditional: conditionals.c2
        }],
        
    },
    constellation3: {
      name: "Fuushuu Kitan",
      img: c3,
      document: [{ text: <span>Increases the level of <b>Chihayafuru</b> by 3. Maximum upgrade level is 15.</span> }],
      stats: { skillBoost: 3 }
    },
    constellation4: {
      name: "Oozora Genpou",
      img: c4,
      document: [{
        text: 
          <span>
            <p>When Kaedehara Kazuha's Energy is lower than 45, he obtains the following effects:</p>
            <p>• Press or Hold Chihayafuru to regenerate 3 or 4 Energy for Kaedehara Kazuha respectively.</p>
            <p>• Regenerate 2 Energy per second for Kaedehara Kazuha while gliding.</p>
          </span>,
        conditional: conditionals.c4
      }],
    },
    constellation5: {
      name: "Bansei no Shuu",
      img: c5,
      document: [{ text: <span>Increases the level of <b>Manyou no Ittou</b> by 3. Maximum upgrade level is 15.</span> }],
      stats: { burstBoost: 3 }
    },
    constellation6: {
      name: "Ketsuseki Haku",
      img: c6,
      document: [{ 
        text: <span>Kaedehara Kazuha gains a Anemo Infusion for 5s after using Chihayafuru or Manyou no Ittou. Additionally, each point of Elemental Mastery will increase the DMG dealt by Kaedehara Kazuha's Normal, Charged, Plunging, and Plunging Attack: Ranran Haishin by 0.2%.</span>,
        conditional: conditionals.c6,
      }],
    }
  },
};
export default char;
