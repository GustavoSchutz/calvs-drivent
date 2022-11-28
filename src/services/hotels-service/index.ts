
import { notFoundError, unauthorizedError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";
import { Hotel } from "@prisma/client";

async function getHotels() {
  const hotels: Hotel[] = await hotelRepository.getAllHotels();

  if (!hotels) {
    throw notFoundError();
  }

  return hotels;
}

const hotelsService = {
  getHotels
};
  
export default hotelsService;
  
