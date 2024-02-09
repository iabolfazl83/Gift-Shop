export function insertRialComma(n) {
    let m = "";
    for (let i = 0; i < n.length; i++) {
        let c = n.substr(n.length - i - 1, 1);
        if (i % 3 == 0 & i > 0) {
            m = c + ',' + m;
        } else {
            m = c + m;
        }
    }
    return m;
}

export function numberToPersian(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x])
}