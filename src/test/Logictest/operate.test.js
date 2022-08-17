import operate from "../../logic/operate";

describe('Unit testing of the operate', () => {
    test('Division', () => {
        const result = operate(15, 5,'÷');
        expect(result).toEqual('3')
    })

    test('Addition', () => {
        const result = operate(3, 5,'+');
        expect(result).toEqual('8')
    })

    test('Subtraction', () => {
        const result = operate(15, 5,'-');
        expect(result).toEqual('10')
    })

});