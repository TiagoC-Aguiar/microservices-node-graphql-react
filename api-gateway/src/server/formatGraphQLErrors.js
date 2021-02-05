import _ from 'lodash';

const formatgraphQLErrors = (error) => {
  const errorDetails = _.get(error, "orginialError.response.body");
  try {
    if(errorDetails) {
      return JSON.parse(errorDetails);
    } 
  } catch(error) {
    console.log(error);
  }
  return error;
}

export default formatgraphQLErrors;
