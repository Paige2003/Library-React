import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getByTitle } from '@testing-library/react';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Chose <span className='purple'>Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                        icon= {<FontAwesomeIcon icon="bolt" />}
                        title="Easy and Quick"
                        para="Get access to the book you purchesed online instantly."
                        />
                        <Highlight 
                        icon= {<FontAwesomeIcon icon="book-open" />}
                        title="10,000+ Books"
                        para=" Library has books in all of your favourite catergories."
                        /><Highlight 
                        icon= {<FontAwesomeIcon icon="tags" />}
                        title="Affordable"
                        para="Get your hands on books for as little as $10."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;

