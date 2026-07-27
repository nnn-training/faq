import IndexLayout from '@/components/IndexLayout';
import { getPostsData } from '@/lib/api';
import type { PostData } from '@/lib/api';

const course = "others";

export default function IndexPage() {
  const posts: PostData[] = getPostsData(course);

  return <>
    <IndexLayout course={course} posts={posts} />
  </>
};