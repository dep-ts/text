/**
 * Reads a text file and returns its content.
 *
 * @param path - File path or URL.
 * @param options - Optional read options (e.g. signal).
 * @returns File content as string.
 * @throws {Deno нот.errors.NotFound} If file doesn't exist.
 * @throws {Deno.errors.PermissionDenied} If read denied.
 * @throws {Error} On other I/O errors.
 * @example
 * ```ts
 * import * as text from '@dep/text';
 * const data = await text.read('config.json');
 * ```
 */
export const read = async (
  path: string | URL,
  options?: Deno.ReadFileOptions
): Promise<string> => await Deno.readTextFile(path, options);
