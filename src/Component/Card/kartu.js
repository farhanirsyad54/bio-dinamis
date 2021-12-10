import { Card, CloseButton, Button, Col } from "react-bootstrap";
import "./Kartu.css";

const Kartu = (props) => {
  return (
    <>
      <Col>
        <div className="background">
          <CloseButton onClick={props.onClose} />
          {props.data.map((listData, index) => {
            return (
              <Card className="kartu" key={index}>
                <div className="upper-container">
                  <img className="image-container" src={listData.ava} />
                </div>
                <div className="lower-container">
                  <h1>{listData.nama} </h1>
                  <h4>{listData.job} </h4>
                  <h4>{listData.phone} </h4>
                  <h4>{listData.email} </h4>
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
