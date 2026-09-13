const STORAGE_KEY = 'portfolio_seed'

export function getSessionSeed() : string {
    let seed = sessionStorage.getItem(STORAGE_KEY);

    if(!seed)
    {
        seed = crypto.randomUUID();
        sessionStorage.setItem(STORAGE_KEY, seed);
    }

    return seed;
}