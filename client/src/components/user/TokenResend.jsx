import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { userTokenResend } from "../../redux/actions/userAction";

const TokenResend = () => {
  const dispatch = useDispatch();
  //model
  const [showTokenResend, setShowTokenResend] = useState(
    false
  );
  const handleTokenResendShow = () =>
    setShowContactUpdate(true);
  const handleTokenResendClose = () =>
    setShowTokenResend(false);
  //form
  const [contact, setContact] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userTokenResend({ contact }));
  };

  return (
    <>
      <Link
        onClick={handleTokenResendShow}
        class="main-btn">
        Contact Update
      </Link>

      {/* ==============password-update--model================ */}

      <Modal
        show={showTokenResend}
        onHide={handleTokenResendShow}>
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
                    handleTokenResendClose
                  }></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div class="form-group">
              <label for="InputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
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
export default TokenResend;
