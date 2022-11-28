import { prisma } from "@/config";

function getAllHotels() {
  return prisma.hotel.findMany();
}

export default { getAllHotels };
