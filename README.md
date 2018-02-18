# overwatchrandom.com

## Generate random overwatch characters to play because Blizzard can't be bothered.

Just click the dice button and get a character to quick play as.

### Sprite Install instructions

Like everything in Javascript, the npm module dependencies for [sprity](https://www.npmjs.com/package/sprity-cli) are fucked.  This is how u get it to work:

* Install nvm
* Install node 0.12.7 `nvm install 0.12.7`
* Switch to node 0.12.7 `nvm use 0.12.7`
* Install node modules `npm install lwip sprity sprity-cli`
* Run sprity-cli `./node_modules/sprity-cli/index.js create ./img/hero-sprite ./img/hero/*.png -s ./css/sprite.css`
* [source](https://github.com/sprity/sprity/issues/47)