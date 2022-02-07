import React, {useState} from 'react'
import { Star, ClickedStar } from './rating';

const Rating = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (event: React.MouseEvent<EventTarget>, index: number): void => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    setClicked(clickStates);
  };

  return (
    <>
      {clicked[0] ? Star.clicked : <Star onClick={(event) => handleStarClick(event, 0)} />}
      {clicked[0] ? <ClickedStar /> : null}

      {clicked[1] ? Star.clicked : <Star onClick={(event) => handleStarClick(event, 1)} />}
      {clicked[1] ? <ClickedStar /> : null}

      {clicked[2] ? Star.clicked : <Star onClick={(event) => handleStarClick(event, 2)} />}
      {clicked[2] ? <ClickedStar /> : null}

      {clicked[3] ? Star.clicked : <Star onClick={(event) => handleStarClick(event, 3)} />}
      {clicked[3] ? <ClickedStar /> : null}

      {clicked[4] ? Star.clicked : <Star onClick={(event) => handleStarClick(event, 4)} />}
      {clicked[4] ? <ClickedStar /> : null}
    </>
  )
}

export default Rating