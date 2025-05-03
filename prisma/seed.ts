import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from DB",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from DB",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from DB",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  // const t0=performance.now();
  // console.log
  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
