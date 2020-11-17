import React from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import { logout } from "../../pages/Login/Login";
//components
// import { darkTheme } from "../theme/theme";
// import Checkbox from "../Checkbox/Checkbox";
import "./SideNav.scss"

const { ipcRenderer } = window.require("electron")

const SideNav = (props) => {
   const dispatch = useDispatch()

   const { loading, user, authenticated } = useSelector((state) => state.auth)
   const onClickHandler = (e) => {
      e.preventDefault()
      ipcRenderer.send("remove-token", "hey you")
   }
   return (
      <nav className='sideNav'>
         {!loading && authenticated && (
            <div className='sideNav__container'>
               {/* <div className='sideNav__header'>DairyShop</div> */}
               <div className='sideNav__group sideNav__group__user'>
                  <div className='sideNav__group__profile'>
                     <img
                        className='sideNav__group__profile--img'
                        src='https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&q=80'
                        alt=''
                     />
                     <div className='sideNav__group__detail'>
                        <span className='sideNav__group__detail--name'>
                           {user.firstName} {user.lastName}
                        </span>
                        <span className='sideNav__group__detail--email'>
                           {user.email}
                        </span>
                     </div>
                  </div>
               </div>
               <div className='sideNav__group'>
                  <div className='sideNav__group--header'>Manage</div>
                  <NavLink to='/dashboard' className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-dashboard'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <circle cx='12' cy='13' r='2' />
                           <line x1='13.45' y1='11.55' x2='15.5' y2='9.5' />
                           <path d='M6.4 20a9 9 0 1 1 11.2 0Z' />
                        </svg>
                        <span className='sideNav--text'>Dashboard</span>
                     </div>
                  </NavLink>
                  <NavLink to='/products' className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-basket'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <polyline points='7 10 12 4 17 10' />
                           <path d='M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8Z' />
                           <circle cx='12' cy='15' r='2' />
                        </svg>
                        <span className='sideNav--text'>Products</span>
                     </div>
                  </NavLink>
                  <div className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-shopping-cart'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <circle cx='9' cy='19' r='2' />
                           <circle cx='17' cy='19' r='2' />
                           <path d='M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2' />
                        </svg>
                        <span className='sideNav--text'>Orders</span>
                     </div>
                  </div>

                  <div className='sideNav__item'>
                     <NavLink to='/users' className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-map-2'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <line x1='18' y1='6' x2='18' y2='6.01' />
                           <path d='M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5' />
                           <polyline points='10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15' />
                           <line x1='9' y1='4' x2='9' y2='17' />
                           <line x1='15' y1='15' x2='15' y2='20' />
                        </svg>
                        <span className='sideNav--text'>Customers</span>
                     </NavLink>
                  </div>
               </div>

               <div className='sideNav__group'>
                  <div className='sideNav__group--header'>Graphs</div>
                  <NavLink to='/sales' className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-dashboard'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <circle cx='12' cy='13' r='2' />
                           <line x1='13.45' y1='11.55' x2='15.5' y2='9.5' />
                           <path d='M6.4 20a9 9 0 1 1 11.2 0Z' />
                        </svg>
                        <span className='sideNav--text'>Sales Graph</span>
                     </div>
                  </NavLink>
                  <div className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-basket'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <polyline points='7 10 12 4 17 10' />
                           <path d='M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8Z' />
                           <circle cx='12' cy='15' r='2' />
                        </svg>
                        <span className='sideNav--text'>Pie charts</span>
                     </div>
                  </div>
                  <div className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-shopping-cart'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <circle cx='9' cy='19' r='2' />
                           <circle cx='17' cy='19' r='2' />
                           <path d='M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2' />
                        </svg>
                        <span className='sideNav--text'>Line Graphs</span>
                     </div>
                  </div>

                  <div className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-map-2'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <line x1='18' y1='6' x2='18' y2='6.01' />
                           <path d='M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5' />
                           <polyline points='10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15' />
                           <line x1='9' y1='4' x2='9' y2='17' />
                           <line x1='15' y1='15' x2='15' y2='20' />
                        </svg>
                        <span className='sideNav--text'>Bubble graphs</span>
                     </div>
                  </div>
               </div>

               <div className='sideNav__group'>
                  <div className='sideNav__group--header'>Me</div>
                  <div className='sideNav__item'>
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-users'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <circle cx='9' cy='7' r='4' />
                           <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                           <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                           <path d='M21 21v-2a4 4 0 0 0 -3 -3.85' />
                        </svg>
                        <span className='sideNav--text'>Manage my profile</span>
                     </div>
                  </div>
                  <div
                     className='sideNav__item'
                     onClick={(e) => onClickHandler(e)}
                  >
                     <div className='sideNav__link'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-logout'
                           width='18'
                           height='18'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#ffffff'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
                           <path d='M7 12h14l-3 -3m0 6l3 -3' />
                        </svg>
                        <span className='sideNav--text'>Logout</span>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </nav>
   )
}
export default SideNav
