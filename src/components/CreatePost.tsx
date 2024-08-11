import styled from 'styled-components';
import Button from './common/Button';
import { useAppContext } from '../context';

type AppContext = {
  setShowModal: (value: boolean) => void;
};

const CreatePost = () => {
  const { setShowModal } = useAppContext() as AppContext;

  return (
    <Wrapper>
      <h4>Create post</h4>
      <form>
        <div className="post-input">
          <span>💬</span>
          <input type="text" placeholder="How are you feeling today?" />
        </div>
        <Button
          type="submit"
          buttonText="Post"
          handleClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        />
      </form>
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

  h4 {
    color: #c5c7ca;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }

  .post-input {
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

    input {
      background: transparent;
      border: none;
      border-radius: 0.5rem;
      color: #7f8084;
      flex: 1;
      font-family: inherit;
      font-size: 16px;
      resize: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    width: auto;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    font-size: 16px;
    margin-left: auto;
  }
`;

export default CreatePost;
