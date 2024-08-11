import author1 from '../assets/author-1.png';
import author2 from '../assets/author-2.png';

interface Post {
  id: number;
  author: string;
  authorImg: string;
  time: string;
  emoji: string;
  isEdited: boolean;
  content: string;
  commentCount: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: 'Theresa Webb',
    authorImg: author1,
    time: '5mins ago',
    emoji: '👋',
    isEdited: false,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentCount: 24,
  },
  {
    id: 2,
    author: 'Marvin McKinney',
    authorImg: author2,
    time: '8mins ago',
    emoji: '😞',
    isEdited: true,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentCount: 12,
  },
];

export default posts;
