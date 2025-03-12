import assert from 'node:assert/strict';
import db from 'mime-db';

import { compressible } from '../src/index.js';

// None of these should be actual types so that the lookup will never include them.
const EXAMPLE_TYPES = [
  { type: 'text/penguins', should: true },
  { type: 'text/html', should: true },
  { type: 'text/plain', should: true },
  { type: 'text/jade', should: true },
  { type: 'something/text', should: undefined },
  { type: 'something/frog+TEXT', should: true },
  { type: 'type/json;askjkl+json', should: undefined },
  { type: 'type/+json', should: true },
  { type: 'data/beans+xml ; charset="utf-8"', should: true },
  { type: 'can/worms+xml;blaaaah', should: true },
  { type: 'data/xml', should: undefined },
  { type: 'asdf/nope', should: undefined },
  { type: 'cats', should: undefined },
];

const INVALID_TYPES = [
  undefined,
  null,
  0,
  1,
  false,
  true,
];

describe('Testing if spec lookups are correct.', () => {
  it('All DB `compressible` types should reflect in compressible', () => {
    for (const type in db) {
      if (db[type].compressible !== undefined) {
        assert.strictEqual(compressible(type), db[type].compressible);
      }
    }
  });
});

describe('Testing if the regex works as intended.', () => {
  EXAMPLE_TYPES.forEach(example => {
    it(`${example.type} should${example.should ? ' ' : ' not '}be compressible`, () => {
      assert.strictEqual(compressible(example.type), example.should);
    });
  });
});

describe('Testing if charsets are handled correctly.', () => {
  it('Charsets should be stripped off without issue', () => {
    for (const type in db) {
      if (db[type].compressible !== undefined) {
        assert.strictEqual(compressible(type + '; charset=utf-8'), db[type].compressible);
      }
    }
  });
});

describe('Ensuring invalid types do not cause errors.', () => {
  it('No arguments should return false without error', () => {
    // @ts-expect-error empty input
    assert.strictEqual(compressible(), false);
  });

  INVALID_TYPES.forEach(invalid => {
    it(`${invalid} should return false without error`, () => {
      // @ts-expect-error invalid input
      assert.strictEqual(compressible(invalid), false);
    });
  });
});

describe('Ensuring types are always stripped correctly.', () => {
  it('Uppercase types should work', () => {
    assert.strictEqual(compressible('TEXT/HTML'), true);
    assert.strictEqual(compressible('TEXT/plain; charset="utf-8"'), true);
  });

  it('White-spaced types should work', () => {
    assert.strictEqual(compressible('application/json ; charset="utf-8"'), true);
  });
});
