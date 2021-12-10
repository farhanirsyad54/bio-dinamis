import { Card, CloseButton, Button, Col } from "react-bootstrap";
import "./Kartu.css";

const Kartu = (props) => {
  return (
    <>
      <Col>
        <div className="background">
          <CloseButton onClick={props.onClose} />
          {props.profile.map((listProfile, index) => {
            return (
              <Card className="kartu" key={index}>
                <div className="upper-container">
                  <img className="image-container" src={listProfile.ava} />
                </div>
                <div className="lower-container">
                  <h1>{listProfile.name} </h1>
                  <h4>{listProfile.job} </h4>
                  <h4>{listProfile.phone} </h4>
                  <h4>{listProfile.email} </h4>
                </div>
              </Card>
            );
          })}
        </div>
      </Col>
    </>
  );
};

export default Kartu;
