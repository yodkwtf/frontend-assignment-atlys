import { Auth, Logo } from '../components';

const AuthPage: React.FC = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-[#131319]">
      <div>
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        <Auth />
      </div>
    </div>
  );
};

export default AuthPage;
