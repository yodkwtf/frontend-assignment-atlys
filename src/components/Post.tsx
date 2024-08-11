import styled from 'styled-components';
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

const Post = ({
  author,
  authorImg,
  time,
  emoji,
  isEdited,
  content,
  commentCount,
}: PostProps) => {
  return (
    <Wrapper>
      <div className="post-header">
        <div className="author">
          <img src={authorImg} alt={author} />
          <div>
            <h4>{author}</h4>
            <p>
              {time} {isEdited && ' • Edited'}
            </p>
          </div>
        </div>

        <span>...</span>
      </div>

      <div className="post-content">
        <span>{emoji}</span>
        <p>{content}</p>
      </div>

      <div className="post-footer">
        <FaRegCommentAlt />
        <button>{commentCount} comments</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #27292d;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  z-index: 1; /* Ensure this is above the ::before pseudo-element */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(to bottom right, #969696, #343434);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: 0; /* Ensure this is behind the content */
    pointer-events: none; /* Prevent it from intercepting clicks */
  }

  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .author {
      display: flex;
      gap: 1rem;

      img {
        height: 2.75rem;
        width: 2.75rem;
        border-radius: 50%;
      }

      h4 {
        color: #c5c7ca;
        font-size: 16px;
        font-weight: 500;
      }

      p {
        color: #7f8084;
        font-size: 14px;
      }
    }
  }

  .post-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #191920;
    padding: 1rem;
    border-radius: 0.5rem;

    span {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      background: #27292d;
      display: grid;
      place-items: center;
    }

    p {
      background: transparent;
      border: none;
      border-radius: 0.5rem;
      color: #7f8084;
      flex: 1;
      font-size: 16px;
    }
  }

  .post-footer {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    color: #7f8084;

    svg {
      margin-top: 0.25rem;
    }
  }
`;

export default Post;
