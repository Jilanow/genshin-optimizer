interface Iauto {
  auto: {
    name: number
    fields: number
  },
}
const validKeys = ["skill", "burst", "passive1", "passive2", "passive3", "constellation1", "constellation2", "constellation3", "constellation4", "constellation5", "constellation6"] as const

type Keys = (typeof validKeys)[number];
export type Idata = {
  [key in Keys]: {
    name: number
    description: number
  }
} | Iauto