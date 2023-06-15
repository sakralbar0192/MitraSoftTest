import { TValueOf } from 'shared/types'

export const ECodeExamples = {
    SMART_DEVICE: 'smartDevice',
    JEVELLERY: 'jevelerry',
    EUROPE: 'europe',
    BICYCLE: 'bicycle',
    MISHKA: 'mishka'
} as const
export type ECodeExamples = TValueOf<typeof ECodeExamples>
