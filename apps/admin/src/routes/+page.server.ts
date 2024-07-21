import { prisma } from '$lib/server/db'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const users = await prisma.user.findMany()

	console.log({ users })
	return {
		users,
	}
}
