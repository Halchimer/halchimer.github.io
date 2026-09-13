class _Random {
    private static readonly MULT64 = 6364136223846793005n;
    private static readonly INC64 = 1442695040888963407n;

    static pcgHash(seed : bigint) {
        const state = BigInt.asUintN(64, seed * this.MULT64 + this.INC64);
        const xorshifted = BigInt.asUintN(64, (state ^ (state >> 32n)));
        const rot = BigInt.asUintN(64, state >> 58n);
        const rotInt = Number(rot);
        const res = BigInt.asUintN(64, (xorshifted >> BigInt(rotInt)) | (xorshifted << BigInt(64 - rotInt)));
    
        return res;
    }

    random(seed : bigint) {
        const hash = _Random.pcgHash(seed);
        const mantissa53 = Number(hash >> 11n); 
        return mantissa53 / 9007199254740992;
    }
}

export const Random = new _Random();