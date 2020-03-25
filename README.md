> This repo was made to provide a reproducible case of jest performance degradation on 25.x version with `--coverage` flag. See https://github.com/facebook/jest/issues/9457

### How to reproduce

```bash
$ rm -rf target node_modules            # make sure you delete `target` & `node_modules`
$ yarn                                  # install node_modules
$ yarn test bin/ci/hoydenism --coverage # run the tests
```

> Note: the `master` branch is pointed to `jest@24.9.0`, `jest25` branch is pointed to `jest@25.1.0`.

### Results

Benchmarks were ran on `MBP 2019, 32Gb RAM, i9-8950HK CPU @ 2.90GHz`.

| jest version  | branch |      time |
|:--------------|:------:|----------:|
| `24.9.0`      |`master`| `348.077s`|
| `25.1.0`      |`jest25`|  `591.33s`|