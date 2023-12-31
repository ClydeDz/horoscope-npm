<div align="center">
	<br>
	<img width="172" src="https://raw.githubusercontent.com/ClydeDz/horoscope-npm/main/Icon.png" alt="Horoscope npm package">
	<br>
	<br>
</div>

## @clydedsouza/horoscope

An npm library for zodiac signs. Get details on each zodiac sign, pass a date and know which zodiac sign it falls in or get a list of all zodiac signs. Now includes Chinese zodiac signs and elements!

## How to use

### Installation

Library can either be directly downloaded from the [npm](https://www.npmjs.com/package/@clydedsouza/horoscope) registry or installed from the [GitHub](https://github.com/ClydeDz/horoscope-npm/pkgs/npm/horoscope) registry.

#### NPM

By default the npm js registry URL is already pre-configured in your npm installation. So, you should be able to install directly using this command.

```pwsh
> npm i @clydedsouza/horoscope
```

#### GitHub

This package is also published in the GitHub registry. This URL will need to be added to the `.npmrc` file against the `@clydedz` namespace.

```bash
@clydedz:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<GitHub personal access token>
always-auth=true
```

And then from the command line you'll need to run the installation command.

```pwsh
> npm i @clydedz/horoscope
```

### Usage

#### NPM

Import the required methods from `@clydedsouza/horoscope`.

```typescript
import { getZodiacSignForDate } from '@clydedsouza/horoscope'

const sign = getZodiacSignForDate(new Date('2 March 1995'))
```

#### GitHub

Import the required methods from `@clydedz/horoscope`.

```typescript
import { getZodiacSignForDate } from '@clydedz/horoscope'

const sign = getZodiacSignForDate(new Date('2 March 1995'))
```

For more examples, refer to [this file](./consumer/index.ts).

## Credits

(c) 2023 [Clyde D'Souza](https://clydedsouza.net)  
Icon credits: [Firkin](https://openclipart.org/detail/297192/bold-zodiac-symbols-colour)
