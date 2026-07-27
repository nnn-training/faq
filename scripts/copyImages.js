// MARKDOWN と同階層に置かれている画像ファイルを public 配下へコピー

import { mkdirSync, cpSync } from 'fs';

const courses = ['intro', 'others', 'spapp', 'unity', 'webapp'];

for (const course of courses) {
  mkdirSync(`public/images/${course}`, { recursive: true });
  cpSync(`MARKDOWN/${course}/images`, `public/images/${course}`,
    {
      recursive: true,
      force: true,
      filter: (src) => src.endsWith('.jpg') || src.endsWith('.png')
    });
}