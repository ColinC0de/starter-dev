import NAICSData from '../data/naics.json';


import {
  ClassificationContainer,
  Question,
  ClassificationCard
} from './ClassificationStyles';


const Classification = (props) => {
  return (
    <>
      <ClassificationContainer>
        <Question>What's your Main Sector?</Question>

        {NAICSData.sectors.map((sector, index) => {
          return (


            <ClassificationCard to="/signup" key={sector.code} value={index} id={sector.code}>
              <h3 value={sector.code}>{sector.name}</h3>
            </ClassificationCard>


          )
        })}

      </ClassificationContainer>
    </>
  );
};

export default Classification;