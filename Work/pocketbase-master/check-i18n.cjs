const fs = require("fs");
const path = require("path");
const files = [];
function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) walk(p);
        else if (p.endsWith(".js")) files.push(p);
    }
}
walk("ui/src");

function extractTrKeys(code) {
    const out = new Set();
    const re = /app\.tr\(\s*(['"])((?:\\.|(?!\1).)*)\1/g;
    let m;
    while ((m = re.exec(code))) {
        const k = m[2].replace(/\\(["'\\])/g, "$1");
        out.add(k);
    }
    return out;
}

const used = new Set();
for (const f of files) {
    const c = fs.readFileSync(f, "utf8");
    for (const k of extractTrKeys(c)) used.add(k);
}

const i18n = fs.readFileSync("ui/src/i18n.js", "utf8");
const zhStart = i18n.indexOf("const zhMessages = {");
const zhEnd = i18n.indexOf("\n};", zhStart);
const zhBlock = i18n.substring(zhStart, zhEnd);
const defined = new Set();
const keyRe = /^\s*(["'])((?:\\.|(?!\1).)*)\1\s*:/gm;
let m;
while ((m = keyRe.exec(zhBlock))) {
    const k = m[2].replace(/\\(["'\\])/g, "$1");
    defined.add(k);
}

const missing = [...used].filter((k) => !defined.has(k)).sort();
console.log("=== USED but NOT defined in i18n.js (" + missing.length + ") ===");
for (const k of missing) console.log(JSON.stringify(k));
