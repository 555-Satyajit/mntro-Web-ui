
import fs from 'fs';
const content = fs.readFileSync('./src/pages/Chat_response.jsx', 'utf8');
const opens = (content.match(/\{/g) || []).length;
const closes = (content.match(/\}/g) || []).length;
console.log(`Braces: ${opens} / ${closes}`);
