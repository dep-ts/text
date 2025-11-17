# @dep/text 📝

> Tiny helpers for reading, writing, appending, and streaming text files in Deno.

## [![JSR version](https://jsr.io/badges/@dep/text)](https://jsr.io/@dep/text)

## Features ✨

- 📖 Read entire text files with one line
- ✍️ Write text (with auto parent directory creation)
- ➕ Append text intelligently (adds newline if needed)
- 🌊 Stream large files line-by-line without loading into memory
- 🛡️ Full TypeScript support & JSDoc documentation

---

## Installation 📦

- **Deno**:

  ```bash
  deno add jsr:@dep/text
  ```

---

## Usage 🎯

### API 🧩

```ts
import * as text from '@dep/text';
```

#### `text.read(path, options?)`

Read a text file as a string.

```ts
const content = await text.read('config.txt');
console.log(content);
```

#### `text.write(path, data, options?)`

Write text to a file. Creates parent directories automatically.

```ts
await text.write('logs/app.log', 'Server started\n');
```

#### `text.append(path, data, options?)`

Append text to a file. Creates the file if it doesn't exist. Adds a newline if the file doesn't end with one.

```ts
await text.append('log.txt', 'Error: Something went wrong');
```

#### `text.stream(path, options?)`

Stream a file line by line — perfect for large logs or CSVs.

```ts
for await (const line of text.stream('big.csv')) {
  console.log(line);
}
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
