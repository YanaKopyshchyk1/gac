import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { sum } from './index.js';

describe('Test function sum(a,b)', () => {
    it('should return the 3', () => {
        assert.strictEqual(sum(1, 2), 3);
    });
    it('should return the 0', () => {
        assert.strictEqual(sum(-5, +5), 0);
    });
    it('5 should not be equal 4', () => {
        assert.notEqual(sum(3, 2), 4);
    })
})