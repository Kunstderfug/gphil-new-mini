import svg1 from '/assets/1.svg'
type TempoIcon = {
    name: string
    length: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24 | 32
    icon: string
}

export const tempoIcons = {
    1: { name: '1', length: 1, icon: '/assets/1.svg' },
    2: { name: '2', length: 2, icon: '/assets/2.svg' },
    3: { name: '3', length: 3, icon: '/assets/3.svg' },
    4: { name: '4', length: 4, icon: '/assets/4.svg' },
    6: { name: '6', length: 6, icon: '/assets/6.svg' },
    8: { name: '8', length: 8, icon: '/assets/8.svg' },
    12: { name: '12', length: 12, icon: '/assets/12.svg' },
    16: { name: '16', length: 16, icon: '/assets/16.svg' },
    24: { name: '24', length: 24, icon: '/assets/24.svg' },
    32: { name: '32', length: 32, icon: '/assets/32.svg' },
}