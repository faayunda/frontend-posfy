import React from 'react';
import Hero from './../../assets/heroLogin.png';
import './sidebar.css';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
    <ul>
        <li>
            <a href="/barang" className='textsidebar'>
                Dashboard
            </a>
        </li>
        <li>
            <a href="/barangkeluar" className='textsidebar'>
                User
            </a>
        </li>
        <li>
            <a href="/barangkeluar" className='textsidebar'>
                Barang
            </a>
        </li>
        <li>
            <a href="/barangkeluar" className='textsidebar'>
                Barang Masuk
            </a>
        </li>
        <li>
            <a href="/barangkeluar" className='textsidebar'>
                Supplier
            </a>
        </li>
        <li>
            <a href="/barangkeluar" className='textsidebar'>
                Transaksi
            </a>
        </li>
        <li>
            <a href="/barangkeluar" className='textsidebar'>
                Laporan
            </a>
        </li>
    </ul>
</div>
      

  )
}

export default Sidebar;
