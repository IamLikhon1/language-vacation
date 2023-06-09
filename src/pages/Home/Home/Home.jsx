import Banner from "../Banner/Banner";
import ClassesSection from "../ClassesSection/ClassesSection";
import ExtraSection from "../ExtraSection/ExtraSection";
import InstructorsSection from "../InstructorsSection/InstructorsSection";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            
            {/* banner */}
            <Banner></Banner>
            {/* banner */}
            {/* ClassesSection */}
            <ClassesSection></ClassesSection>
            {/* ClassesSection */}
            {/* InstructorsSection */}
            <InstructorsSection></InstructorsSection>
            {/* InstructorsSection */}
            {/* ExtraSection */}
            <ExtraSection></ExtraSection>
            {/* ExtraSection */}
            {/* news Letter */}
            <NewsLetter></NewsLetter>
            {/* news Letter */}
            

        </div>
    );
};

export default Home;