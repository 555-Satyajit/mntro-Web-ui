
import fs from 'fs';
const content = fs.readFileSync('c:/desginday/mntor-web/mntro-Web-ui/src/pages/Chat_response.jsx', 'utf8');
const lines = content.split('\n');
let stack = [];
lines.forEach((line, i) => {
    // Very simple tag extraction
    const tags = line.match(/<[A-Z][a-zA-Z]*|<\/[A-Z][a-zA-Z]*/g) || [];
    tags.forEach(tag => {
        if (tag.startsWith('</')) {
            const tagName = tag.substring(2);
            if (stack.length > 0 && stack[stack.length - 1] === tagName) {
                stack.pop();
            } else {
                console.log(`Extra closing tag </${tagName}> at line ${i + 1}. Expected </${stack[stack.length - 1]}>`);
            }
        } else if (!line.includes(tag + ' ') && !line.includes(tag + '>') && !line.includes(tag + '/')) {
             // Likely a tag start
             stack.push(tag.substring(1));
        } else {
            // Check if self-closing
            if (!line.match(new RegExp(tag + '[^>]*/>'))) {
                stack.push(tag.substring(1));
            }
        }
    });
});
console.log(`Remaining in stack: ${stack}`);
