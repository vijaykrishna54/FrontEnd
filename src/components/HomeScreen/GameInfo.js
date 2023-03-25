import {common} from './common';

export const GameInfo = () => {
    return (
        <div class="container">
        <div class="game-info">
            <div class="game-text">
                <h3>Golf Course</h3>
                <p>A golf course consists of either 9 or 18 holes, each with a teeing ground or "tee box" that is set off by two markers showing the bounds of the legal tee area, fairway, rough and other hazards, and the putting green surrounded by the fringe with the pin (normally a flagstick) and cup. </p>
                <a href="#">Read More >></a>
            </div>
            <div class="game-img">
                <img src="/images/golf.jpg" alt="golf-course"/>
            </div>
           
        </div> 
        
        <div class="game-info">
            <div class="game-img">
                <img src="/images/tennis-ball.jpg"  alt="tennis ball"/>
            </div>
            <div class="game-text">
                <h3>Tennis Course</h3>
                <p>Tennis is a racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court.</p>
                <a href="#">Read More >></a>
            </div>
            
            </div>
        
        <div class="game-info">
            <div class="game-text">
                <h3>Badminton Course</h3>
                <p>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court.</p>
                <a href="#">Read More >></a>
            </div>
            <div class="game-img">
                <img src="/images/badminton.jpg" alt="badminton" />
            </div>
        </div>
       
    </div>
    );
};