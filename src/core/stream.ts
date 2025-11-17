/**
 * Streams a text file line by line.
 *
 * @param path - File path or URL.
 * @param options - Optional open options (e.g. signal).
 * @returns Async iterable of lines.
 * @throws {Deno.errors.NotFound} If file doesn't exist.
 * @throws {Deno.errors.PermissionDenied} If read denied.
 * @throws {Error} On other I/O errors.
 * @example
 * ```ts
 * import * as text from '@dep/text';
 * for await (const line of text.stream('big.csv')) {
 *   console.log(line);
 * }
 * ```
 */
export async function* stream(
  path: string | URL,
  options?: Deno.ReadFileOptions
): AsyncIterable<string> {
  const file = await Deno.open(path, { read: true, ...options });
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    for await (const chunk of file.readable) {
      buffer += decoder.decode(chunk, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';
      for (const line of lines) yield line;
    }
    if (buffer) yield buffer;
  } finally {
    file.close();
  }
}
