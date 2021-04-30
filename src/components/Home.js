import React from 'react';
import Container from '@material-ui/core/Container';
import './Home.css';
import { useLocation } from 'react-router-dom';

function Home() {

    const search = useLocation().search;
    var x = new URLSearchParams(search).get('x');
    var y = new URLSearchParams(search).get('y');

    x=((x*360)/890)-180;
    y=85-((y*170)/500);
    console.log(x+"     "+y);

    const submitHandler = () => {

    }

    return (
        <div className="Home">
            <Container className="Container">
                <form onSubmit={submitHandler} className="Form">
                    <input type="image" src="https://ik.imagekit.io/yssuhas/YSWeather/world_map_qFxLtf-cg.jpg" alt="Submit" className="Image" height="500" width="890"></input>
                </form>
            </Container>
        </div>
    )
}

export default Home;