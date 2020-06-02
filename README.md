# codemod example

I've been experimenting with [`jscodeshift`](https://github.com/facebook/jscodeshift) for a recent Flow to TypeScript migration, mostly to tackle any large fixups needed post migration.

This is just record of my experimentation. Please **check the docs and online tutorials** for better guides.

## Examples of stuff

To get started, install everything with `yarn`. Type:

```
yarn
```

I wanted to be able to test my transforms so there's an example of that. type:

```
yarn test --watch
```

I wanted to write everything in TypeScript so you can check that, too:

```
npx tsc
```

I was experimenting with transforming TypeScript code in [addons-code-manager](https://github.com/mozilla/addons-code-manager).
After cloning that repo somewhere you can run a transform on it like this:

```
npx jscodeshift -t transforms/import-example.ts ~/tmp/addons-code-manager/ --extensions=tsx --parser=tsx
```
