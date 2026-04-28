import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";


const MainaLyout = ({children}) => {
    return (
        <>
           <Header></Header>
           <BreakingNews></BreakingNews>
        <Navbar></Navbar> 
        {children}
        </>
    );
};

export default MainaLyout;