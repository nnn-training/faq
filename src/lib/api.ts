import fs from 'fs';
import { globSync } from 'glob';
import { join } from 'path';
import grayMatter from 'gray-matter';

const postsPrefix = 'MARKDOWN/';
const postsPath = join(process.cwd(), postsPrefix);

type PostSummary = {
  date?: string;
  title?: string;
  content?: string;
}

export type PostData = {
  date: string;
  title: string;
  path: string;
}

export const getPostBySlug = (slugArray: string[], fields: (keyof PostSummary)[] = []) => {
  const matchedSlug = slugArray.join('/')
  const actualSlug = matchedSlug.replace(/\.md$/, '')
  const filePath = join(postsPath, `${actualSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = grayMatter(fileContent)


  const items: PostSummary = {};

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

/**
 * 'MARKDOWN/'以下の全ファイルの配列を返す関数
 * 例えば、'MARKDOWN/aaa.md'と'MARKDOWN/aaa/bbb.md'がある場合、[["aaa"], ["bbb", "ccc"]]を返す
 * @returns 'MARKDOWN/'以下の全ファイルの配列
 */
export const getAllPosts = () => {
  const entries = globSync(`${postsPrefix}/**/*.md`)
  return entries
    .map((file) => file.replace(/\\/g, '/')) // 'MARKDOWN\\aaa\\bbb' -> 'MARKDOWN/aaa/bbb'
    .map((file) => file.replace(`${postsPrefix}`, '')) 
    .map((slug) => (slug as string).replace(/\.md$/, '').split('/'))
}

/**
 * コースの種類から、そのコースの全ての PostsData を返す関数
 * @param course コースの種類
 * @returns 当該コースの全ての PostsData
 */
export const getPostsData = (course: string): PostData[] => {
  const allPosts = getAllPosts();
  const postsData = allPosts
    .filter(post => post[0] === course)
    .map(post => {
      const postData = getPostBySlug(post, [
        'date',
        'title',
      ]);
      return {
        date: postData.date || '',
        title: postData.title || `${post[1]} のトラブル`,
        path: `/${post[0]}/${post[1]}`
      }
    });
  return postsData;
}
