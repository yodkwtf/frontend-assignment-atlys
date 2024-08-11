import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';

interface PostProps {
  author: string;
  authorImg: string;
  time: string;
  emoji: string;
  isEdited: boolean;
  content: string;
  commentCount: number;
}

const Post: React.FC<PostProps> = ({
  author,
  authorImg,
  time,
  emoji,
  isEdited,
  content,
  commentCount,
}) => {
  return (
    <div className="bg-[#27292d] rounded-lg p-6 relative z-10 flex flex-col gap-4 border-2 border-[#35373b]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={authorImg}
            alt={author}
            className="h-11 w-11 rounded-full"
          />
          <div>
            <h4 className="text-[#c5c7ca] text-base font-medium">{author}</h4>
            <p className="text-sm text-[#7f8084]">
              {time} {isEdited && ' • Edited'}
            </p>
          </div>
        </div>
        <span>...</span>
      </div>
      <div className="flex gap-4 bg-[#191920] p-4 rounded-lg">
        <span className="h-12 w-12 rounded-full bg-[#27292d] grid place-items-center">
          {emoji}
        </span>
        <p className="flex-1 bg-transparent border-none rounded-lg text-base text-[#7f8084]">
          {content}
        </p>
      </div>
      <div className="flex items-center gap-2 text-[#7f8084]">
        <FaRegCommentAlt />
        <button>{commentCount} comments</button>
      </div>
    </div>
  );
};

export default Post;
