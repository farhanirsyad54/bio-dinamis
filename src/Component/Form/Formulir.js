import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import NavComponent from "./NavComponent";
import Kartu from "../Card/kartu";

function Formulir() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ava, setAva] = useState("");
  const [profile, setProfile] = useState([]);
  const [openModal, setOpen] = useState(false);

  const handleReset = (event) => {
    setProfile([]);
    setOpen(false);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleJob = (event) => {
    setJob(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const avahandle = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setAva(src);
    }
  };
  const handleAva = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setAva({
        ...ava,
        [event.target.name]: src,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    setProfile([...profile, { id: profile.length + 1, name, job, phone, email, ava }]);
  };

  const closeHandle = (event) => {
    setOpen(false);
  };

  const handlePreview = (event) => {
    setOpen(true);
  };

  return (
    <>
      {openModal && <Kartu onClose={closeHandle} profile={profile} name={name} job={job} phone={phone} email={email} ava={ava} />}
      <NavComponent />
      <div class="container mt-4">
        <Row>
          <Col>
            <h4>Isikan Data Diri Anda!</h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" onChange={handleName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" name="position" onChange={handleJob} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" onChange={handlePhone} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" name="email" onChange={handleEmail} />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" onChange={avahandle} onUpload={handleAva} />
              </Form.Group>
              <Button variant="primary" size="sm" type="submit">
                Submit
              </Button>
            </Form>
            <Col>
              <Button className="mt-2" size="sm" variant="success" onClick={handlePreview}>
                Preview
              </Button>
            </Col>
            <Col>
              <Button className="mt-2" size="sm" variant="danger" onClick={handleReset}>
                Reset
              </Button>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Formulir;
