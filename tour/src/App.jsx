import "./App.css";
import {
  Banner,
  Footer,
  Header,
  ImageGrid,
  Navbar,
  Seaction,
  Service,
  TopBanner,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TopBanner />
      <Service />
      <Seaction header={"Top Destinations"} />
      <Seaction header={"Top Hotel"} />
      <ImageGrid />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
