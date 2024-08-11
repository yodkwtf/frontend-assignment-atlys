import { Auth, Logo } from '../components';

const AuthPage: React.FC = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-custom-darkest">
      <section>
        <Logo />
        <Auth />
      </section>
    </div>
  );
};

export default AuthPage;
