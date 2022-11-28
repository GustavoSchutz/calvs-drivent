import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";

export async function getEnrollmentByUser(req: AuthenticatedRequest, res: Response) {
  try {
    const enrollmentWithAddress = await enrollmentsService.getOneWithAddressByUserId(userId);
  
    return res.status(httpStatus.OK).send(enrollmentWithAddress);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
