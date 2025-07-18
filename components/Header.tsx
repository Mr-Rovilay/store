import React from "react";
import HeaderMenu from "./HeaderMenu";
import Container from "./Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm py-5 top-0 z-50">
      <Container className="flex justify-between items-center gap-7 text-lightColor dark:text-darkColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex justify-center items-center gap-1">
          <MobileMenu />
          <Logo>market store</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          {/* Add any additional header elements here, like search or cart */}
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect " />
                <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex item-center justify-center">
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>

            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-darkColor hoverEffect">
                  Sign In
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
