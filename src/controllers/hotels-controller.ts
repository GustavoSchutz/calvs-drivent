import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import { Hotel } from "@prisma/client";
import { hotelsService } from "@/services/hotels-service";
import httpStatus from "http-status";

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const hotels: Hotel[] = await hotelsService.getAllHotels(userId);
  
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
