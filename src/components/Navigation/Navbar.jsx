import CommonButton from "../common/Buttons/CommonButton"
import Img from '../common/Image/Img';
import NavMenu from "./NavMenu"

const NavBar = () => {

const navMenuItems = [
    {
        path:"/home",
        label:"Home"
    },
    {
        path:"/aboutus",
        label:"About us"
    },
    {
        path:"/contact",
        label:"Contact"
    }
];

const onCicklViewMore = () => {
    console.log("clicked view more");
}
    return (<>
    <header className="navbar">
        <Img path={'logo192.png'} altText={'navbar logo'} ImgClass={'logo'}  />
        <NavMenu menuItems={navMenuItems} />
        <CommonButton btnValue={'cta'} buttonlabel={'View More'} onBtnClick={onCicklViewMore} buttonClass={'cta'}  />
    </header>
    
    </>)

}

export default NavBar;