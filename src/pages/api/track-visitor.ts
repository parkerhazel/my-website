import type { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

// Configure AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const lambda = new AWS.Lambda();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Extract client IP address
    const forwardedFor = req.headers["x-forwarded-for"];
    const ip = Array.isArray(forwardedFor)
      ? forwardedFor[0] // If it's an array, take the first IP
      : forwardedFor?.split(",")[0]?.trim() || req.socket.remoteAddress;

    const payload = {
      ip,
      timestamp: new Date().toISOString(), // Optional: add timestamp
    };

    const params = {
      FunctionName: "LoggingLambda-dev", // Replace with your Lambda function's name
      InvocationType: "RequestResponse",
      Payload: JSON.stringify(payload),
    };

    const response = await lambda.invoke(params).promise();
    const lambdaResult = JSON.parse(response.Payload as string);

    res.status(200).json({ message: "Lambda invoked", data: lambdaResult });
  } catch (error) {
    console.error("Error invoking Lambda:", error);
    res.status(500).json({ message: "Error invoking Lambda", error });
  }
}
