import { dirname } from '@std/path';
import { exists } from '@std/fs';

/**
 * Writes text to a file, creating parent directories if needed.
 *
 * @param path - File path or URL.
 * @param data - Text or stream to write.
 * @param options - Optional write options.
 * @returns Promise that resolves when done.
 * @throws {Deno.errors.PermissionDenied} On permission error.
 * @throws {Error} On other I/O errors.
 * @example
 * ```ts
 * import * as text from '@dep/text';
 * await text.write('logs/app.log', 'Hello\n');
 * ```
 */
export const write = async (
  path: string | URL,
  data: string | ReadableStream<string>,
  options?: Deno.WriteFileOptions
): Promise<void> => {
  const dir = dirname(path);
  if (!(await exists(dir))) Deno.mkdir(dir, { recursive: true });
  return await Deno.writeTextFile(path, data, options);
};
