import ListingsService from '#root/adapters/ListingsService';

const listingsResolver = async () => {
  // return [
  //   {
  //     description: 'booyah',
  //     id: 1,
  //     title: 'test',
  //   }
  // ];
  return await ListingsService.fetchAllListings();
};

export default listingsResolver;
