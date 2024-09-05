import { Header } from "./components/Header";
import { SectionPresentation } from "./components/SectionPresentation";
import { SectionBg } from "./components/SectionBg";
import { SectionPhoto } from "./components/SectionPhoto";
import { ButtonFindMore } from "./components/Buttons";

function Page() {
  return(
   <div>
    <Header/>
    <SectionBg/>
    <SectionPresentation/>
    <SectionPhoto/>
    <ButtonFindMore/>
   </div>
  );
}

export default Page;