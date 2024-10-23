import InnerContainer from "./InnerContainer";
import SubHeader from "./SubHeader";

const MainContainer = () => {
  return (
    <div className="flex flex-col bg-slate-100 w-full mt-1">
        <SubHeader />
        <InnerContainer />
    </div>
  )
}

export default MainContainer;