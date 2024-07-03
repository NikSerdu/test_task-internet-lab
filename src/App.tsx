import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import HowItWork from "./components/HowItWork/HowItWork";
import QA from "./components/QA/QA";
import Statistics from "./components/Statistics/Statistics";
import Survey from "./components/Survey/Survey";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <HowItWork />
      <Statistics />
      <Testimonials />
      <QA />
      <Survey />
      <Form />
    </div>
  );
}

export default App;
