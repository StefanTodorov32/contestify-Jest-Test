const { sum } = require('./main.js');

describe('sum function', () => {
    test('adds two positive numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds a positive and negative number correctly', () => {
        expect(sum(5, -3)).toBe(2);
    });

    test('adds two negative numbers correctly', () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    test('adds zero correctly', () => {
        expect(sum(0, 5)).toBe(5);
        expect(sum(5, 0)).toBe(5);
    });

    test('handles decimal numbers correctly', () => {
        expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
    });

    test('handles large numbers correctly', () => {
        expect(sum(999999, 1)).toBe(1000000);
    });

    test('throws error for non-number inputs', () => {
        expect(() => sum('1', 2)).toThrow();
        expect(() => sum(1, '2')).toThrow();
    });
}); 