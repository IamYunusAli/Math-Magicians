import calculate from "../../logic/calculate";

describe('Unit testing of the calculate', () => {
    test('AC', () => {
        const result = calculate({}, 'AC');
        expect(result).toEqual({
            total: null,
            next: null,
            operation: null,
    })
    })

    test('equal', () => {
        const result = calculate({ 
            total: 8,
            next: 2,
            operation: '÷',}, '=');

        expect(result).toEqual({ total: '4',
            next: null,
            operation: null,})
        
    })
})