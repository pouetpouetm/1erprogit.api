function factoriel(n: number): number {

    let res = 1

    for (let i = 1; i <= n; i++) {
        res = res * i;
    }

    return res;
}

const n = 10;
const resultat = factoriel(n);
console.log(`${n}! ====> ${resultat}`);
