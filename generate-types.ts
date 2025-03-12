import { exec } from 'child_process'
import { config } from 'dotenv'
import { promisify } from 'util'

// Promisify exec to use it with async/await
const execPromise = promisify(exec)

// Load environment variables from .env file
config()

// Destructure environment variables
const {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
	CONTENTFUL_ENVIRONMENT,
} = process.env

// Check for missing environment variables
if (
	!CONTENTFUL_SPACE_ID ||
	!CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN ||
	!CONTENTFUL_ENVIRONMENT
) {
	console.error('Error: Missing required environment variables.')
	process.exit(1)
}

// Define the command using the environment variables
const command = `cf-content-types-generator -s ${CONTENTFUL_SPACE_ID} -t ${CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN} -o ./interfaces/types -e ${CONTENTFUL_ENVIRONMENT} --v10`

// Function to run the command
const runCommand = async () => {
	try {
		const { stdout, stderr } = await execPromise(command)
		// Log stdout and stderr
		console.log(stdout)
		if (stderr) {
			console.error(stderr)
		}
	} catch (error) {
		console.error(`Error executing command: ${error}`)
	}
}

// Run the command
runCommand()
