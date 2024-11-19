import { describe, it, expect, beforeEach } from "vitest"
import { app } from ".."
import request from "supertest"
import resetDb from "./helper/reset-db"

describe("sum", () => {
    beforeEach(async () => {
        await resetDb()
    })
    it("should", async () => {
        const { body, status } = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });

    })
})