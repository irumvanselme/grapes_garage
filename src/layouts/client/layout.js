import React from 'react';
import Navbar from '../../components/navbar-sidebar/client/navbar';
import Footer from '../../components/footer/footer';

export default function ClientLayout(props) {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <props.content />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}