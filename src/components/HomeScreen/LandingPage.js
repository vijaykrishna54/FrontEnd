import React from 'react';
import {Footer} from './Footer';
import {ClubInfo} from './ClubInfo';
import {Members} from './Members';
import {GameInfo} from './GameInfo';
import {HeroImage} from './HeroImage';
import {TopBar} from './TopBar';

const LandingPage = () => {
    return (
        <div>
            <TopBar />
            <HeroImage />
            <GameInfo />
            <Members />
            <ClubInfo />
            <Footer />
        </div>
    );
}
export default LandingPage;
