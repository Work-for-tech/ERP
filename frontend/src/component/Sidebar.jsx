import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {

    useEffect(() => {
        import('../assets/js/bootstrap.js');
        import('../assets/js/app.js');

    }, [])

    return (
        <div>
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active">
                    <div className="sidebar-header position-relative">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <h2>ERP</h2>
                            </div>
                            <div className="theme-toggle d-flex gap-2  align-items-center mt-2">
                                <svg
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--system-uicons"
                                    width={20}
                                    height={20}
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 21 21"
                                >
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                                            opacity=".3"
                                        />
                                        <g transform="translate(-210 -1)">
                                            <path d="M220.5 2.5v2m6.5.5l-1.5 1.5" />
                                            <circle cx="220.5" cy="11.5" r={4} />
                                            <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                                        </g>
                                    </g>
                                </svg>
                                <div className="form-check form-switch fs-6">
                                    <input
                                        className="form-check-input  me-0"
                                        type="checkbox"
                                        id="toggle-dark"
                                    />
                                    <label className="form-check-label" />
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--mdi"
                                    width={20}
                                    height={20}
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="sidebar-toggler x">
                                <a href="#" className="sidebar-hide d-xl-none d-block">
                                    <i className="bi bi-x bi-middle" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li className="sidebar-title">Menu</li>
                            <li className="sidebar-item active ">
                                {/* <a href="index.html" className="sidebar-link">
                                    <i className="bi bi-grid-fill" />
                                    <span>Dashboard</span>
                                </a> */}
                                <Link to="/" className="sidebar-link">
                                    <i className="bi bi-grid-fill" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-person-fill" />
                                    <span>Persons</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <Link to="/client">Add clients</Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/clientlist">List clients</Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/client">Add vendors</Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/client">List vendors</Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/employee">Add Employees</Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/employeelist">List employees</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-title">Project Sections</li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-collection-fill" />
                                    <span>Quotations</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="extra-component-avatar.html">Add Quotations</a>
                                    </li>
                                    {/* <li className="submenu-item ">
                                        <a href="extra-component-sweetalert.html">Sweet Alert</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="extra-component-toastify.html">Toastify</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="extra-component-rating.html">Rating</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="extra-component-divider.html">Divider</a>
                                    </li> */}
                                </ul>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-postcard-fill" />
                                    <span>Projects</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="layout-default.html">Add projects</a>
                                    </li>
                                    {/* <li className="submenu-item ">
                                        <a href="layout-vertical-1-column.html">1 Column</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="layout-vertical-navbar.html">Vertical Navbar</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="layout-rtl.html">RTL Layout</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="layout-horizontal.html">Horizontal Menu</a>
                                    </li> */}
                                </ul>
                            </li>
                            <li className="sidebar-title">Virtual elements</li>
                            <li className="sidebar-item">
                                <Link to='/add-machine' className='sidebar-link'>
                                    <i className="bi bi-cpu"/>
                                    <span>Add & list machines</span>
                                </Link>
                            </li>
                            <li className="sidebar-title">Machine & maintenance</li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-wrench-adjustable-circle" />
                                    <span>Machines</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <Link to="add-models">Add models</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-pen-fill" />
                                    <span>Form Editor</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="form-editor-quill.html">Quill</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="form-editor-ckeditor.html">CKEditor</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="form-editor-summernote.html">Summernote</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="form-editor-tinymce.html">TinyMCE</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item  ">
                                <a href="table.html" className="sidebar-link">
                                    <i className="bi bi-grid-1x2-fill" />
                                    <span>Table</span>
                                </a>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-file-earmark-spreadsheet-fill" />
                                    <span>Datatables</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="table-datatable.html">Datatable</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="table-datatable-jquery.html">Datatable (jQuery)</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-title">Extra UI</li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-pentagon-fill" />
                                    <span>Widgets</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="ui-widgets-chatbox.html">Chatbox</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="ui-widgets-pricing.html">Pricing</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="ui-widgets-todolist.html">To-do List</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-egg-fill" />
                                    <span>Icons</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="ui-icons-bootstrap-icons.html">Bootstrap Icons </a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="ui-icons-fontawesome.html">Fontawesome</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="ui-icons-dripicons.html">Dripicons</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-bar-chart-fill" />
                                    <span>Charts</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="ui-chart-chartjs.html">ChartJS</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="ui-chart-apexcharts.html">Apexcharts</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item  ">
                                <a href="ui-file-uploader.html" className="sidebar-link">
                                    <i className="bi bi-cloud-arrow-up-fill" />
                                    <span>File Uploader</span>
                                </a>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-map-fill" />
                                    <span>Maps</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="ui-map-google-map.html">Google Map</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="ui-map-jsvectormap.html">JS Vector Map</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-title">Pages</li>
                            <li className="sidebar-item  ">
                                <a href="application-email.html" className="sidebar-link">
                                    <i className="bi bi-envelope-fill" />
                                    <span>Email Application</span>
                                </a>
                            </li>
                            <li className="sidebar-item  ">
                                <a href="application-chat.html" className="sidebar-link">
                                    <i className="bi bi-chat-dots-fill" />
                                    <span>Chat Application</span>
                                </a>
                            </li>
                            <li className="sidebar-item  ">
                                <a href="application-gallery.html" className="sidebar-link">
                                    <i className="bi bi-image-fill" />
                                    <span>Photo Gallery</span>
                                </a>
                            </li>
                            <li className="sidebar-item  ">
                                <a href="application-checkout.html" className="sidebar-link">
                                    <i className="bi bi-basket-fill" />
                                    <span>Checkout Page</span>
                                </a>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-person-badge-fill" />
                                    <span>Authentication</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="auth-login.html">Login</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="auth-register.html">Register</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="auth-forgot-password.html">Forgot Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <i className="bi bi-x-octagon-fill" />
                                    <span>Errors</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="error-403.html">403</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="error-404.html">404</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="error-500.html">500</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-title">Raise Support</li>
                            <li className="sidebar-item  ">
                                <a
                                    href="https://zuramai.github.io/mazer/docs"
                                    className="sidebar-link"
                                >
                                    <i className="bi bi-life-preserver" />
                                    <span>Documentation</span>
                                </a>
                            </li>
                            <li className="sidebar-item  ">
                                <a
                                    href="https://github.com/zuramai/mazer/blob/main/CONTRIBUTING.md"
                                    className="sidebar-link"
                                >
                                    <i className="bi bi-puzzle" />
                                    <span>Contribute</span>
                                </a>
                            </li>
                            <li className="sidebar-item  ">
                                <a
                                    href="https://github.com/zuramai/mazer#donation"
                                    className="sidebar-link"
                                >
                                    <i className="bi bi-cash" />
                                    <span>Donate</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
