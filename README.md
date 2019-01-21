# MMM-Tegneserie
A module for MagicMirror<sup>2</sup> that displays comics from [Dagbladet.no/tegneserie](https://dagbladet.no/tegneserie).

<img src="lunch.png"></img>

## Dependencies
  * A [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror) installation
  * [cheerio](https://github.com/cheeriojs/cheerio) npm package

## Installation
  1. Clone this repo into your `modules` directory.
  2. Create an entry in your `config.js` file to tell this module where to display on screen.
  3. Run `npm install -p cheerio`
  
 **Example:**
```
 {
    module: 'MMM-Tegneserie',
	position: 'bottom_bar',
	config: {
		updateInterval : 36000000,
    showColor: false,
    comicTitle: 'lunch'
	}
 },
```

## Config
| **Option** | **Description** || **Default** |
| --- | --- | --- |
| `updateInterval` | Set to desired update interval (in ms). | `18000000` (5 hours) |
| `showColor` | Boolean for displaying true colors instead of greyscale. | false |
| `comicTitle` | The desired comic to be displayed from dagbladet.no. Example: 'lunch', 'pondus', 'nemi'. | 'lunch |

Heavily inspired by the MagicMirror plugin [DailyDilbert](https://github.com/andrecarlucci/MMM-DailyDilbert).
