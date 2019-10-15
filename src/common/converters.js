export function timeStrToISODuration(str) {
    const p = str.split(":").map(s => Number(s));
    return 'PT' + (p[0] ? `${p[0]}H` : '') + (p[1] ? `${p[1]}M` : '');
}

