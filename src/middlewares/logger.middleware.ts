import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  console.warn(
    "*********************************************** ",
    req.url,
    " ***********************************************"
  );
  console.log("REQUEST METHOD =====> ", req.method);
  console.log("REQUEST BODY =====> ", req.body);
  console.log("REQUEST PARAMS =====> ", req.params);
  console.log("REQUEST QUERY =====> ", req.query);

  // Create a copy of the original res.send method
  const originalSend = res.send.bind(res);

  // Override the res.send method
  res.send = (body: any): Response => {
    // Log the response body or content
    console.log("RESPONSE BODY:", body);

    console.warn(
      "===============================================> ",
      req.url,
      "<=============================================="
    );

    console.log("\n");

    // Call the original res.send method to send the response
    return originalSend(body);
  };

  next();
};
