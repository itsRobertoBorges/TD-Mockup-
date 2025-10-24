import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className="td-navbar" aria-label="Main navigation">
                <div className="td-navbar__left">
                    <div className="td-navbar__brand" aria-hidden="true">TD Mockup</div>
                    <ul className="td-navbar__links">
                        <li><a href="#">Personal</a></li>
                        <li><a href="#">Small Business</a></li>
                        <li><a href="#">Investing</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="td-navbar__actions">
                    <button className="td-btn td-btn--ghost">Sign in</button>
                    <button className="td-btn td-btn--primary">Open account</button>
                </div>
            </nav>

            {/* spacer keeps page content from sliding under the fixed navbar */}
            <div className="td-navbar__spacer" aria-hidden="true" />

            <style>{`
                :root {
                    --td-navbar-height: 64px;
                }

                .td-navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 98%;
                    height: var(--td-navbar-height);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    padding: 12px 20px;
                    background: #007a3d; /* green navbar */
                    color: #ffffff;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.12);
                    z-index: 1000;
                }

                .td-navbar__spacer {
                    height: var(--td-navbar-height);
                    width: 100%;
                    flex-shrink: 0;
                }

                .td-navbar__left {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .td-navbar__brand {
                    font-weight: 700;
                    font-size: 1.125rem;
                    letter-spacing: 0.4px;
                }

                .td-navbar__links {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .td-navbar__links a {
                    color: #ffffff;
                    text-decoration: none;
                    padding: 8px 10px;
                    border-radius: 6px;
                    font-size: 0.95rem;
                }

                .td-navbar__links a:hover,
                .td-navbar__links a:focus {
                    background: rgba(255,255,255,0.08);
                    outline: none;
                }

                .td-navbar__actions {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .td-btn {
                    font-size: 0.95rem;
                    padding: 8px 12px;
                    border-radius: 6px;
                    cursor: pointer;
                    border: 0;
                }

                .td-btn:focus {
                    outline: 3px solid rgba(255,255,255,0.18);
                    outline-offset: 2px;
                }

                .td-btn--ghost {
                    background: transparent;
                    color: #ffffff;
                    border: 1px solid rgba(255,255,255,0.18);
                }

                .td-btn--primary {
                    background: #ffffff;
                    color: #007a3d;
                    font-weight: 600;
                }

                /* responsive: hide links on narrow screens */
                @media (max-width: 720px) {
                    :root { --td-navbar-height: 56px; }
                    .td-navbar__links { display: none; }
                    .td-navbar__brand { font-size: 1rem; }
                    .td-btn { padding: 7px 10px; font-size: 0.9rem; }
                }
            `}</style>
        </>
    );
}