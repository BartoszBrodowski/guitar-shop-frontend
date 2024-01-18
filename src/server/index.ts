import { publicProcedure, router } from './trpc';
import { z } from 'zod';
import prisma from './prismaClient';
import { Kind, Type } from '@prisma/client';

export const appRouter = router({
	findGuitarById: publicProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
		const result = await prisma.guitar.findUnique({ where: { id: input.id } });
		if (result === null) throw new Error('Guitar not found');
		return result;
	}),
	getAllGuitars: publicProcedure.query(async () => {
		const allGuitars = await prisma.guitar.findMany();
		return allGuitars;
	}),
	getGuitarPage: publicProcedure
		.input(
			z.object({
				page: z.number(),
				perPage: z.number(),
			})
		)
		.query(async ({ input }) => {
			const { page, perPage } = input;
			const guitars = await prisma.guitar.findMany({ skip: (page - 1) * perPage, take: perPage });

			const totalGuitarsCount = await prisma.guitar.count();

			return {
				guitars,
				totalGuitarsCount,
			};
		}),
	getGuitarKinds: publicProcedure.query(async () => {
		const kinds = await prisma.guitar.findMany({ select: { type: true }, distinct: ['kind'] });
		return kinds;
	}),
	findGuitarsByKind: publicProcedure
		.input(z.object({ kind: z.nativeEnum(Kind) }))
		.query(async ({ input }) => {
			const result = await prisma.guitar.findMany({ where: { kind: input.kind } });
			return result;
		}),
	guitarCreate: publicProcedure
		.input(
			z.object({
				name: z.string(),
				manufacturerName: z.string(),
				year: z.number(),
				stockAmount: z.number(),
				soldAmount: z.number(),
				type: z.nativeEnum(Type),
				kind: z.nativeEnum(Kind),
				price: z.number(),
				imageUrl: z.string(),
			})
		)
		.mutation(async (opts) => {
			const { input } = opts;

			const guitar = await prisma.guitar.create({ data: input });
			return guitar;
		}),
	findBestSellingItems: publicProcedure.query(async () => {
		const result = await prisma.guitar.findMany({ take: 10, orderBy: [{ soldAmount: 'asc' }] });
		return result;
	}),
});

export type AppRouter = typeof appRouter;
