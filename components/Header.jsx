import React, { useState, useEffect } from 'react';
import { GiDiamonds } from 'react-icons/gi';
import Link from 'next/link';
import { getCategories } from '../services';


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer font-bold text-4xl text-white">
                    <a style={{ display: 'flex', alignItems: 'center', color:"#EE5B25", fontFamily: 'Cormorant' }}>
          <GiDiamonds size="3rem" /> <span style={{ fontWeight: 'bold', fontSize: '2rem' }}> &nbsp; Christine Graybosch</span>
        </a>
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                    <Link href="https://christinegraybosch.com/">
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            Portfolio
                        </span>
                    </Link>


            </div>
        </div>
    </div>
  );
};

export default Header;