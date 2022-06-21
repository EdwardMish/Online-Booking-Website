import mongoose, { Schema } from "mongoose";

export interface IProperty {
  ids: string[];
  lat: string[];
  lng: string[];
  locality: string;
}

export const Property =
  mongoose.models.Property ||
  mongoose.model(
    "Property",
    new Schema<IProperty>(
      {
        ids: { type: [String] },
        lat: { type: [String] },
        lng: { type: [String] },
        locality: { type: String },
      },
      {
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at",
        },
      }
    )
  );
