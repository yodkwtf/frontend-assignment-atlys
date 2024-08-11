import React from 'react';
import Button from './common/Button';
import { useAppContext } from '../context';

type AppContext = {
  setShowModal: (value: boolean) => void;
};

const CreatePost = () => {
  const { setShowModal } = useAppContext() as AppContext;

  return (
    <div className="bg-[#27292d] rounded-lg p-6 relative z-10 flex flex-col gap-4 border-2 border-[#35373b]">
      <h4 className="text-[#c5c7ca] text-lg font-medium text-left">
        Create post
      </h4>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-4 bg-[#191920] p-4 rounded-lg">
          <span className="h-12 w-12 rounded-full bg-[#27292d] grid place-items-center">
            💬
          </span>
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="bg-transparent flex-1 border-none rounded-lg text-[#7f8084] outline-none"
          />
        </div>
        <Button
          classes={['ml-auto', 'px-8']}
          type="submit"
          buttonText="Post"
          handleClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        />
      </form>
    </div>
  );
};

export default CreatePost;
