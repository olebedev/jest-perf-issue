> This repo was made to provide a reproducible case of jest performance degradation of 25.x version with `--coverage` flag. See https://github.com/facebook/jest/issues/9457

The `master` branch is pointed to `jest@24.x` and `jest25` branch is pointed to `jest@25`. So you have to switch between these branches and delete cache to see the different `time` output.

### How to run?

```bash
$ rm -rf target node_modules                 # make sure you delete `target` & `node_modules`
$ yarn                                       # install node_modules
$ time yarn test bin/ci/hoydenism --coverage # run the tests, wrapped by `time` tool
```