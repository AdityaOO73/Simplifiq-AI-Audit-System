import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    website: {
      type: String,
      required: true,
      trim: true,
    },

    goals: {
      type: String,
      trim: true,
    },

    reportStatus: {
      type: String,
      enum: [
        "processing",
        "completed",
        "failed",
        "email_failed",
      ],
      default: "processing",
    },

    scrapedData: {
      type: Object,
      default: {},
    },

    auditReport: {
      type: String,
      default: "",
    },

    pdfPath: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model(
  "Lead",
  leadSchema
);

export default Lead;