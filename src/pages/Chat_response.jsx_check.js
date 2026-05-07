
import fs from 'fs';

const content = fs.readFileSync('./src/pages/Chat_response.jsx', 'utf8');

const openBox = (content.match(/<Box/g) || []).length;
const closeBox = (content.match(/<\/Box>/g) || []).length;
const openTypography = (content.match(/<Typography/g) || []).length;
const closeTypography = (content.match(/<\/Typography>/g) || []).length;
const openStack = (content.match(/<Stack/g) || []).length;
const closeStack = (content.match(/<\/Stack>/g) || []).length;
const openPaper = (content.match(/<Paper/g) || []).length;
const closePaper = (content.match(/<\/Paper>/g) || []).length;

console.log(`Box: ${openBox} / ${closeBox}`);
console.log(`Typography: ${openTypography} / ${closeTypography}`);
console.log(`Stack: ${openStack} / ${closeStack}`);
console.log(`Paper: ${openPaper} / ${closePaper}`);

// Check for unclosed tags by line
const lines = content.split('\n');
let balance = 0;
lines.forEach((line, i) => {
    const opens = (line.match(/<[A-Z][a-zA-Z]*/g) || []).filter(t => !t.includes('/>')).length;
    const closes = (line.match(/<\/[A-Z][a-zA-Z]*/g) || []).length;
    balance += opens - closes;
    // if (balance < 0) console.log(`Line ${i+1} has extra close: ${line}`);
});
console.log(`Final Balance: ${balance}`);
