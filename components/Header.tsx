import React from "react";
import HeaderMenu from "./HeaderMenu";
import Container from "./Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";

const Header = async () => {
  const user =  await currentUser()
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm py-5">
      <Container className="flex justify-between items-center gap-7 text-lightColor dark:text-darkColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex justify-center items-center">
        <MobileMenu/>
          <Logo>market store</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          {/* Add any additional header elements here, like search or cart */}
          <SearchBar/>
         <CartIcon/>
         {
          !user && ( <SignInButton mode="modal">
            <button className="text-sm font-semibold hover:text-darkColor hoverEffect">Sign In</button>
          </SignInButton>)
         }
        </div>
      </Container>
    </header>
  );
};

export default Header;
