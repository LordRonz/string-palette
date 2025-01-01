# 🎨 String Palette

[![npm version](https://img.shields.io/npm/v/string-palette?color=blue&logo=npm)](https://www.npmjs.com/package/string-palette)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/lordronz/string-palette/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/lordronz/string-palette?style=social)](https://github.com/lordronz/string-palette/stargazers)

**String Palette** is a lightweight, zero-dependency TypeScript library for generating consistent and vibrant colors from strings. Whether you're building a data visualization app, a tag-based color system, or just need a fun way to map strings to colors, String Palette has you covered.

---

## ✨ Features

- **String to Color**: Generate consistent hex colors from any string.
- **Random Colors**: Generate random hex colors effortlessly.
- **Color Utilities**: Check if a color is dark, adjust brightness, and more.
- **Lightweight**: Zero dependencies, minimal footprint.
- **TypeScript Support**: Fully typed for a seamless developer experience.

---

## 🚀 Installation

Install the library via npm:

```bash
npm install string-palette
```

Or using yarn:

```bash
yarn add string-palette
```

## 🛠️ Usage

### Generate a Color from a String

```ts
import { stringToColor } from 'string-palette';

const color = stringToColor('hello world');
console.log(color); // e.g., "#1a2b3c"
```

### Generate a Random Color

```ts
import { randomColor } from 'string-palette';

const color = randomColor();
console.log(color); // e.g., "#4d5e6f"
```


### Check if a Color is Dark

```ts
import { isDarkColor } from 'string-palette';

const dark = isDarkColor('#000000');
console.log(dark); // true
```

### Adjust Color Brightness

```ts
import { adjustBrightness } from 'string-palette';

const lighterColor = adjustBrightness('#000000', 20);
console.log(lighterColor); // e.g., "#333333"
```

## 📚 API Reference

### `stringToColor(input: string): string`

Generates a hex color from a given string.

- `input`: The string to generate a color from.

### `randomColor(): string`

Generates a random hex color.

### `isDarkColor(color: string): boolean`

Checks if a color is dark.

- `color`: The hex color to check.

### `adjustBrightness(color: string, amount: number): string`

Adjusts the brightness of a color.

- `color`: The hex color to adjust.

- `amount`: The amount to adjust the brightness by.


## 🤔 Why Use String Palette?

- Consistent Colors: The same string always produces the same color, making it perfect for tagging or categorization.

- Dynamic and Fun: Easily add vibrant colors to your app without hardcoding values.

- Developer-Friendly: Built with TypeScript for type safety and ease of use.

- Lightweight: No dependencies, so it won’t bloat your project.

## 🎨 Example Use Cases
- Tagging System: Assign unique colors to tags or categories based on their names.

- Data Visualization: Generate colors for charts or graphs dynamically.

- User Avatars: Create colorful avatars based on usernames or emails.

- UI Enhancements: Add dynamic backgrounds or accents to your app.

## 🤝 Contributing
Contributions are welcome! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

- Fork the repository.

- Create a new branch (git checkout -b feature/your-feature).

- Commit your changes (git commit -m 'Add some feature').

- Push to the branch (git push origin feature/your-feature).

- Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/lordronz/string-palette/blob/main/LICENSE) file for more details.

