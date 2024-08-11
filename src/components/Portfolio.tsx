const Portfolio: React.FC = () => {
  return (
    <div className="fixed flex flex-col gap-y-2 bottom-4 right-4">
      <a
        href="https://yodkwtf.com"
        target="_blank"
        rel="noreferrer"
        className="text-white bg-green-600 hover:bg-green-700 py-2 px-8 rounded-sm shadow-lg transition-colors duration-200"
      >
        My Portfolio
      </a>
      <a
        href="https://github.com/yodkwtf"
        target="_blank"
        rel="noreferrer"
        className="text-white bg-gray-600 hover:bg-gray-700 py-2 px-8 rounded-sm shadow-lg transition-colors duration-200"
      >
        My Github
      </a>
      <a
        href="https://github.com/yodkwtf/frontend-assignment-atlys"
        target="_blank"
        rel="noreferrer"
        className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-8 rounded-sm shadow-lg transition-colors duration-200"
      >
        Source Code
      </a>
    </div>
  );
};

export default Portfolio;
