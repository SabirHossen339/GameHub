import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <navbar>
        <Navbar></Navbar>
      </navbar>

      <main>
        <section className="banner"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;