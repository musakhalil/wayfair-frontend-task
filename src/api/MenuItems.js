import axios from 'axios';

export const apiURL = 'https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms';
/*
  Using Axios package to fetch data from API endpoint for menu items
*/
export const MenuItems = async () => {
  try {
    return await axios.get(apiURL);
  } catch (e) {
    return [];
  }
};