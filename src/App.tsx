import React from 'react';
import Navbar from './components/Navbar';
import Header from './Pages/Header';
import Overview from './Pages/Overview';
import ParticlesBackground from './typescript/ParticlesBackground';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <ParticlesBackground />
            <Navbar />
            <main>
                <section id="header">
                    <Header />
                </section>
                <section id="overview">
                    <Overview />
                </section>
            </main>
        </div>
    );
}

export default App;