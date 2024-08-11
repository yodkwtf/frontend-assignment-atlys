import logo from '../assets/Logo.png';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center mb-12">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
