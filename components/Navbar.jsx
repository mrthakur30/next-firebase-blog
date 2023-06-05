/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { UserContext } from "@/libraries/context";
import { useContext } from "react";

function Navbar() {
  const { user, username } = useContext(UserContext) ;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        { username &&  (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`${username}`}>
                <img alt="user-image" src={user?.photoURL || ""} />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
