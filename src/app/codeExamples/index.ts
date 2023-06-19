import { TValueOf } from 'shared/types'

export const ECodeExamples = {
    SMART_DEVICE: 'smartDevice',
    JEVELLERY: 'jevellery',
    EUROPE: 'europe',
    BICYCLE: 'bicycle',
    MISHKA: 'mishka',
    KEKSOBOOKING: 'keksobooking',
    POKEDEX: 'pokedex',
    CYBER_ZILLA: 'cyberZilla'
} as const
export type ECodeExamples = TValueOf<typeof ECodeExamples>

export const ECodeExamplesLinksHrefs = {
    SMART_DEVICE: 'https://github.com/sakralbar0192/smart-device',
    JEVELLERY: 'https://github.com/sakralbar0192/Jewellery',
    EUROPE: 'https://github.com/sakralbar0192/Europe',
    BICYCLE: 'https://github.com/sakralbar0192/uhov-bicycles',
    MISHKA: 'https://github.com/sakralbar0192/Mishka',
    KEKSOBOOKING: 'https://github.com/sakralbar0192/Keksobooking',
    POKEDEX: 'https://github.com/sakralbar0192/PokeDex',
    POSTS_LIST: 'https://github.com/sakralbar0192/MitraSoftTest',
    CYBER_ZILLA: 'https://github.com/sakralbar0192/CyberZilla'
} as const
export type ECodeExamplesLinksHrefs = TValueOf<typeof ECodeExamplesLinksHrefs>
