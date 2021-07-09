import http from './http';

const user = async () => {
  let {data} = await http.get('user/60d0fe4f5311236168a109cb');
  return data;
};

// const fitnessSave = async params => {
//   let {data} = await http.post('account/save/app', params);
//   return data;
// };

export default {
  user,
};
