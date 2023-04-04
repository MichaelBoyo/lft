import isEmail from '../isEmail';
import isPassword from '../isPassword';
import ifElse from "../ifElse";

describe('test helper functions', () => {
    test('is email', () => {
        expect(isEmail('mike')).toBe(false);
        expect(isEmail('mike@')).toBe(false);
        expect(isEmail('mike@gmail.com')).toBe(true);
    });
    test('is password', () => {
        expect(isPassword('123456')).toBe(false);
        expect(isPassword('abscd')).toBe(false);
        expect(isPassword('ABDD')).toBe(false);
        expect(isPassword('abcdEf-')).toBe(false);
        expect(isPassword('abcdEf-89')).toBe(true);
    });

    test('if else', () => {
        expect(ifElse(1 + 1 == 2, "Yes", "No")).toBe("Yes")
        expect(ifElse(1 + 1 == 3, "Yes", "No")).toBe("No")
    })
});
