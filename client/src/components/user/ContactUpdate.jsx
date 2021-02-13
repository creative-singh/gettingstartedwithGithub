import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { userUpdateContact } from "../../redux/actions/userAction";

const ContactUpdateBtn = () => {
  const dispatch = useDispatch();
  //model
  const [
    showContactUpdate,
    setShowContactUpdate,
  ] = useState(false);
  const handleContactUpdateShow = () =>
    setShowContactUpdate(true);
  const handleContactUpdateClose = () =>
    setShowContactUpdate(false);
  //form
  const [contact, setContact] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userUpdateContact({ contact }));
  };

  return (
    <>
      <Link
        onClick={handleContactUpdateShow}
        class="main-btn">
        Contact Update
      </Link>

      {/* ==============password-update--model================ */}

      <Modal
        show={showContactUpdate}
        onHide={handleContactUpdateShow}>
        <Modal.Header>
          <div class="container">
            <div class="row">
              {/* ============================== */}
              <div class="col-3">
                <img
                  class="image-fulid justify-content-start align-items-center"
                  style={{ width: "100px" }}
                  src={logo}
                  alt="vs-med-care-logo"
                />
              </div>
              {/* ============================== */}
              <div className="col-7 mt-2 text-center">
                <Modal.Title className="align-self-center">
                  Password Update
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div class="col-1">
                <Modal.Header
                  closeButton
                  onClick={
                    handleContactUpdateClose
                  }></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div class="form-group">
              <label for="InputContact">
                Contact Number
              </label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                class="form-control"
                placeholder="Enter new contact number"
                required
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <button type="submit" class="model-main-btn">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ContactUpdateBtn;