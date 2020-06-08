import { greet } from "./greet"

describe('greet', () => {
    it('should inlcude the name in the message', () => {
        const result = greet('subin');
        expect(result).toContain('subin');
    })
})