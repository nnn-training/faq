import IndexLayout from '@/components/IndexLayout';
import { getPostsData } from '@/lib/api';

const course = "webapp";

type PostData = {
  date: string;
  title: string;
  path: string;
}

export default function IndexPage() {
  const posts: PostData[] = getPostsData(course);

  return <>
    <IndexLayout course={course} posts={posts} />
  </>
};
