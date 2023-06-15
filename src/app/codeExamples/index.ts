import { TValueOf } from 'shared/types'

export const ECodeExamples = {
    SMART_DEVICE: 'smartDevice',
    JEVELLERY: 'jevellery',
    EUROPE: 'europe',
    BICYCLE: 'bicycle',
    MISHKA: 'mishka',
    KEKSOBOOKING: 'keksobooking'
} as const
export type ECodeExamples = TValueOf<typeof ECodeExamples>
