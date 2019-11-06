import AsyncStorage from '@react-native-community/async-storage';

const KEY_STORAGE_SETTINGS = 'key_storage_settings';

export const loadSettings = async () => {
  console.log('Reading local user settings');

  try {
    let settings = await AsyncStorage.getItem(KEY_STORAGE_SETTINGS);
    console.log('Settings data = ', settings);
    if (settings === undefined || settings !== null) {
      return JSON.parse(settings);
    }
    return null; // This seems like first app  start
  } catch (error) {
    console.log('Error loading settings', error);
  }
};

export const saveSettings = settings => {
  AsyncStorage.setItem(KEY_STORAGE_SETTINGS, JSON.stringify(settings));
};
