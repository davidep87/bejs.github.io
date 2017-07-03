## Welcome to beJS

## Installation

### Node.js
```javascript
npm install bejs --save
```
#### or
```javascript 
yarn add bejs
```

### Browser

#### Local
```html
<script src="node_modules/bejs/dist/be.min.js"></script>
```

#### CDN unpkg
```html
<script src="https://unpkg.com/bejs/dist/be.min.js"></script>
```

#### CDN jsDeliver
```html
<script src="https://cdn.jsdelivr.net/npm/bejs/dist/be.min.js"></script>
```

## Example
```javascript
const be = require('bejs');

// call a method
be.boolean(true);

// call interface "not"
be.not.boolean(1);

// call interface "all" and passing arguments
be.all.boolean(true, false, true);

// call interface "all" and passing array
be.all.boolean([true, false, true]);

// call interface "any" and passing arguments
be.any.boolean(true, false, 1);
```

## Docs
- [API](docs/be.md)
    - [Arrays](docs/arrays.md)
    - [Dates](docs/dates.md)
    - [Envs](docs/envs.md)
    - [Hashes](docs/hashes.md)
    - [Mixed](docs/mixed.md)
    - [Numbers](docs/numbers.md)
    - [Objects](docs/objects.md)
    - [Strings](docs/strings.md)
    - [Types](docs/types.md)
    - [Urls](docs/urls.md)
    - [CreditCards](docs/creditCards.md)
    - [PostalCodes](docs/postalCodes.md)
    - [DOM](docs/dom.md)

## License
beJS is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

## Collaborator
[Davide Polano](https://www.mdslab.org)

## Author
[Fabio Ricali](http://rica.li)
