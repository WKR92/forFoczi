import { useState, useEffect } from 'react';

const Nav = () => {
    const [currentTab, setCurrentTab] = useState('produkty');

    useEffect(() => {
        const bg = document.querySelector('.bg');
        if (currentTab === 'produkty') {
            bg.style.right = "66%";
            bg.style.left = "0";
        } else if (currentTab === 'przepisy') {
            bg.style.right = "33%";
            bg.style.left = "33%";
        } else {
            bg.style.right = "0";
            bg.style.left = "66%";
        }
    }, [currentTab])
    
    return (
        <div className="nav-outer">
            <div className="nav-left active">
                <div className="bg"></div>
                <div className="produkty" onClick={() => setCurrentTab('produkty')}>Produkty</div>
                <div className="przepisy" onClick={() => setCurrentTab('przepisy')}>Przepisy</div>
                <div className="dodatki" onClick={() => setCurrentTab('dodatki')}>Dodatki</div>
            </div>
            <div className="nav-right">
                <div>Koszyk</div>
            </div>
        </div>
    )
}
export default Nav