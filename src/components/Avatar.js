import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import appApi from '../api/app';

const Avatar = () => {
  const [photo, setPhoto] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUserAPI() {
      const resp = await appApi.user();
      const {picture, firstName} = resp;
      setPhoto(picture);
      updateName(firstName);
    }
    fetchUserAPI();
  }, []);

  const updateName = name => {
    dispatch({
      type: 'UPDATE_NAME',
      name,
    });
  };

  return <Image source={{uri: photo}} />;
};

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
