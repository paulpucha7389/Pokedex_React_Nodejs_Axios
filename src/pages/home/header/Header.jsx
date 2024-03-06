import React from 'react'
import css from './header.module.scss'
import * as FaIcons from "react-icons/fa";
import logo from '../../../assets/pokeball-logo-DC23868CA1-seeklogo.com.png'

export default function Header({ obtenerSearch }) {
  return (
    <nav className={css.header}>
      <div className={css.div_header}>
        <div className={css.div_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={css.div_search}>
          <div>
            <FaIcons.FaSearch />
          </div>
          <input
            type="search"
            onChange={(e) => obtenerSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}