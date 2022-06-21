import mongoose, { Schema } from "mongoose";

interface IReservation {
  name: string;
  email: string;
  phone: string;
  checkIn: Date;
  checkOut: Date;
  numberOfRooms: number;
  affiliateDetails: {
    token: string;
    sessionCode: string;
    customerCode: string;
  };
  customFields: {
    confirmation: string;
  };
  guestAgesPerRoom: number[][];
  propertyUuid: string;
  roomTypeUuid: string;
  billingAddress: {
    country: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export const Reservation =
  mongoose.models.Reservation ||
  mongoose.model(
    "Reservation",
    new Schema<IReservation>(
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        checkIn: { type: Date, required: true },
        checkOut: { type: Date, required: true },
        numberOfRooms: { type: Number, required: true },
        customFields: {
          confirmation: { type: String },
        },
        affiliateDetails: {
          token: { type: String },
          sessionCode: { type: String },
          customerCode: { type: String },
        },
        guestAgesPerRoom: { type: [[Number]], required: true },
        propertyUuid: { type: String, required: true },
        roomTypeUuid: { type: String, required: true },
        billingAddress: {
          country: { type: String, required: true },
          address: { type: String, required: true },
          city: { type: String, required: true },
          zipCode: { type: String, required: true },
          state: { type: String },
        },
      },
      { timestamps: { createdAt: true, updatedAt: false } }
    )
  );
