import React from 'react'
import style from './navbar.module.sass'
import { NavLink, Route } from 'react-router-dom'
import BtnsEntries from './btns/BtnsNewEntries'
import BtnsEntriesArchive from './btns/BtnsEntriesArchive'

const Navbar = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <p>English <span>Diary</span></p>
      </div>
      <div className={style.wrapperContents}>
        <div className={style.mainCnt}>
          <ul>
            <li><NavLink to="/diary/new-entry" activeClassName={style.active}>
              <i className="fa fa-file-archive"></i>
              <span>New entry</span>
              </NavLink>
            </li>
            <li><NavLink to="/diary/entries-archive" activeClassName={style.active}>
              <i className="fa fa-file-archive"></i>
              <span>Entries archive</span>
              </NavLink>
            </li>
            <li><NavLink to="/diary/lexicon" activeClassName={style.active}>
              <i className="fa fa-file-word"></i>
              <span>New words & phrases</span>
              </NavLink>
            </li>
            <li><NavLink to="/diary/sources" activeClassName={style.active}>
              <i className="fa fa-link"></i>
              <span>Knowledge sources</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.buttonsGroup}>
          <Route path="/diary/new-entry"
            render={() => {
              return <BtnsEntries clearTextarea={props.clearTextarea} saveEntry={props.saveEntry} />
            }}
          />
          <Route path="/diary/entries-archive"
            render={() => {
              return <BtnsEntriesArchive deleteEntry={props.deleteEntry} selectedEntryId={props.selectedEntryId} />
            }}deleteEntry
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar