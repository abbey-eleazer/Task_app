import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import HeroImg1 from "@/assets/hero-img-1.png";
import HeroImg2 from "@/assets/hero-img-2.png";
import HeroImg3 from "@/assets/hero-img-3.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="home-page-container relative">
        {/* HOME PAGE NAV  */}
        <nav className="fixed top-0 py-2 w-4/7 mx-52 bg-white/80 flex items-center justify-between ">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="space-x-4">
            <Link to={"/login"}>
              <Button
                variant="secondary"
                size="default"
                className="cursor-pointer"
              >
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button
                variant="default"
                size="default"
                className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-4 text-sm rounded-lg "
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>

        {/* HOME PAGE CONTENT  */}

        <header className="home-page-header">
          <h1 className="text-6xl font-bold mb-4 w-3/4">
            Every app. Every team. Unlimited AI Agents.
          </h1>
          <p className="text-lg mb-6 w-1/2">
            Your ultimate task management solution. Organize, prioritize, and
            conquer your to-do list with ease. Sign up now to get started!
          </p>
          <Link to={"/signup"}>
            <Button
              variant="default"
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer py-7 px-6 text-xl rounded-2xl border-4 hover:border-4 hover:border-blue-400"
            >
              Get Started. It's FREE!
            </Button>
          </Link>

          <div className="mt-8">
            <img src={HeroImg1} alt="hero-img-1" />
          </div>
        </header>
        <main>
          <section className="mt-32">
            <div className="text-center w-1/3 mx-auto">
              <h2 className="text-5xl font-bold mb-4 ">
                Everything you need in one place.
              </h2>
              <p>
                Our app integrates with all your favorite tools, so you can
                manage everything from one dashboard.
              </p>
            </div>

            <div className="flex items-center justify-center mt-8">
              <img src={HeroImg2} alt="hero-img-2" />
            </div>
          </section>

          <section className="mt-32 mb-24">
            <div className="text-center w-1/3 mx-auto">
              <h2 className="text-5xl font-bold mb-4 ">
                Deliver projects on time, every time
              </h2>
              <p>
                Get your team, department, and company running smoothly with the
                industry's best project management solution
              </p>
            </div>

            <div className="flex items-center justify-center mt-8">
              <img src={HeroImg3} alt="hero-img-2" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
