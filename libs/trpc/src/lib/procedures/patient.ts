import prisma from '@track.rx/prisma-client';
import { protectedProcedure } from '@track.rx/trpc';
import { z } from 'zod';

const patientProcedures = {
  getPatientById: protectedProcedure
    .input(
      z.object({
        patientId: z.number(),
      })
    )
    .query(async ({ input }) => {
      let patient = await prisma.patient.findUnique({
        where: {
          id: input.patientId,
        },
      });
      return patient;
    }),
  getAllPatientsForUser: protectedProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input }) => {
      let patientsForUser = await prisma.patientGroup.findMany({
        where: {
          userId: input.userId,
        },
        include: {
          patients: true,
        },
      });
      return patientsForUser;
    }),
};
export default patientProcedures;
