import { delay, delaySync, getRandomArbitrary, randomMatrix } from '../clitelliferous_knapsack';

describe('basic', () => {
  it('event loop', async () => {
    await delay(getRandomArbitrary(0, 3));
    expect(true).toBeTruthy();
  });

  it('CPU bound', () => {
    delaySync(getRandomArbitrary(0, 3));
    expect({ ok: true }).toEqual({ ok: !!1 });
  });

  it('I/O bound', () => {
    const rndStr = randomMatrix(100, 1000, () => String.fromCharCode(getRandomArbitrary(33, 126)))
      .map(arr => arr.join(''))
      .join('\n');
    expect(rndStr).toMatchSnapshot('rndStr');
  })

  it('mixed', async () => {
    await delay(getRandomArbitrary(0, 3));
    expect(true).toBeTruthy();
    delaySync(getRandomArbitrary(0, 3));
    expect({ ok: true }).toEqual({ ok: !!1 });
  });
});
