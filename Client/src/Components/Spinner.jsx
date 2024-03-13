// import Spinner from 'react-bootstrap/Spinner';

// function Spinner() {
//   return (
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//   );
// }

// export default Spinner;
import React from 'react';

function Spinner(props) {
    return (
        <div>
            <div className="spinner-border" id='spin-1' role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    
    );
}

export default Spinner;