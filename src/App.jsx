import SectionPricing from "./components/organism/section-pricing/index.tsx";
import SectionLocation from "./components/organism/section-location/index.tsx";
import UseCase from "./components/organism/usecase/index.tsx";
import ProxyApp from "./components/organism/proxy-app/index.tsx";
import ContactUs from "./components/organism/contact-us/index.tsx";
import Header from "./components/header/index.tsx";
import Hero from "./components/hero/index.tsx";
import Feature from "./components/organism/feature/index.tsx";
import Footer from "./components/footer/index.tsx";
import Container from "./components/atoms/container/index.tsx";
import AboutUs from "./components/organism/about-us/index.tsx";
// import LoginForm from "./components/Login/index.tsx";
// import SignUpForm from "./components/signUp/index.tsx";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] center">
      <Header />
      <Hero />{" "}
      <main>
        <Container>
          <Feature />
        </Container>

        <Container>
          <SectionPricing />
        </Container>

        <SectionLocation />

        <Container>
          <UseCase />
        </Container>

        <Container>
          <ProxyApp />
        </Container>

        <AboutUs />

        <Container>
          <ContactUs />
        </Container>
      </main>
      {/* <LoginForm /> */}
      {/* <SignUpForm /> */}
      <Footer />
    </div>
  );
};

export default App;
