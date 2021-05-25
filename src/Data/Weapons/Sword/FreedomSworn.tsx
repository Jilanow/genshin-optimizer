import { IConditionals } from '../../../Types/IConditional'
import { IWeaponSheet } from '../../../Types/weapon'
import img from './Weapon_Iron_Sting.png'
const dmg_ = [10, 12.5, 15, 17.5, 20]
const bonusDmg_ = [16, 20, 24, 28, 32]
const condAtk_ = [20, 25, 30, 35, 40]
const conditionals: IConditionals = {
  r: {
    name: "Millennial Movement: Song of Resistance",
    stats: stats => ({
      atk_: condAtk_[stats.weapon.refineIndex],
      normal_dmg_: bonusDmg_[stats.weapon.refineIndex],
      charged_dmg_: bonusDmg_[stats.weapon.refineIndex],
      plunging_dmg_: bonusDmg_[stats.weapon.refineIndex],
    }),
  }
}
const weapon: IWeaponSheet = {
  name: "Freedom-Sworn",
  weaponType: "sword",
  img,
  rarity: 5,
  passiveName: "Revolutionary Chorale",
  passiveDescription: stats => `A part of the "Millennial Movement" that wanders amidst the winds. Increases DMG by ${dmg_[stats.weapon.refineIndex]}%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain "Millennial Movement: Song of Resistance" for 12s. "Millennial Movement: Song of Resistance" increases Normal, Charged and Plunging Attack DMG by ${bonusDmg_[stats.weapon.refineIndex]}% and increases ATK by ${condAtk_[stats.weapon.refineIndex]}%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.`,
  description: "A straight sword, azure as antediluvian song, and as keen as the oaths of freedom taken in the Land of Wind.",
  baseStats: {
    main: [46, 62, 82, 102, 122, 153, 173, 194, 214, 235, 266, 287, 308, 340, 361, 382, 414, 435, 457, 488, 510, 532, 563, 586, 608],
    substatKey: "eleMas",
    sub: [43, 50, 59, 68, 76, 76, 85, 94, 103, 111, 111, 120, 129, 129, 137, 146, 146, 155, 164, 164, 172, 181, 181, 190, 198],
  },
  stats: stats => ({
    dmg_: dmg_[stats.weapon.refineIndex]
  }),
  conditionals
}
export default weapon