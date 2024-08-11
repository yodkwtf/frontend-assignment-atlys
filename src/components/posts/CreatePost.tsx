import Button from '../common/Button';
import useAppContext from '../../hooks/useAppContext';

const CreatePost = () => {
  const { openModal } = useAppContext();

  return (
    <div className="bg-custom-dark rounded-lg p-6 relative z-10 flex flex-col gap-4 border-2 border-custom-b">
      <h4 className="text-custom-primary text-lg font-medium text-left">
        Create post
      </h4>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-4 bg-custom-darker p-4 rounded-lg">
          <span className="h-12 w-12 rounded-full bg-custom-dark grid place-items-center">
            💬
          </span>
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="bg-transparent flex-1 border-none rounded-lg text-custom-secondary outline-none"
          />
        </div>
        <Button
          classes={['ml-auto', 'px-8']}
          buttonText="Post"
          handleClick={openModal}
        />
      </form>
    </div>
  );
};

export default CreatePost;
