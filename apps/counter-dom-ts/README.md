# Counter (Optimised Typescript)

This is the Typescript reference counter app behaves just like the [React Typescript version](https://github.com/cefn/lauf/tree/main/apps/counter-react-ts), [React Javascript version](https://github.com/cefn/lauf/tree/main/apps/counter-react-js) and the [Preact version](https://github.com/cefn/lauf/tree/main/apps/counter-preact-ts).

However, it illustrates how managing state in a dedicated Store, independently of any web framework, allows you ultimate flexibility. This implementation directly manipulates the DOM when app state changes, without any JSX component framework at all!

The result is a build which, even with polyfills to target the default [browserslist](https://browsersl.ist/) is radically smaller than anything built with React or Preact.

From this reference application, we have derived an ESM Javascript build and a CommonJS Javascript Build which are authored without any Typescript annotations. We also derive an optimised build which attempts to create the smallest possible bundle size. You can see the byte count for each javascript bundle size below.

The smallest version of the `dom` app collectionj - `counter-dom-tiny` - bundles no polyfills, and targets only modern browsers. It can build the complete app in just 424 bytes! That's **235 times smaller** than the equivalent React app.

The `ESM Javascript` and `Typescript` bundles neck-and-neck at nearly **80 times smaller** than the React version thanks to effective tree-shaking removing unused symbols. However, even the wasteful commonjs bundle is still nearly **11 times smaller**.

```zsh
watchable git:(main) ✗ find -type d -iname 'counter*dom*' | xargs -I{} zsh -c "echo -n '{} '; cd {}; cat dist/assets/*.js | gzip | wc -c" | sort -n -k2
./apps/counter-dom-tiny 424
./apps/counter-dom-esm 1282
./apps/counter-dom-ts 1282
./apps/counter-dom-commonjs 9319
```
