export default {
	verbose: false,
	displayName: 'SERVER',
	rootDir: '.',
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.[jt]s'
	],
	coverageDirectory: './test/coverage',
	coverageReporters: [
		'lcov',
		'text'
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	},
	moduleFileExtensions: [
		'js',
		'json',
		'ts'
	],
	moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1', },
	transform: { '.*/.[jt]s$': ['ts-jest', { useESM: true }] },
	testMatch: [
		'<rootDir>/src/**/*.spec.[jt]s',
		'<rootDir>/test/**/*.spec.[jt]s'
	],
	testPathIgnorePatterns: [
		'<rootDir>/src/dist'
	],
	setupFilesAfterEnv: [
		'jest-extended'
	],
	forceExit: true,
	extensionsToTreatAsEsm: [
		".ts"
	],
};
