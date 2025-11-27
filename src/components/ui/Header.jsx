import React from 'react';
import { Link } from 'react-router';
import { Button } from './button';

const Header = () => {
    return (
        <div>
        <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-20" alt="" />
        </Link>
         <Button variant="outline">Login</Button>
         </nav>
        </div>
    );
};

export default Header;