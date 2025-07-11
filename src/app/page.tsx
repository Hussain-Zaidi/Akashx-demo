import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div style={{padding: "20px"}}>
      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0", display:'flex',gap:'30px'}}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/testhome" style={{ color: "#1a73e8", textDecoration: "none",fontSize:'25px'}}>
            Home
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/testabout" style={{ color: "#1a73e8", textDecoration: "none",fontSize:'25px'}}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
