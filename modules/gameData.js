// Import modules to compartmentalize things.
import { Resources } from './resources.js';
console.log(Resources)

// defaultSettings object
const defaultSettings = {
    appSettings: {
        version: '1.0.0.1'
    }
}

// first check if a save file exists, if yes, load it.
if (localStorage.getItem('valheim-clicker')) {
    const gameData = JSON.parse(localStorage.getItem('valheim-clicker'))

    // NOTE: VERSION CHECK
    // check if there is a new version.  If there is, prompt for update.
    if (gameData.appSettings.version !== defaultSettings.appSettings.version) {
        // Display modal asking if user wants to update.
        // Use async/await function here for a user response if that's possible.
        console.log(`Your version of ${gameData.appSettings.version} can be updated to ${defaultSettings.appSettings.version}. Would you like to update now?`)
        userResponse = 'no'
        // Switch might not be the best option here but it's what I think it is.
        // take response from the update confirmation dialog and run code.
        switch (userResponse) {
            case "yes":
                // perform update changes
                console.log(`Updating to version ${defaultSettings.appSettings.version} from ${gameData.appSettings.version}`)
                break;
            case "no":
                // just load their existing game with existing version.
                console.log('User refused update.  Loading existing game.')
                break;
            case "close":
                // close modal dialog and just load the existing game.
                console.log('Closing modal and loading default game.')
                break;
            default:
                // just to report an error I guess?
                console.log('There was an error in the user response for: Updating version')
                break;
        }
    }

} else {  // if there is no save file, generate save data with the default values for their first time playing!
    console.log("No save found.  Setting default values...")
    localStorage.setItem('valheim-clicker', JSON.stringify(defaultSettings))
}


