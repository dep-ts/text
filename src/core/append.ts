import { read } from './read.ts';
import { write } from './write.ts';

/**
 * Appends text to a file, creating it if missing.
 *
 * @param path - File path or URL.
 * @param data - Text or stream to append.
 * @param options - Optional write options.
 * @returns Promise that resolves when done.
 * @throws {Deno.errors.PermissionDenied} On permission error.
 * @throws {Error} On other I/O errors.
 * @example
 * ```ts
 * import * as text from '@dep/text';
 * await text.append('log.txt', 'Error occurred');
 * ```
 */
export const append = async (
  path: string | URL,
  data: string | ReadableStream<string>,
  options?: Deno.WriteFileOptions
): Promise<void> => {
  const content = await read(path).catch(() => '');
  return await write(
    path,
    `${content}${content.endsWith('\n') ? '' : '\n'}${data}`,
    options
  );
};
