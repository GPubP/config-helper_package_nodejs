import * as uuid from 'uuid'

export const UnauthorizedError = {
	type: '/errors/v1/Unauthorized',
	title: 'You are not authorized to use this endpoint',
	status: 401,
	identifier: uuid.v4(),
	code: 'Unauthorized',
}
