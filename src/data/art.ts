export interface Art {
    slug: string
    media_type: 'image' | 'video'
    media : string
    name? : string
    desc? : string
}

export const myArts : Art[] = [
    {
        slug:'jawsmasher',
        media_type:'image',
        media:'/art/jawsmasher.jpg',
        name:'Jawsmasher',
    },
    {
        slug:'enfer',
        media_type:'image',
        media:'/art/Enfer.gif',
        name:'Enfer',
    },
    {
        slug:'majora',
        media_type:'image',
        media:'/art/majora.png',
        name:'Majora',
    },
    {
        slug:'pas',
        media_type:'image',
        media:'/art/pas_logo.png',
        name:'PAS',
    },
    {
        slug:'damager_ability',
        media_type:'image',
        media:'/art/damager_ability.gif',
        name:'Damager Ability',
    },
    {
        slug:'damager_attack',
        media_type:'image',
        media:'/art/damager_attack.gif',
        name:'Damager Attack',
    },
    {
        slug:'naguere',
        media_type:'image',
        media:'/art/naguere.png',
        name:'Naguere',
    },
    {
        slug:'donut',
        media_type:'image',
        media:'/art/DONUT.png',
        name:'Donut',
    },
];