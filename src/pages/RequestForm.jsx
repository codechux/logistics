import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Import Axios

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GeneratedWaybill = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }
`;

const Request = () => {
  const [formData, setFormData] = useState({
    descriptions: "",
    departureLocation: "",
    arrivalLocation: "",
    shipmentDeparture: "",
    shipmentArrival: "",
    pickupAddress: "",
  });
  const [waybillNumber, setWaybillNumber] = useState("");
  const [error, setError] = useState("");

  const generateWaybillNumber = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = 8;
    let waybillNumber = "";
    for (let i = 0; i < length; i++) {
      waybillNumber += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return waybillNumber;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate waybill number
    const waybillNumber = generateWaybillNumber();

    // Set up Firebase Firestore URL
    const firestoreURL =
      "https://gatewaylogistics-97912-default-rtdb.firebaseio.com/waybillData.json";

    try {
      // Send POST request to Firebase Firestore
      const response = await axios.post(firestoreURL, {
        descriptions: formData.descriptions,
        departureLocation: formData.departureLocation,
        arrivalLocation: formData.arrivalLocation,
        shipmentDeparture: formData.shipmentDeparture,
        shipmentArrival: formData.shipmentArrival,
        pickupAddress: formData.pickupAddress,
        waybillNumber: waybillNumber,
      });

      console.log("Waybill data sent successfully:", response.data, response);
      setWaybillNumber(waybillNumber);
    } catch (error) {
      console.error("Error sending waybill data:", error);
      setError("Failed to submit the form. Please try again.");
    }
  };

  return (
    <Container>
      <Title>Waybill Request Form</Title>
      {error && <div>{error}</div>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="descriptions">Descriptions:</label>
          <input
            type="text"
            id="descriptions"
            name="descriptions"
            value={formData.descriptions}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="departureLocation">Departure Location:</label>
          <input
            type="text"
            id="departureLocation"
            name="departureLocation"
            value={formData.departureLocation}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="arrivalLocation">Arrival Location:</label>
          <input
            type="text"
            id="arrivalLocation"
            name="arrivalLocation"
            value={formData.arrivalLocation}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="shipmentDeparture">Shipment Departure:</label>
          <input
            type="date"
            id="shipmentDeparture"
            name="shipmentDeparture"
            value={formData.shipmentDeparture}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="shipmentArrival">Shipment Arrival:</label>
          <input
            type="date"
            id="shipmentArrival"
            name="shipmentArrival"
            value={formData.shipmentArrival}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="pickupAddress">Pickup Address:</label>
          <input
            type="text"
            id="pickupAddress"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      {waybillNumber && (
        <GeneratedWaybill>
          <h3>Waybill Number:</h3>
          <p>{waybillNumber}</p>
        </GeneratedWaybill>
      )}
    </Container>
  );
};

export default Request;
