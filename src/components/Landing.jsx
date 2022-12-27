import React from 'react';
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>The most awarded online books store</h1>
                        <h2>Find your dream book with <span className="purple">library</span></h2>
                        <Link to='#features'>
                            <button className="btn">
                                Browse Books
                            </button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={ UndrawBooks } alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
