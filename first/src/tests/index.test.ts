import { sum } from "../index";

import { describe, expect, it } from "@jest/globals";

describe("sum", () => {
    it("should br able to add two positive number", () => {
        const ans = sum(1, 2);
        expect(ans).toBe(3)
    })
    it("should be able to add two negative number", () => {
        const ans = sum(-11, -2);
        expect(ans).toBe(-13)
    })
    it("should br able to add two zero number", () => {
        const ans = sum(0, 0);
        expect(ans).toBe(0)
    })
})
