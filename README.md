# babel-minify-loader

A webpack@v1 loader of babel-minify for minification of inlined sources.

## Example of usage
```typescript
scriptTag.textContent = require('!raw!babel-minify!babel!./player-frame.js');
```
