const { suma, resta } = require('./app.js');

let passed = 0;
let failed = 0;

function test(description, fn) {
    try {
        fn();
        console.log(`✅ ${description}`);
        passed++;
    } catch (e) {
        console.log(`❌ ${description}: ${e.message}`);
        failed++;
    }
}

function assert(condition, message) {
    if (!condition) throw new Error(message || 'Assertion failed');
}

test('suma 2 + 3 = 5', () => assert(suma(2, 3) === 5));
test('suma 0 + 0 = 0', () => assert(suma(0, 0) === 0));
test('suma negativos', () => assert(suma(-1, -1) === -2));

test('resta 5 - 2 = 3', () => assert(resta(5, 2) === 3));
test('resta 0 - 0 = 0', () => assert(resta(0, 0) === 0));
test('resta negativos', () => assert(resta(-1, -1) === 0));

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);