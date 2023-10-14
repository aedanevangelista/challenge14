import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
function App() {
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center items-center bg-[#e8ecf4] font-Karla">
        <Header />
        <BodyContainer />
      </div>
    </>
  );
}

export default App;
